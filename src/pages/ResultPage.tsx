import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import LoadingSpinner from '../components/LoadingSpinner'
import DayCard from '../components/DayCard'
import StatsSummary from '../components/StatsSummary'
import RiskAlerts from '../components/RiskAlerts'
import CopyButton from '../components/CopyButton'
import ExportPDF from '../components/ExportPDF'

export default function ResultPage() {
  const navigate = useNavigate()
  const { state } = useAppContext()

  // 如果还在加载中，显示动画
  if (state.isLoading) {
    return <LoadingSpinner />
  }

  // 如果没有训练计划，重定向回首页
  useEffect(() => {
    if (!state.trainingPlan && !state.isLoading) {
      navigate('/', { replace: true })
    }
  }, [state.trainingPlan, state.isLoading, navigate])

  if (!state.trainingPlan) {
    return null
  }

  const { plan } = state
  // 注意：这里 plan = state.trainingPlan
  // 用别名来读取
  const trainingPlan = state.trainingPlan

  return (
    <div className="max-w-4xl mx-auto py-4 space-y-6">
      {/* 顶部操作栏 */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold">📋 你的训练计划</h1>
        <div className="flex gap-2">
          <CopyButton plan={trainingPlan} />
          <ExportPDF plan={trainingPlan} />
        </div>
      </div>

      {/* 水平分析 */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-5">
        <h2 className="text-lg font-semibold text-white mb-2">📊 运动员水平分析</h2>
        <p className="text-gray-300 leading-relaxed">{trainingPlan.analysis}</p>
      </div>

      {/* 统计摘要 */}
      <StatsSummary
        speedSessions={trainingPlan.statsSummary.speedSessions}
        strengthSessions={trainingPlan.statsSummary.strengthSessions}
        recoverySessions={trainingPlan.statsSummary.recoverySessions}
      />

      {/* 风险提醒 */}
      <RiskAlerts alerts={trainingPlan.riskAlerts} />

      {/* 周训练计划 */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">📅 周训练计划</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trainingPlan.weeklyPlan.map((day, i) => (
            <DayCard key={day.dayOfWeek} day={day} index={i} />
          ))}
        </div>
      </div>

      {/* 底部操作 */}
      <div className="flex flex-wrap gap-3 justify-center pt-4 border-t border-white/10">
        <button onClick={() => navigate('/')}
          className="px-6 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/20 transition-colors">
          🔄 重新生成
        </button>
        <button onClick={() => navigate('/log')}
          className="px-6 py-2.5 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-dark transition-colors">
          📝 开始记录训练日志
        </button>
      </div>
    </div>
  )
}
