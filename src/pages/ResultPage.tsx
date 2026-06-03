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

  if (state.isLoading) return <LoadingSpinner />

  useEffect(() => {
    if (!state.trainingPlan && !state.isLoading) navigate('/', { replace: true })
  }, [state.trainingPlan, state.isLoading, navigate])

  if (!state.trainingPlan) return null

  const plan = state.trainingPlan
  const profile = plan.athleteProfile
  const priorities = plan.trainingPriorities

  // 训练重点颜色
  const priorityBars = [
    { label: '最高速度', value: priorities.maxSpeed, color: 'bg-red-500' },
    { label: '加速', value: priorities.acceleration, color: 'bg-orange-500' },
    { label: '力量', value: priorities.strength, color: 'bg-blue-500' },
    { label: '爆发力', value: priorities.power, color: 'bg-yellow-500' },
    { label: '速度耐力', value: priorities.endurance, color: 'bg-green-500' },
    { label: '技术', value: priorities.technique, color: 'bg-purple-500' },
    { label: '恢复', value: priorities.recovery, color: 'bg-teal-500' },
    { label: '柔韧性', value: priorities.flexibility, color: 'bg-pink-500' },
  ].filter(p => p.value > 0).sort((a, b) => b.value - a.value)

  return (
    <div className="max-w-4xl mx-auto py-4 space-y-6">
      {/* 顶部 */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold">📋 个性化训练方案</h1>
        <div className="flex gap-2">
          <CopyButton plan={plan} />
          <ExportPDF plan={plan} />
        </div>
      </div>

      {/* === 运动员画像 === */}
      {profile && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
          <h2 className="text-lg font-semibold text-white">🧬 运动员画像</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 身体类型 + 速度阶段 */}
            <div className="space-y-2">
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-3">
                <span className="text-xs text-accent font-semibold">📐 身体类型</span>
                <p className="text-sm text-gray-200 mt-1">{profile.bodyType}</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                <span className="text-xs text-blue-400 font-semibold">⚡ 速度特点</span>
                <p className="text-sm text-gray-200 mt-1">{profile.speedPhase}</p>
              </div>
            </div>

            {/* 优势 + 短板 */}
            <div className="space-y-2">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <span className="text-xs text-green-400 font-semibold">✅ 优势</span>
                <ul className="text-sm text-gray-200 mt-1 list-disc list-inside">
                  {profile.strengths?.map((s: string, i: number) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                <span className="text-xs text-yellow-400 font-semibold">⚠️ 短板</span>
                <ul className="text-sm text-gray-200 mt-1 list-disc list-inside">
                  {profile.weaknesses?.map((w: string, i: number) => <li key={i}>{w}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* 风险 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {profile.injuryRisks?.length > 0 && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <span className="text-xs text-red-400 font-semibold">🏥 伤病风险</span>
                <ul className="text-sm text-gray-200 mt-1 list-disc list-inside">
                  {profile.injuryRisks.map((r: string, i: number) => <li key={i}>{r}</li>)}
                </ul>
              </div>
            )}
            {profile.trainingRisks?.length > 0 && (
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
                <span className="text-xs text-orange-400 font-semibold">📊 训练风险</span>
                <ul className="text-sm text-gray-200 mt-1 list-disc list-inside">
                  {profile.trainingRisks.map((r: string, i: number) => <li key={i}>{r}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* === 训练重点 === */}
      {priorityBars.length > 0 && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <h2 className="text-lg font-semibold text-white mb-4">🎯 训练重点分配</h2>
          <div className="space-y-2">
            {priorityBars.map(p => (
              <div key={p.label} className="flex items-center gap-3">
                <span className="text-sm text-gray-300 w-16 shrink-0">{p.label}</span>
                <div className="flex-1 h-5 bg-white/10 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${p.color} transition-all flex items-center justify-end pr-2`}
                    style={{ width: `${Math.max(p.value, 2)}%` }}>
                    <span className="text-xs text-white font-bold">{p.value}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* === 水平分析 === */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-5">
        <h2 className="text-lg font-semibold text-white mb-2">📊 综合水平分析</h2>
        <p className="text-gray-300 leading-relaxed">{plan.analysis}</p>
      </div>

      {/* === 统计 + 风险 === */}
      <StatsSummary
        speedSessions={plan.statsSummary.speedSessions}
        strengthSessions={plan.statsSummary.strengthSessions}
        recoverySessions={plan.statsSummary.recoverySessions}
      />
      <RiskAlerts alerts={plan.riskAlerts} />

      {/* === 周训练计划 === */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">📅 周训练计划</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plan.weeklyPlan.map((day, i) => (
            <DayCard key={day.dayOfWeek} day={day} index={i} />
          ))}
        </div>
      </div>

      {/* === 多周路线图 === */}
      {plan.roadmap?.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-white mb-4">🗺️ {state.formData?.planWeeks || ''}周训练路线图</h2>
          <div className="space-y-3">
            {plan.roadmap.map((phase) => (
              <div key={phase.phase} className="bg-white/5 border border-white/10 border-l-4 border-l-accent rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                    第{phase.phase}阶段
                  </span>
                  <span className="text-gray-400 text-sm">第{phase.weeks}周</span>
                </div>
                <h3 className="text-white font-semibold mb-1">🎯 {phase.goal}</h3>
                <p className="text-gray-300 text-sm mb-2">{phase.focus}</p>
                {phase.indicators?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {phase.indicators.map((ind, i) => (
                      <span key={i} className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded">
                        📏 {ind}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 底部 */}
      <div className="flex flex-wrap gap-3 justify-center pt-4 border-t border-white/10">
        <button onClick={() => navigate('/')}
          className="px-6 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-gray-300 hover:bg-white/20 transition-colors">
          🔄 重新评估
        </button>
        <button onClick={() => navigate('/log')}
          className="px-6 py-2.5 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-dark transition-colors">
          📝 开始记录训练日志
        </button>
      </div>
    </div>
  )
}
