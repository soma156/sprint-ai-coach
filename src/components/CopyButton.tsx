import { useState } from 'react'
import type { TrainingPlan } from '../types'

interface Props { plan: TrainingPlan }

export default function CopyButton({ plan }: Props) {
  const [copied, setCopied] = useState(false)

  function buildText(): string {
    let text = '🏃 AI短跑训练计划 (Sprint AI Coach)\n\n'

    // 运动员画像
    if (plan.athleteProfile) {
      const p = plan.athleteProfile
      text += '═'.repeat(40) + '\n🧬 运动员画像\n' + '═'.repeat(40) + '\n'
      text += `📐 身体类型：${p.bodyType}\n`
      text += `⚡ 速度特点：${p.speedPhase}\n`
      if (p.strengths?.length) text += `✅ 优势：${p.strengths.join('、')}\n`
      if (p.weaknesses?.length) text += `⚠️ 短板：${p.weaknesses.join('、')}\n`
      if (p.injuryRisks?.length) text += `🏥 伤病风险：${p.injuryRisks.join('、')}\n`
      if (p.trainingRisks?.length) text += `📊 训练风险：${p.trainingRisks.join('、')}\n`
      text += '\n'
    }

    // 训练重点
    if (plan.trainingPriorities) {
      text += '🎯 训练重点分配：\n'
      const tp = plan.trainingPriorities
      const items = [
        { l: '最高速度', v: tp.maxSpeed }, { l: '加速', v: tp.acceleration },
        { l: '力量', v: tp.strength }, { l: '爆发力', v: tp.power },
        { l: '速度耐力', v: tp.endurance }, { l: '技术', v: tp.technique },
        { l: '恢复', v: tp.recovery }, { l: '柔韧性', v: tp.flexibility },
      ].filter(x => x.v > 0).sort((a, b) => b.v - a.v)
      items.forEach(x => { text += `  ${x.l}：${x.v}%\n` })
      text += '\n'
    }

    // 水平分析
    text += '📊 水平分析：' + plan.analysis + '\n\n'
    text += '━'.repeat(40) + '\n\n'

    // 周计划
    plan.weeklyPlan.forEach(day => {
      text += `📅 ${day.dayOfWeek}\n`
      text += `  热身：${day.warmup}\n  主训练：${day.mainTraining}\n`
      text += `  力量：${day.strengthTraining}\n  辅助：${day.auxiliary}\n`
      text += `  恢复：${day.recovery}\n  目的：${day.purpose}\n  注意：${day.notes}\n\n`
    })

    // 路线图
    if (plan.roadmap?.length) {
      text += '━'.repeat(40) + '\n🗺️ 训练路线图\n'
      plan.roadmap.forEach(p => {
        text += `第${p.phase}阶段 (${p.weeks}周)：${p.goal}\n  重点：${p.focus}\n  指标：${p.indicators?.join('、')}\n\n`
      })
    }

    text += '━'.repeat(40) + '\n'
    text += `📈 速度${plan.statsSummary.speedSessions}次 | 力量${plan.statsSummary.strengthSessions}次 | 恢复${plan.statsSummary.recoverySessions}次\n`

    if (plan.riskAlerts.length) {
      text += '\n⚠️ 风险提醒：\n'
      plan.riskAlerts.forEach(r => { text += `  • ${r}\n` })
    }
    return text
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(buildText())
      setCopied(true); setTimeout(() => setCopied(false), 2000)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = buildText(); document.body.appendChild(ta)
      ta.select(); document.execCommand('copy'); document.body.removeChild(ta)
      setCopied(true); setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button onClick={handleCopy}
      className="flex items-center gap-2 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-gray-300 hover:bg-white/20 transition-colors">
      {copied ? '✅ 已复制' : '📋 一键复制'}
    </button>
  )
}
