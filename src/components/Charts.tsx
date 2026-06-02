import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts'
import type { DailyStats, TotalStats } from '../utils/stats'

// 配色
const COLORS = ['#F97316', '#3B82F6', '#22C55E', '#EAB308', '#A855F7', '#EC4899', '#06B6D4']

interface Props {
  dailyStats: DailyStats[]
  totalStats: TotalStats
  weeklyStats: { week: string; completed: number; total: number }[]
}

export default function Charts({ dailyStats, totalStats, weeklyStats }: Props) {
  // 饼图数据
  const pieData = [
    { name: '已完成', value: totalStats.completedCount },
    { name: '未完成', value: totalStats.incompleteCount },
  ].filter((d) => d.value > 0)

  const PIE_COLORS = ['#22C55E', '#EF4444']

  return (
    <div className="space-y-6">
      {/* 总览数字 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: '总记录', value: totalStats.totalLogs, color: 'text-white' },
          { label: '完成率', value: `${totalStats.completionRate}%`, color: 'text-green-400' },
          { label: '平均完成度', value: `${totalStats.avgCompletionRate}%`, color: 'text-accent' },
          { label: '有备注', value: totalStats.totalNotes, color: 'text-blue-400' },
        ].map((s) => (
          <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-gray-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* 每日完成柱状图 */}
      {dailyStats.some((d) => d.completed + d.incomplete > 0) && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <h3 className="text-lg font-semibold text-white mb-4">📊 每日训练完成情况</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyStats} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="dayOfWeek" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
              <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} allowDecimals={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1E293B',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              />
              <Bar dataKey="completed" name="已完成" fill="#22C55E" radius={[4, 4, 0, 0]} />
              <Bar dataKey="incomplete" name="未完成" fill="#EF4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* 饼图 + 平均完成度 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 完成状态分布 */}
        {pieData.length > 0 && (
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-2">🥧 完成状态分布</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1E293B',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* 平均完成度柱状图 */}
        {dailyStats.some((d) => d.avgCompletion > 0) && (
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-2">📈 各训练日平均完成度</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={dailyStats.filter((d) => d.avgCompletion > 0)}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="dayOfWeek" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1E293B',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                  formatter={(value: number) => [`${value}%`, '平均完成度']}
                />
                <Bar dataKey="avgCompletion" name="平均完成度" radius={[4, 4, 0, 0]}>
                  {dailyStats.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* 无数据提示 */}
      {totalStats.totalLogs === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-4xl mb-3">📊</p>
          <p>还没有训练数据</p>
          <p className="text-sm mt-1">记录训练日志后，这里会展示统计分析</p>
        </div>
      )}
    </div>
  )
}
