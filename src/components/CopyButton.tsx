import { useState } from 'react'
import type { TrainingPlan } from '../types'

interface Props {
  plan: TrainingPlan
}

export default function CopyButton({ plan }: Props) {
  const [copied, setCopied] = useState(false)

  function buildText(): string {
    let text = '🏃 AI短跑训练计划\n\n'
    text += `📊 水平分析：${plan.analysis}\n\n`
    text += '━'.repeat(40) + '\n\n'

    plan.weeklyPlan.forEach((day) => {
      text += `📅 ${day.dayOfWeek}\n`
      text += `  热身：${day.warmup}\n`
      text += `  主训练：${day.mainTraining}\n`
      text += `  力量训练：${day.strengthTraining}\n`
      text += `  辅助训练：${day.auxiliary}\n`
      text += `  恢复放松：${day.recovery}\n`
      text += `  目的：${day.purpose}\n`
      text += `  注意：${day.notes}\n\n`
    })

    text += '━'.repeat(40) + '\n'
    text += `📈 速度训练 ${plan.statsSummary.speedSessions}次 | 力量训练 ${plan.statsSummary.strengthSessions}次 | 恢复训练 ${plan.statsSummary.recoverySessions}次\n`

    if (plan.riskAlerts.length > 0) {
      text += '\n⚠️ 风险提醒：\n'
      plan.riskAlerts.forEach((r) => { text += `  • ${r}\n` })
    }

    return text
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(buildText())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // 降级方案
      const textarea = document.createElement('textarea')
      textarea.value = buildText()
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button onClick={handleCopy}
      className="flex items-center gap-2 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/20 transition-colors">
      {copied ? '✅ 已复制' : '📋 一键复制'}
    </button>
  )
}
