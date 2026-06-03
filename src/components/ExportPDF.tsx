import { useState } from 'react'
import type { TrainingPlan } from '../types'

interface Props {
  plan: TrainingPlan
}

export default function ExportPDF({ plan }: Props) {
  const [printing, setPrinting] = useState(false)

  function handlePrint() {
    setPrinting(true)

    // 构建打印内容
    const printWindow = window.open('', '_blank', 'width=800,height=600')
    if (!printWindow) { setPrinting(false); return }

    let html = `
<!DOCTYPE html><html><head><meta charset="utf-8"><title>训练计划</title>
<style>
  body { font-family: 'Microsoft YaHei', 'PingFang SC', 'Noto Sans SC', sans-serif; padding: 20px; line-height: 1.8; color: #000; }
  h1 { text-align: center; font-size: 22px; margin-bottom: 5px; }
  h2 { font-size: 16px; border-bottom: 2px solid #333; padding-bottom: 5px; margin-top: 20px; }
  h3 { font-size: 14px; }
  .section { margin: 15px 0; padding: 10px; border-left: 4px solid #F97316; background: #fff8f3; }
  .day { margin: 10px 0; padding: 10px; border: 1px solid #ddd; border-radius: 6px; }
  .day-title { font-size: 14px; font-weight: bold; color: #F97316; }
  .label { font-size: 11px; color: #888; }
  .text { font-size: 12px; margin-bottom: 4px; }
  .bar { display: flex; align-items: center; margin: 3px 0; }
  .bar-label { width: 80px; font-size: 11px; }
  .bar-fill { height: 14px; border-radius: 3px; padding: 0 4px; font-size: 10px; color: #fff; display: flex; align-items: center; }
  table { border-collapse: collapse; width: 100%; }
  td { padding: 5px 8px; border: 1px solid #ddd; font-size: 11px; }
  .risk { background: #fff3cd; padding: 8px; border-left: 4px solid #ffc107; margin: 8px 0; font-size: 12px; }
  .roadmap { margin: 10px 0; padding: 10px; border-left: 4px solid #1E88E5; background: #f0f7ff; }
  @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
</style></head><body>
<h1>🏃 个性化短跑训练计划</h1>
<h2>🧬 运动员画像</h2>
<div class="section">
  <p class="text"><b>身体类型：</b>${plan.athleteProfile?.bodyType || ''}</p>
  <p class="text"><b>速度特点：</b>${plan.athleteProfile?.speedPhase || ''}</p>
  <p class="text"><b>优势：</b>${plan.athleteProfile?.strengths?.join('、') || ''}</p>
  <p class="text"><b>短板：</b>${plan.athleteProfile?.weaknesses?.join('、') || ''}</p>
  <p class="text"><b>伤病风险：</b>${plan.athleteProfile?.injuryRisks?.join('、') || ''}</p>
</div>
<h2>🎯 训练重点分配</h2>
<div class="section">
${buildPriorityBars(plan)}
</div>
<h2>📊 综合分析</h2>
<div class="section"><p class="text">${plan.analysis}</p></div>
<h2>📅 周训练计划</h2>
${plan.weeklyPlan.map(d => `
<div class="day">
  <p class="day-title">📅 ${d.dayOfWeek} — ${d.purpose}</p>
  <p class="text"><span class="label">🔥 热身：</span>${d.warmup}</p>
  <p class="text"><span class="label">🏃 主训练：</span>${d.mainTraining}</p>
  <p class="text"><span class="label">💪 力量：</span>${d.strengthTraining}</p>
  <p class="text"><span class="label">🔧 辅助：</span>${d.auxiliary}</p>
  <p class="text"><span class="label">🧊 恢复：</span>${d.recovery}</p>
  <p class="text"><span class="label">⚠️ 注意：</span>${d.notes}</p>
</div>`).join('')}
<h2>📈 周统计</h2>
<table><tr><td>速度训练</td><td>${plan.statsSummary.speedSessions}次</td><td>力量训练</td><td>${plan.statsSummary.strengthSessions}次</td><td>恢复训练</td><td>${plan.statsSummary.recoverySessions}次</td></tr></table>
${plan.roadmap?.length ? `
<h2>🗺️ 训练路线图</h2>
${plan.roadmap.map(p => `
<div class="roadmap">
  <p class="text"><b>第${p.phase}阶段</b>（${p.weeks}周）— ${p.goal}</p>
  <p class="text">${p.focus}</p>
  <p class="text">📏 指标：${p.indicators?.join('、')}</p>
</div>`).join('')}` : ''}
${plan.riskAlerts?.length ? `
<h2>⚠️ 风险提醒</h2>
${plan.riskAlerts.map(r => `<div class="risk">• ${r}</div>`).join('')}` : ''}
</body></html>`

    printWindow.document.write(html)
    printWindow.document.close()

    // 等内容渲染完成后打印
    setTimeout(() => {
      printWindow.print()
      setPrinting(false)
    }, 500)
  }

  return (
    <button onClick={handlePrint} disabled={printing}
      className="flex items-center gap-2 px-4 py-2.5 bg-accent/20 border border-accent/50 rounded-lg text-sm font-medium text-accent-light hover:bg-accent/30 transition-colors disabled:opacity-50">
      {printing ? '⏳ 导出中...' : '📄 导出 PDF'}
    </button>
  )
}

function buildPriorityBars(plan: TrainingPlan): string {
  if (!plan.trainingPriorities) return ''
  const items = [
    { l: '最高速度', v: plan.trainingPriorities.maxSpeed || 0, c: '#EF4444' },
    { l: '加速', v: plan.trainingPriorities.acceleration || 0, c: '#F97316' },
    { l: '力量', v: plan.trainingPriorities.strength || 0, c: '#3B82F6' },
    { l: '爆发力', v: plan.trainingPriorities.power || 0, c: '#EAB308' },
    { l: '速度耐力', v: plan.trainingPriorities.endurance || 0, c: '#22C55E' },
    { l: '技术', v: plan.trainingPriorities.technique || 0, c: '#A855F7' },
    { l: '恢复', v: plan.trainingPriorities.recovery || 0, c: '#14B8A6' },
    { l: '柔韧性', v: plan.trainingPriorities.flexibility || 0, c: '#EC4899' },
  ].filter(x => x.v > 0).sort((a, b) => b.v - a.v)
  return items.map(x =>
    `<div class="bar"><span class="bar-label">${x.l}</span><div class="bar-fill" style="width:${Math.max(x.v, 2) * 3}px;background:${x.c}">${x.v}%</div></div>`
  ).join('')
}
