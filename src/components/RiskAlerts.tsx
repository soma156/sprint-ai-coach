interface Props {
  alerts: string[]
}

export default function RiskAlerts({ alerts }: Props) {
  if (!alerts || alerts.length === 0) return null

  return (
    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
      <h3 className="text-yellow-400 font-semibold text-sm mb-2">⚠️ 风险提醒</h3>
      <ul className="space-y-1.5">
        {alerts.map((alert, i) => (
          <li key={i} className="flex items-start gap-2 text-yellow-300/80 text-sm">
            <span className="text-yellow-400 mt-0.5 shrink-0">•</span>
            {alert}
          </li>
        ))}
      </ul>
    </div>
  )
}
