import { useState, useMemo } from 'react'
import { exercises, CATEGORY_GROUPS } from '../data/exercises'
import type { Exercise } from '../types'

const CAT_COLORS: Record<string, string> = {
  strength: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  power: 'bg-red-500/20 text-red-300 border-red-500/30',
  plyometric: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  technique: 'bg-green-500/20 text-green-300 border-green-500/30',
  mobility: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  core: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  recovery: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
}

const CAT_LABELS: Record<string, string> = {
  strength: '力量', power: '爆发力', plyometric: '增强式',
  technique: '专项技术', mobility: '活动度', core: '核心', recovery: '恢复',
}

export default function ExercisePage() {
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState<Record<string, string>>({})
  const [selected, setSelected] = useState<Exercise | null>(null)

  const filtered = useMemo(() => {
    return exercises.filter(e => {
      if (search) {
        const q = search.toLowerCase()
        if (!e.name.includes(q) && !e.nameEn.toLowerCase().includes(q)
          && !e.targetMuscles.some(m => m.includes(q)) && !e.subCategory.includes(q)) return false
      }
      for (const [key, val] of Object.entries(filters)) {
        if (!val) continue
        if (key === 'category' && e.category !== val) return false
        if (key === 'bodyRegion' && e.bodyRegion !== val) return false
        if (key === 'equipment' && e.equipment !== val) return false
        if (key === 'difficulty' && e.difficulty !== val) return false
      }
      return true
    })
  }, [search, filters])

  function toggleFilter(groupKey: string, value: string) {
    setFilters(prev => {
      const current = prev[groupKey]
      return { ...prev, [groupKey]: current === value ? '' : value }
    })
  }

  return (
    <div className="max-w-6xl mx-auto py-4 space-y-6">
      <h1 className="text-2xl font-bold">📚 短跑训练动作库</h1>
      <p className="text-gray-400 text-sm">{exercises.length} 个动作 · 多维度分类筛选 · 每个动作含讲解和注意事项</p>

      {/* 搜索 */}
      <input type="text" value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent text-lg"
        placeholder="🔍 搜索动作名称、目标肌群、英文名..." />

      {/* 筛选 */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {CATEGORY_GROUPS.map(group => (
          <div key={group.key} className="shrink-0">
            <p className="text-xs text-gray-500 mb-1">{group.label}</p>
            <div className="flex gap-1 flex-wrap">
              {group.options.map(opt => {
                const active = filters[group.key] === opt.value
                return (
                  <button key={opt.value} onClick={() => toggleFilter(group.key, opt.value)}
                    className={`px-2.5 py-1 rounded text-xs whitespace-nowrap transition-colors
                      ${active ? 'bg-accent text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}>
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 结果数量 */}
      <p className="text-sm text-gray-500">显示 {filtered.length} / {exercises.length} 个动作</p>

      {/* 动作列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map(e => (
          <div key={e.id} onClick={() => setSelected(e)}
            className="bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer hover:border-accent/50 transition-colors">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="text-white font-semibold">{e.name}</h3>
                <p className="text-gray-500 text-xs">{e.nameEn}</p>
              </div>
              <span className={`shrink-0 text-xs px-2 py-0.5 rounded border ${CAT_COLORS[e.category]}`}>
                {CAT_LABELS[e.category]}
              </span>
            </div>
            <div className="flex gap-1 flex-wrap">
              {e.targetMuscles.slice(0, 3).map(m => (
                <span key={m} className="text-xs bg-white/10 text-gray-400 px-1.5 py-0.5 rounded">{m}</span>
              ))}
              <span className="text-xs text-gray-500">· {e.equipment} · {e.difficulty}</span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-500">没有匹配的动作，换个筛选试试</div>
      )}

      {/* 动作详情弹窗 */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center pt-10 pb-10 overflow-y-auto" onClick={() => setSelected(null)}>
          <div className="bg-gray-900 border border-white/20 rounded-2xl max-w-2xl w-full mx-4 p-6 space-y-4" onClick={e => e.stopPropagation()}>
            {/* 标题 */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-white">{selected.name}</h2>
                <p className="text-gray-400 text-sm">{selected.nameEn}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-gray-500 hover:text-white text-2xl">&times;</button>
            </div>

            {/* 标签 */}
            <div className="flex gap-1 flex-wrap">
              <span className={`text-xs px-2 py-0.5 rounded border ${CAT_COLORS[selected.category]}`}>{CAT_LABELS[selected.category]} · {selected.subCategory}</span>
              <span className="text-xs bg-white/10 text-gray-400 px-2 py-0.5 rounded border border-white/20">{selected.bodyRegion}</span>
              <span className="text-xs bg-white/10 text-gray-400 px-2 py-0.5 rounded border border-white/20">{selected.equipment}</span>
              <span className="text-xs bg-white/10 text-gray-400 px-2 py-0.5 rounded border border-white/20">{selected.difficulty}</span>
              <span className="text-xs bg-white/10 text-gray-400 px-2 py-0.5 rounded border border-white/20">短跑阶段：{selected.sprintPhase}</span>
            </div>

            {/* 目标肌群 */}
            <div>
              <span className="text-xs text-gray-500">🎯 目标肌群：</span>
              <span className="text-sm text-gray-300">{selected.targetMuscles.join('、')}</span>
            </div>

            {/* 动作讲解 */}
            <div>
              <h3 className="text-accent font-semibold mb-2">📖 动作讲解</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{selected.description}</p>
            </div>

            {/* 训练步骤 */}
            <div>
              <h3 className="text-white font-semibold mb-2">📋 训练方法</h3>
              <ol className="list-decimal list-inside space-y-1">
                {selected.steps.map((step, i) => (
                  <li key={i} className="text-gray-300 text-sm">{step}</li>
                ))}
              </ol>
            </div>

            {/* 注意事项 */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
              <h3 className="text-yellow-400 font-semibold text-sm mb-2">⚠️ 注意事项</h3>
              <ul className="list-disc list-inside space-y-1">
                {selected.precautions.map((p, i) => (
                  <li key={i} className="text-yellow-300/80 text-sm">{p}</li>
                ))}
              </ul>
            </div>

            {/* 训练处方 */}
            <div className="bg-accent/10 rounded-lg p-3 text-center">
              <span className="text-accent font-semibold">建议训练量：</span>
              <span className="text-white">{selected.setsReps}</span>
            </div>

            {/* 关闭 */}
            <button onClick={() => setSelected(null)}
              className="w-full py-2.5 bg-white/10 rounded-lg text-gray-300 hover:bg-white/20 transition-colors text-sm">
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
