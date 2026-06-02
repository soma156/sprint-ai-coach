import type { DayPlan } from '../types'

interface Props {
  day: DayPlan
  index: number
}

export default function DayCard({ day, index }: Props) {
  const cardColors = [
    'border-l-accent',
    'border-l-blue-500',
    'border-l-green-500',
    'border-l-yellow-500',
    'border-l-purple-500',
    'border-l-pink-500',
    'border-l-cyan-500',
  ]
  const borderColor = cardColors[index % cardColors.length]

  const sections: { label: string; key: keyof DayPlan; icon: string }[] = [
    { label: '🔥 热身', key: 'warmup', icon: '🔥' },
    { label: '🏃 主训练', key: 'mainTraining', icon: '🏃' },
    { label: '💪 力量训练', key: 'strengthTraining', icon: '💪' },
    { label: '🔧 辅助训练', key: 'auxiliary', icon: '🔧' },
    { label: '🧊 恢复放松', key: 'recovery', icon: '🧊' },
  ]

  return (
    <div className={`bg-white/5 border border-white/10 border-l-4 ${borderColor} rounded-xl p-5`}>
      {/* 日期标题 */}
      <h3 className="text-lg font-bold text-white mb-3">{day.dayOfWeek}</h3>

      {/* 训练内容 */}
      <div className="space-y-3">
        {sections.map((sec) => (
          <div key={sec.key}>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              {sec.label}
            </span>
            <p className="text-gray-300 text-sm mt-0.5 leading-relaxed">
              {day[sec.key] as string}
            </p>
          </div>
        ))}
      </div>

      {/* 目的和注意事项 */}
      <div className="mt-4 pt-3 border-t border-white/10 space-y-2">
        <div>
          <span className="text-xs font-semibold text-green-400">🎯 训练目的</span>
          <p className="text-gray-400 text-sm mt-0.5">{day.purpose}</p>
        </div>
        <div>
          <span className="text-xs font-semibold text-yellow-400">⚠️ 注意事项</span>
          <p className="text-gray-400 text-sm mt-0.5">{day.notes}</p>
        </div>
      </div>
    </div>
  )
}
