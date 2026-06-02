import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { useTrainingLog } from '../hooks/useTrainingLog'
import { computeDailyStats, computeTotalStats, computeWeeklyStats } from '../utils/stats'
import Charts from '../components/Charts'

export default function StatsPage() {
  const navigate = useNavigate()
  const { state } = useAppContext()
  const { logs } = useTrainingLog()

  // 计算统计数据
  const dailyStats = useMemo(() => computeDailyStats(logs), [logs])
  const totalStats = useMemo(() => computeTotalStats(logs), [logs])
  const weeklyStats = useMemo(() => computeWeeklyStats(logs), [logs])

  const trainingPlan = state.trainingPlan

  // 训练量估算（每周训练天数 × 周数）
  const planTotalSessions = trainingPlan
    ? trainingPlan.statsSummary.speedSessions + trainingPlan.statsSummary.strengthSessions + trainingPlan.statsSummary.recoverySessions
    : 0

  return (
    <div className="max-w-4xl mx-auto py-4 space-y-6">
      <h1 className="text-2xl font-bold">📊 数据统计</h1>

      {/* 训练计划概览 */}
      {trainingPlan && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <h3 className="text-lg font-semibold text-white mb-3">🏃 当前训练计划</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <div>
              <span className="text-gray-400">项目</span>
              <p className="text-white font-medium">{state.formData?.event}</p>
            </div>
            <div>
              <span className="text-gray-400">目标成绩</span>
              <p className="text-white font-medium">{state.formData?.targetTime}秒</p>
            </div>
            <div>
              <span className="text-gray-400">计划周期</span>
              <p className="text-white font-medium">{state.formData?.planWeeks}周</p>
            </div>
            <div>
              <span className="text-gray-400">每周训练次数</span>
              <p className="text-white font-medium">{planTotalSessions}次</p>
            </div>
          </div>
        </div>
      )}

      {/* 图表区域 */}
      <Charts dailyStats={dailyStats} totalStats={totalStats} weeklyStats={weeklyStats} />

      {/* 无训练计划提示 */}
      {!trainingPlan && (
        <div className="text-center py-8">
          <p className="text-gray-400 mb-4">还没有生成训练计划</p>
          <button onClick={() => navigate('/')}
            className="px-6 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition-colors">
            🏃 去生成训练计划
          </button>
        </div>
      )}
    </div>
  )
}
