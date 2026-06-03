import type { UserFormData, TrainingPlan, DeepSeekResponse } from '../types'
import { INJURY_LABELS, EVENT_OPTIONS, EXPERIENCE_OPTIONS, MOBILITY_OPTIONS, SEVERITY_OPTIONS, PHASE_OPTIONS, COMPETITION_OPTIONS, GOAL_OPTIONS, EQUIPMENT_ITEMS } from '../constants'

// ========== 系统角色 Prompt ==========

const SYSTEM_PROMPT = `你是由三名专家组成的联合教练团队：
1. 国家级短跑教练（20年执教经验，精通短跑技术和训练周期规划）
2. 体能教练/力量训练专家（精通运动生物力学、爆发力训练和力量与速度的转化）
3. 运动康复师（精通运动损伤预防、康复训练和身体活动度评估）

你的任务是根据运动员的全面评估数据，生成真正个性化、科学化的短跑训练方案。

## 分析原则

1. **身体比例分析**：根据臂展/身高比、腿长/身高比、大腿/小腿比等数据，判断运动员是步频型还是步幅型，分析身体结构对短跑项目的适配度。

2. **速度阶段分析**：根据30m/60m/100m/150m/200m的分段成绩，分析起跑能力、加速能力、最高速度能力和速度保持能力，找出薄弱环节。

3. **爆发力-力量-速度匹配分析**：根据力量数据计算相对力量（力量/体重），分析是否存在"力量足够但速度不足"或"速度快但力量不够"等不匹配问题。

4. **柔韧性限制分析**：根据活动度评估，分析是否存在影响步幅、步频或技术动作的活动度限制。

5. **伤病风险分层**：综合伤病档案、柔韧性和训练背景，评估腘绳肌拉伤、跟腱炎、髌腱问题、腰背问题的风险等级。

6. **训练量风险评估**：根据近4周训练量、恢复指标（睡眠/心率/疲劳），判断是否存在过度训练或恢复不足风险。

7. **训练条件适配**：严格基于用户实际拥有的器材和场地制定计划。

8. **目标导向**：根据用户选择的目标动态调整训练重点比例。

## 输出格式（严格JSON，无其他内容）

{
  "athleteProfile": {
    "bodyType": "身体类型分析，如'步频型/步幅型/均衡型，臂展/身高比X，腿长/身高比Y'",
    "speedPhase": "速度阶段特点分析",
    "strengths": ["优势1", "优势2"],
    "weaknesses": ["短板1", "短板2"],
    "injuryRisks": ["伤病风险1", "伤病风险2"],
    "trainingRisks": ["训练风险1（如过度训练风险、恢复不足风险）"]
  },
  "trainingPriorities": {
    "maxSpeed": 数字（最高速度训练占比%）,
    "acceleration": 数字,
    "strength": 数字,
    "power": 数字,
    "endurance": 数字,
    "technique": 数字,
    "recovery": 数字,
    "flexibility": 数字
  },
  "analysis": "综合水平分析，200字以内",
  "weeklyPlan": [
    {
      "dayOfWeek": "周一",
      "warmup": "热身内容",
      "mainTraining": "主训练内容（含训练量和强度）",
      "strengthTraining": "力量训练内容",
      "auxiliary": "辅助训练",
      "recovery": "恢复放松",
      "purpose": "训练目的",
      "notes": "注意事项（特别是伤病相关）"
    }
  ],
  "roadmap": [
    {
      "phase": 1,
      "weeks": "1-4",
      "goal": "阶段目标",
      "focus": "训练重点说明",
      "indicators": ["评估指标1", "评估指标2"]
    }
  ],
  "statsSummary": {
    "speedSessions": 数字,
    "strengthSessions": 数字,
    "recoverySessions": 数字
  },
  "riskAlerts": ["风险提醒1", "风险提醒2"]
}

重要规则：
- weeklyPlan 仅包含训练日
- roadmap 根据planWeeks生成（8周→2个阶段，12周→3个阶段，16周→4个阶段）
- 训练内容必须基于用户拥有的器材
- 所有内容使用中文
- 只返回JSON，不要markdown代码块`

// ========== 构建用户提示词 ==========

function buildUserPrompt(data: UserFormData): string {
  const parts: string[] = []

  // 1. 基本信息
  parts.push(`【基本信息】
- 年龄：${data.age}岁 | 性别：${data.gender === 'male' ? '男' : '女'}
- 身高：${data.height}cm | 体重：${data.weight}kg
- 项目：${EVENT_OPTIONS.find(e => e.value === data.event)?.label}
- 当前最好成绩：${data.currentBest}秒 | 目标成绩：${data.targetTime}秒
- 计划周期：${data.planWeeks}周 | 每周训练：${data.trainingDaysPerWeek}天
- 训练年限：${EXPERIENCE_OPTIONS.find(e => e.value === data.experience)?.label}
- 伤病概况：${data.injuries.includes('none') ? '无伤病' : data.injuries.filter(i => i !== 'none').map(i => INJURY_LABELS[i]).join('、')}`)

  // 2. 身体比例
  const bm = data.bodyMeasurements
  if (Object.values(bm).some(v => v > 0)) {
    parts.push(`【身体比例】
- 臂展：${bm.armSpan || '未填'}cm | 坐高：${bm.sittingHeight || '未填'}cm
- 腿长：${bm.legLength || '未填'}cm | 大腿长：${bm.thighLength || '未填'}cm | 小腿长：${bm.calfLength || '未填'}cm
- 足长：${bm.footLength || '未填'}cm
${bm.legLength && data.height ? `→ 腿长/身高比：${(bm.legLength / data.height * 100).toFixed(1)}%` : ''}
${bm.armSpan && data.height ? `→ 臂展/身高比：${(bm.armSpan / data.height * 100).toFixed(1)}%` : ''}`)
  }

  // 3. 速度测试
  const st = data.speedTests
  if (Object.values(st).some(v => v !== undefined)) {
    parts.push(`【速度测试成绩】
${st.time30m ? `- 30米：${st.time30m}秒 (起跑能力)` : ''}
${st.time60m ? `- 60米：${st.time60m}秒 (加速能力)` : ''}
${st.time100m ? `- 100米：${st.time100m}秒 (最高速度)` : ''}
${st.time150m ? `- 150米：${st.time150m}秒 (速度保持)` : ''}
${st.time200m ? `- 200米：${st.time200m}秒 (速度耐力)` : ''}`.replace(/^- $/gm, '').replace(/\n\n+/g, '\n'))
  }

  // 4. 爆发力
  const pt = data.powerTests
  if (Object.values(pt).some(v => v !== undefined)) {
    parts.push(`【爆发力测试】
${pt.standingLongJump ? `- 立定跳远：${pt.standingLongJump}米` : ''}
${pt.standingTripleJump ? `- 立定三级跳：${pt.standingTripleJump}米` : ''}
${pt.verticalReach ? `- 原地摸高：${pt.verticalReach}cm` : ''}
${pt.cmj ? `- CMJ反向纵跳：${pt.cmj}cm` : ''}`.replace(/^- $/gm, '').replace(/\n\n+/g, '\n'))
  }

  // 5. 力量
  const strTests = data.strengthTests
  if (Object.values(strTests).some(v => v !== undefined)) {
    parts.push(`【力量测试 1RM】
${strTests.squat1RM ? `- 深蹲：${strTests.squat1RM}kg (相对力量 ${(strTests.squat1RM / data.weight).toFixed(2)}x体重)` : ''}
${strTests.halfSquat1RM ? `- 半蹲：${strTests.halfSquat1RM}kg (相对力量 ${(strTests.halfSquat1RM / data.weight).toFixed(2)}x体重)` : ''}
${strTests.deadlift1RM ? `- 硬拉：${strTests.deadlift1RM}kg` : ''}
${strTests.benchPress1RM ? `- 卧推：${strTests.benchPress1RM}kg` : ''}`.replace(/^- $/gm, '').replace(/\n\n+/g, '\n'))
  }

  // 6. 柔韧性
  const f = data.flexibility
  parts.push(`【柔韧性与活动度】
- 踝关节活动度：${MOBILITY_OPTIONS.find(m => m.value === f.ankleMobility)?.label}
- 髋关节活动度：${MOBILITY_OPTIONS.find(m => m.value === f.hipMobility)?.label}
- 深蹲能力：${MOBILITY_OPTIONS.find(m => m.value === f.squatAbility)?.label}
- 骨盆姿态：${f.pelvicPosture === 'neutral' ? '中立位' : f.pelvicPosture === 'anterior_tilt' ? '前倾' : '后倾'}
- 坐位体前屈：${MOBILITY_OPTIONS.find(m => m.value === f.sitAndReach)?.label}
- 腘绳肌柔韧性：${MOBILITY_OPTIONS.find(m => m.value === f.hamstringFlexibility)?.label}`)

  // 7. 伤病档案
  if (data.injuryRecords.length > 0) {
    parts.push(`【详细伤病档案】
${data.injuryRecords.map(r =>
    `- ${r.bodyPart}：${r.occurredDate}受伤，${SEVERITY_OPTIONS.find(s => s.value === r.severity)?.label}，${r.isRecurring ? '曾复发' : '未复发'}，${r.fullyRecovered ? '已完全恢复' : '⚠️未完全恢复'}${r.notes ? `，备注：${r.notes}` : ''}`
  ).join('\n')}`)
  }

  // 8. 训练背景
  const bg = data.trainingBackground
  parts.push(`【训练背景】
- 训练年龄：${bg.trainingAge}年 | 近4周平均训练量：${bg.recent4WeekVolume || '未填'}小时/周
- 每周专项训练：${bg.weeklySpecificSessions}次 | 每周力量训练：${bg.weeklyStrengthSessions}次
- 比赛经验：${COMPETITION_OPTIONS.find(c => c.value === bg.competitionExperience)?.label}
- 当前阶段：${PHASE_OPTIONS.find(p => p.value === bg.currentPhase)?.label}`)

  // 9. 技术特点
  const t = data.technicalSkills
  parts.push(`【技术特点自评（1-5分）】
- 起跑能力：${t.startAbility}分 | 加速能力：${t.accelerationAbility}分
- 最高速度能力：${t.maxSpeedAbility}分 | 后程能力：${t.lateRaceAbility}分
→ 根据自评，运动员偏向：${getAthleteType(t)}`)

  // 10. 恢复能力
  const r = data.recoveryStatus
  parts.push(`【恢复能力】
- 睡眠：${r.avgSleepHours}小时/天，质量${r.sleepQuality}/5
- 静息心率：${r.restingHeartRate || '未填'}次/分
- 主观疲劳：${r.subjectiveFatigue}/5 | 心理压力：${r.stressLevel}/5
- 恢复感受：${r.recoveryFeeling === 'good' ? '良好' : r.recoveryFeeling === 'normal' ? '一般' : '差'}`)

  // 11. 训练条件
  const c = data.trainingConditions
  const available = EQUIPMENT_ITEMS.filter(item => c[item.key as keyof typeof c] as boolean).map(item => item.label)
  parts.push(`【训练条件】
可用器材：${available.length > 0 ? available.join('、') : '基本无器材'}
${c.hasOther ? `其他器材：${c.hasOther}` : ''}`)

  // 12. 目标
  if (data.goals.length > 0) {
    parts.push(`【训练目标】
${data.goals.map(g => {
    const goalInfo = GOAL_OPTIONS.find(go => go.value === g)
    return `- ${goalInfo?.icon || ''} ${goalInfo?.label || g}`
  }).join('\n')}`)
  }

  return `请根据以下全面评估数据，为运动员制定个性化短跑训练方案。注意：标记为"未填"的数据表示运动员未提供，请基于已有数据进行分析。

${parts.join('\n\n')}

请严格按照系统提示中的JSON格式返回完整训练方案。`
}

function getAthleteType(t: UserFormData['technicalSkills']): string {
  const max = Math.max(t.startAbility, t.accelerationAbility, t.maxSpeedAbility, t.lateRaceAbility)
  const types: string[] = []
  if (t.startAbility === max) types.push('起跑型')
  if (t.accelerationAbility === max) types.push('加速型')
  if (t.maxSpeedAbility === max) types.push('最高速度型')
  if (t.lateRaceAbility === max) types.push('后程型')
  return types.length === 4 ? '均衡型' : types.join('/')
}

// ========== API 调用 ==========

// 开发环境：Vite 代理，生产环境：直接调 DeepSeek（国内可访问）
const API_URL = import.meta.env.DEV
  ? '/api/deepseek/chat/completions'
  : 'https://api.deepseek.com/v1/chat/completions'

const API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY as string

export async function generateTrainingPlan(data: UserFormData, adminKey?: string): Promise<TrainingPlan> {
  const requestBody = {
    model: 'deepseek-chat',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: buildUserPrompt(data) },
    ],
    temperature: 0.7,
    max_tokens: 8192,
    ...(adminKey ? { _admin: adminKey } : {}),
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(requestBody),
  })

  if (!response.ok) {
    // 429 频率限制
    if (response.status === 429) {
      const data = await response.json().catch(() => ({ error: '今天的使用次数已用完' }))
      throw new Error(data.error || '你今天的使用次数已用完，请明天再来')
    }
    const errorText = await response.text()
    let msg = `请求失败 (${response.status})`
    try { const d = JSON.parse(errorText); if (d.error) msg = d.error } catch {}
    throw new Error(msg)
  }

  const result: DeepSeekResponse = await response.json()
  const content = result.choices?.[0]?.message?.content
  if (!content) throw new Error('AI 未返回有效内容，请重试')

  return parsePlanResponse(content)
}

function parsePlanResponse(content: string): TrainingPlan {
  let jsonStr = content.trim()
  if (jsonStr.startsWith('```')) {
    const end = jsonStr.lastIndexOf('```')
    jsonStr = jsonStr.slice(jsonStr.indexOf('\n') + 1, end).trim()
  }

  try {
    const parsed = JSON.parse(jsonStr)

    return {
      athleteProfile: {
        bodyType: parsed.athleteProfile?.bodyType || '',
        speedPhase: parsed.athleteProfile?.speedPhase || '',
        strengths: parsed.athleteProfile?.strengths || [],
        weaknesses: parsed.athleteProfile?.weaknesses || [],
        injuryRisks: parsed.athleteProfile?.injuryRisks || [],
        trainingRisks: parsed.athleteProfile?.trainingRisks || [],
      },
      trainingPriorities: {
        maxSpeed: Number(parsed.trainingPriorities?.maxSpeed) || 0,
        acceleration: Number(parsed.trainingPriorities?.acceleration) || 0,
        strength: Number(parsed.trainingPriorities?.strength) || 0,
        power: Number(parsed.trainingPriorities?.power) || 0,
        endurance: Number(parsed.trainingPriorities?.endurance) || 0,
        technique: Number(parsed.trainingPriorities?.technique) || 0,
        recovery: Number(parsed.trainingPriorities?.recovery) || 0,
        flexibility: Number(parsed.trainingPriorities?.flexibility) || 0,
      },
      analysis: parsed.analysis || '',
      weeklyPlan: parsed.weeklyPlan || [],
      roadmap: parsed.roadmap || [],
      statsSummary: {
        speedSessions: Number(parsed.statsSummary?.speedSessions) || 0,
        strengthSessions: Number(parsed.statsSummary?.strengthSessions) || 0,
        recoverySessions: Number(parsed.statsSummary?.recoverySessions) || 0,
      },
      riskAlerts: Array.isArray(parsed.riskAlerts) ? parsed.riskAlerts : [],
    }
  } catch (err) {
    if (err instanceof SyntaxError) throw new Error('AI 返回内容无法解析，请重试')
    throw err
  }
}
