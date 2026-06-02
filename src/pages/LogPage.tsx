import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { useTrainingLog } from '../hooks/useTrainingLog'
import LogForm from '../components/LogForm'
import TrainingLog from '../components/TrainingLog'

export default function LogPage() {
  const navigate = useNavigate()
  const { state } = useAppContext()
  const { logs, addLog, deleteLog } = useTrainingLog()
  const [showForm, setShowForm] = useState(false)

  const trainingPlan = state.trainingPlan
  const days = trainingPlan?.weeklyPlan || []

  // 如果没有训练计划，提示用户先去生成
  if (!trainingPlan) {
    return (
      <div className="text-center py-16">
        <p className="text-4xl mb-4">📝</p>
        <h2 className="text-2xl font-bold text-white mb-3">还没有训练计划</h2>
        <p className="text-gray-400 mb-6">先生成训练计划，再来记录训练日志吧！</p>
        <button onClick={() => navigate('/')}
          className="px-6 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition-colors">
          🏃 去生成训练计划
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto py-4 space-y-6">
      {/* 标题 */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">📝 训练日志</h1>
        <button onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-dark transition-colors">
          {showForm ? '✕ 关闭' : '+ 新增记录'}
        </button>
      </div>

      {/* 日志表单 */}
      {showForm && (
        <LogForm
          days={days}
          onSubmit={(data) => {
            addLog(data)
            setShowForm(false)
          }}
          onCancel={() => setShowForm(false)}
        />
      )}

      {/* 统计概览 */}
      {logs.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-green-500/10 rounded-xl p-3 text-center">
            <p className="text-xl font-bold text-green-400">
              {logs.filter((l) => l.completed).length}
            </p>
            <p className="text-xs text-gray-400">已完成</p>
          </div>
          <div className="bg-red-500/10 rounded-xl p-3 text-center">
            <p className="text-xl font-bold text-red-400">
              {logs.filter((l) => !l.completed).length}
            </p>
            <p className="text-xs text-gray-400">未完成</p>
          </div>
          <div className="bg-blue-500/10 rounded-xl p-3 text-center">
            <p className="text-xl font-bold text-blue-400">
              {logs.length > 0
                ? Math.round((logs.filter((l) => l.completed).length / logs.length) * 100)
                : 0}%
            </p>
            <p className="text-xs text-gray-400">完成率</p>
          </div>
        </div>
      )}

      {/* 日志列表 */}
      <TrainingLog logs={logs} onDelete={deleteLog} />
    </div>
  )
}
