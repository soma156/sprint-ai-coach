import { useState } from 'react'
import type { TrainingPlan } from '../types'

interface Props {
  plan: TrainingPlan
  elementId?: string
}

export default function ExportPDF({ plan }: Props) {
  const [exporting, setExporting] = useState(false)

  async function handleExport() {
    setExporting(true)
    try {
      // 动态导入，减小初始包体积
      const { jsPDF } = await import('jspdf')

      const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' })
      const pageWidth = doc.internal.pageSize.getWidth()
      const margin = 15
      const contentWidth = pageWidth - margin * 2
      let y = margin

      // 辅助函数
      function addLine(text: string, fontSize = 10, bold = false) {
        doc.setFontSize(fontSize)
        doc.setFont('helvetica', bold ? 'bold' : 'normal')
        const lines = doc.splitTextToSize(text, contentWidth)
        lines.forEach((line: string) => {
          if (y > 270) {
            doc.addPage()
            y = margin
          }
          doc.text(line, margin, y)
          y += fontSize * 0.45
        })
        y += 2
      }

      // 标题
      doc.setFontSize(18)
      doc.setFont('helvetica', 'bold')
      doc.text('AI Sprint Training Plan', margin, y)
      y += 10

      // 水平分析
      addLine('Athlete Analysis', 12, true)
      addLine(plan.analysis, 10)

      // 训练计划
      addLine('Weekly Training Plan', 12, true)
      plan.weeklyPlan.forEach((day) => {
        if (y > 250) { doc.addPage(); y = margin }
        addLine(day.dayOfWeek, 11, true)
        addLine(`Warmup: ${day.warmup}`, 9)
        addLine(`Main: ${day.mainTraining}`, 9)
        addLine(`Strength: ${day.strengthTraining}`, 9)
        addLine(`Auxiliary: ${day.auxiliary}`, 9)
        addLine(`Recovery: ${day.recovery}`, 9)
        addLine(`Purpose: ${day.purpose}`, 9)
        y += 2
      })

      // 统计
      if (y > 250) { doc.addPage(); y = margin }
      addLine('Weekly Summary', 12, true)
      addLine(`Speed: ${plan.statsSummary.speedSessions}x | Strength: ${plan.statsSummary.strengthSessions}x | Recovery: ${plan.statsSummary.recoverySessions}x`, 10)

      // 风险提醒
      if (plan.riskAlerts.length > 0) {
        addLine('Risk Alerts', 12, true)
        plan.riskAlerts.forEach((r) => addLine(`- ${r}`, 9))
      }

      doc.save('sprint-training-plan.pdf')
    } catch (err) {
      alert('PDF 导出失败，请重试')
      console.error(err)
    } finally {
      setExporting(false)
    }
  }

  return (
    <button onClick={handleExport} disabled={exporting}
      className="flex items-center gap-2 px-4 py-2.5 bg-accent/20 border border-accent/50 rounded-lg text-sm font-medium text-accent-light hover:bg-accent/30 transition-colors disabled:opacity-50">
      {exporting ? '⏳ 导出中...' : '📄 导出 PDF'}
    </button>
  )
}
