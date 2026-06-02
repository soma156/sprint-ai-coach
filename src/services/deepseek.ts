import type { UserFormData, TrainingPlan, DeepSeekRequest, DeepSeekResponse } from '../types'
import { INJURY_LABELS } from '../constants'

// ========== 系统角色 Prompt ==========

const SYSTEM_PROMPT = `你是一名国家级短跑教练和运动训练专家，拥有20年执教经验。
你的任务是根据运动员信息，制定科学、合理、符合运动训练学原理的短跑训练计划。

请严格遵循以下规则：
1. 训练内容必须包含速度训练、力量训练和恢复训练三大板块
2. 根据运动员的伤病情况自动调整计划（避免加重伤病的训练动作）
3. 根据目标成绩和计划周期制定合理的训练进度
4. 根据每周训练天数（用户选择的3-7天）安排训练，不是必须每天训练
5. 训练强度和训练量要匹配运动员的训练年限和水平

请以 JSON 格式返回训练计划，格式如下：
{
  "analysis": "运动员当前水平和优劣势分析（200字以内）",
  "weeklyPlan": [
    {
      "dayOfWeek": "周一",
      "warmup": "热身内容",
      "mainTraining": "主训练内容",
      "strengthTraining": "力量训练内容",
      "auxiliary": "辅助训练内容",
      "recovery": "恢复放松内容",
      "purpose": "本日训练目的",
      "notes": "注意事项"
    }
  ],
  "statsSummary": {
    "speedSessions": 数字,
    "strengthSessions": 数字,
    "recoverySessions": 数字
  },
  "riskAlerts": ["风险提醒1", "风险提醒2"]
}

重要：
- weeklyPlan 只包含训练日（根据用户选择的每周训练天数）
- 非训练日不需要返回
- 所有内容使用中文
- 只返回 JSON，不要有其他内容`

// ========== 构建用户提示词 ==========

function buildUserPrompt(data: UserFormData): string {
  const injuryText = data.injuries.includes('none') || data.injuries.length === 0
    ? '无伤病'
    : data.injuries.map((i) => INJURY_LABELS[i] || i).join('、')

  return `请为以下运动员制定个性化短跑训练计划：

【基本信息】
- 年龄：${data.age}岁
- 性别：${data.gender === 'male' ? '男' : '女'}
- 身高：${data.height}cm
- 体重：${data.weight}kg

【训练情况】
- 项目：${data.event}
- 当前最好成绩：${data.currentBest}秒
- 目标成绩：${data.targetTime}秒
- 计划达成周期：${data.planWeeks}周
- 每周训练天数：${data.trainingDaysPerWeek}天
- 训练年限：${data.experience}
- 力量条件：${data.strengthCondition === 'gym' ? '有健身房' : '无健身房'}

【伤病情况】
${injuryText}

请根据以上信息制定训练计划，特别注意伤病部位的训练调整。`
}

// ========== 调用 DeepSeek API ==========

const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY as string

// 开发环境通过 Vite 代理转发（避免浏览器跨域），生产环境直接请求
const API_URL = import.meta.env.DEV
  ? '/api/deepseek/v1/chat/completions'        // 走 Vite 代理
  : 'https://api.deepseek.com/v1/chat/completions'  // 直接请求

export async function generateTrainingPlan(data: UserFormData): Promise<TrainingPlan> {
  if (!DEEPSEEK_API_KEY || DEEPSEEK_API_KEY === 'sk-your-api-key-here') {
    throw new Error('请先在 .env 文件中配置你的 DeepSeek API Key')
  }

  const requestBody: DeepSeekRequest = {
    model: 'deepseek-chat',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: buildUserPrompt(data) },
    ],
    temperature: 0.7,
    max_tokens: 4096,
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify(requestBody),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`API 请求失败 (${response.status}): ${errorText}`)
  }

  const result: DeepSeekResponse = await response.json()
  const content = result.choices?.[0]?.message?.content

  if (!content) {
    throw new Error('AI 未返回有效内容，请重试')
  }

  // 解析 AI 返回的 JSON
  return parsePlanResponse(content)
}

// ========== 解析响应 ==========

function parsePlanResponse(content: string): TrainingPlan {
  // 尝试提取 JSON（处理可能的 markdown 代码块包裹）
  let jsonStr = content.trim()

  // 去掉 markdown 代码块标记
  if (jsonStr.startsWith('```')) {
    const end = jsonStr.lastIndexOf('```')
    jsonStr = jsonStr.slice(jsonStr.indexOf('\n') + 1, end).trim()
  }

  try {
    const parsed = JSON.parse(jsonStr)

    // 验证必填字段
    if (!parsed.analysis || !parsed.weeklyPlan || !parsed.statsSummary) {
      throw new Error('AI 返回的数据格式不完整')
    }

    return {
      analysis: parsed.analysis,
      weeklyPlan: parsed.weeklyPlan,
      statsSummary: {
        speedSessions: Number(parsed.statsSummary.speedSessions) || 0,
        strengthSessions: Number(parsed.statsSummary.strengthSessions) || 0,
        recoverySessions: Number(parsed.statsSummary.recoverySessions) || 0,
      },
      riskAlerts: Array.isArray(parsed.riskAlerts) ? parsed.riskAlerts : [],
    }
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new Error('AI 返回内容无法解析，请重试')
    }
    throw err
  }
}
