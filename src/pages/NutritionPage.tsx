import { useState, useMemo } from 'react'
import { calculateNutrition, type TrainingPhase, PHASE_OPTIONS } from '../utils/nutrition'

export default function NutritionPage() {
  const [weight, setWeight] = useState(70)
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [phase, setPhase] = useState<TrainingPhase>('moderate')

  const plan = useMemo(() => calculateNutrition(weight, phase, gender), [weight, phase, gender])

  return (
    <div className="max-w-4xl mx-auto py-4 space-y-6">
      <h1 className="text-2xl font-bold">🍽️ 营养建议</h1>
      <p className="text-gray-400 text-sm">基于训练阶段和体重的个性化营养方案</p>

      {/* 输入区 */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">体重（kg）</label>
            <input type="number" value={weight} onChange={e => setWeight(+e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-accent" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">性别</label>
            <div className="flex gap-2">
              {(['male','female'] as const).map(g => (
                <button key={g} onClick={() => setGender(g)}
                  className={`flex-1 py-2.5 rounded-lg border text-sm ${gender === g ? 'bg-accent border-accent text-white' : 'bg-white/10 border-white/20 text-gray-300'}`}>
                  {g === 'male' ? '男' : '女'}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">训练阶段</label>
            <select value={phase} onChange={e => setPhase(e.target.value as TrainingPhase)}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-accent">
              {PHASE_OPTIONS.map(p => <option key={p.value} value={p.value}>{p.icon} {p.label}</option>)}
            </select>
          </div>
        </div>
        {/* 阶段标签 */}
        <div className="flex gap-2">
          {PHASE_OPTIONS.map(p => (
            <button key={p.value} onClick={() => setPhase(p.value)}
              className={`px-3 py-1 rounded-full text-xs transition-colors ${phase === p.value ? `${p.color} text-white` : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}>
              {p.icon} {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* 热量 & 宏量营养素 */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-5">
        <h2 className="text-lg font-semibold text-white mb-4">📊 每日营养目标</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-accent/10 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-accent">{plan.dailyCalories}</p>
            <p className="text-xs text-gray-400 mt-1">每日热量 (kcal)</p>
          </div>
          <div className="bg-red-500/10 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-red-400">{plan.protein.grams}g</p>
            <p className="text-xs text-gray-400 mt-1">蛋白质 ({plan.protein.percent}%)</p>
          </div>
          <div className="bg-yellow-500/10 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-yellow-400">{plan.carbs.grams}g</p>
            <p className="text-xs text-gray-400 mt-1">碳水 ({plan.carbs.percent}%)</p>
          </div>
          <div className="bg-blue-500/10 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-blue-400">{plan.fat.grams}g</p>
            <p className="text-xs text-gray-400 mt-1">脂肪 ({plan.fat.percent}%)</p>
          </div>
        </div>

        {/* 宏量营养素比例条 */}
        <div className="h-3 bg-white/10 rounded-full overflow-hidden flex">
          <div className="h-full bg-red-500" style={{ width: `${plan.protein.percent}%` }} />
          <div className="h-full bg-yellow-500" style={{ width: `${plan.carbs.percent}%` }} />
          <div className="h-full bg-blue-500" style={{ width: `${plan.fat.percent}%` }} />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>🥩 蛋白质 {plan.protein.percent}%</span>
          <span>🍚 碳水 {plan.carbs.percent}%</span>
          <span>🧈 脂肪 {plan.fat.percent}%</span>
        </div>
      </div>

      {/* 每日餐食 */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-5">
        <h2 className="text-lg font-semibold text-white mb-4">🍽️ 每日餐食安排</h2>
        <div className="space-y-3">
          {plan.meals.map((meal, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-4 border-l-4 border-l-accent">
              <h3 className="text-white font-semibold">{meal.name}</h3>
              <p className="text-gray-500 text-xs mb-2">{meal.time}</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {meal.foods.map(f => (
                  <span key={f} className="text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded">{f}</span>
                ))}
              </div>
              <p className="text-gray-500 text-xs">{meal.notes}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 营养时机 */}
      <div className="bg-accent/10 border border-accent/30 rounded-xl p-5">
        <h2 className="text-lg font-semibold text-white mb-3">⏰ 营养时机建议</h2>
        <ul className="space-y-2">
          {plan.timingAdvice.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
              <span className="text-accent mt-0.5">•</span> {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* 补水 */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
        <h2 className="text-lg font-semibold text-white mb-3">💧 补水指南</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {[
            { label: '每日总量', value: plan.hydration.daily, icon: '📅' },
            { label: '训练前', value: plan.hydration.preTraining, icon: '⏰' },
            { label: '训练中', value: plan.hydration.duringTraining, icon: '🏃' },
            { label: '训练后', value: plan.hydration.postTraining, icon: '🔄' },
          ].map(h => (
            <div key={h.label} className="bg-white/5 rounded-lg p-3">
              <p className="text-gray-400 text-xs mb-1">{h.icon} {h.label}</p>
              <p className="text-gray-200">{h.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 补剂 */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-5">
        <h2 className="text-lg font-semibold text-white mb-4">💊 补剂建议</h2>
        <div className="space-y-3">
          {plan.supplements.map((sup, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-4 flex flex-wrap items-start gap-3">
              <span className={`text-xs px-2 py-0.5 rounded shrink-0 mt-0.5 ${sup.priority === '必须' ? 'bg-green-500/30 text-green-300' : sup.priority === '推荐' ? 'bg-yellow-500/30 text-yellow-300' : 'bg-white/10 text-gray-400'}`}>
                {sup.priority}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium">{sup.name}</p>
                <p className="text-gray-400 text-sm">{sup.benefit}</p>
                <div className="flex gap-4 mt-1 text-xs text-gray-500">
                  <span>📏 {sup.dosage}</span>
                  <span>⏰ {sup.timing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
