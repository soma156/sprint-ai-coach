interface Props {
  speedSessions: number
  strengthSessions: number
  recoverySessions: number
}

export default function StatsSummary({ speedSessions, strengthSessions, recoverySessions }: Props) {
  const stats = [
    { label: '速度训练', value: speedSessions, unit: '次', color: 'text-accent', bg: 'bg-accent/10' },
    { label: '力量训练', value: strengthSessions, unit: '次', color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: '恢复训练', value: recoverySessions, unit: '次', color: 'text-green-400', bg: 'bg-green-500/10' },
  ]

  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map((s) => (
        <div key={s.label} className={`${s.bg} rounded-xl p-4 text-center`}>
          <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
          <p className="text-xs text-gray-400 mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
