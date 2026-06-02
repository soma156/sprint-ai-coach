import type { TrainingLogEntry } from '../types'

interface Props {
  logs: TrainingLogEntry[]
  onDelete: (id: string) => void
}

export default function TrainingLog({ logs, onDelete }: Props) {
  if (logs.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-4xl mb-3">📭</p>
        <p>还没有训练记录</p>
        <p className="text-sm mt-1">开始记录你的训练吧！</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {logs.map((log) => (
        <div key={log.id}
          className={`bg-white/5 border rounded-xl p-4 flex flex-wrap items-center justify-between gap-3
            ${log.completed ? 'border-green-500/30' : 'border-red-500/30'}`}>
          <div className="flex items-center gap-3">
            {/* 完成状态图标 */}
            <span className="text-2xl">{log.completed ? '✅' : '❌'}</span>
            <div>
              <p className="text-white font-medium">
                {log.date} · {log.dayOfWeek}
              </p>
              <div className="flex items-center gap-2 mt-1">
                {/* 完成度进度条 */}
                <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${log.completionRate >= 80 ? 'bg-green-500' :
                        log.completionRate >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                    style={{ width: `${log.completionRate}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400">{log.completionRate}%</span>
              </div>
              {log.notes && (
                <p className="text-gray-500 text-sm mt-1">{log.notes}</p>
              )}
            </div>
          </div>
          <button onClick={() => onDelete(log.id)}
            className="text-gray-500 hover:text-red-400 text-sm transition-colors">
            🗑️ 删除
          </button>
        </div>
      ))}
    </div>
  )
}
