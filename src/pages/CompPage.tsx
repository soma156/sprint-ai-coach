import { useState, useMemo } from 'react'
import { competitions, LEVEL_OPTIONS, MONTH_OPTIONS } from '../data/competitions'
import type { Competition } from '../types'

const LEVEL_COLORS: Record<Competition['level'], string> = {
  '国际顶级': 'border-l-amber-500',
  '钻石联赛': 'border-l-cyan-500',
  '洲际': 'border-l-blue-500',
  '全国': 'border-l-green-500',
  '区域/街头赛': 'border-l-gray-500',
}

const LEVEL_BG: Record<Competition['level'], string> = {
  '国际顶级': 'bg-amber-500/20 text-amber-300',
  '钻石联赛': 'bg-cyan-500/20 text-cyan-300',
  '洲际': 'bg-blue-500/20 text-blue-300',
  '全国': 'bg-green-500/20 text-green-300',
  '区域/街头赛': 'bg-gray-500/20 text-gray-400',
}

export default function CompPage() {
  const [level, setLevel] = useState('全部')
  const [month, setMonth] = useState(0)
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return competitions
      .filter(c => {
        if (level !== '全部' && c.level !== level) return false
        if (month > 0 && !c.date.includes(`${month}月`) && !c.date.startsWith(`2026-${String(month).padStart(2, '0')}`) && !c.date.startsWith(`2027-${String(month).padStart(2, '0')}`)) return false
        if (search && !c.name.includes(search) && !c.nameEn.toLowerCase().includes(search.toLowerCase()) && !c.location.includes(search) && !c.country.includes(search)) return false
        return true
      })
      .sort((a, b) => a.date.localeCompare(b.date))
  }, [level, month, search])

  return (
    <div className="max-w-5xl mx-auto py-4 space-y-6">
      <h1 className="text-2xl font-bold">🏟️ 田径赛事日历</h1>
      <p className="text-gray-400 text-sm">全球短跑及田径赛事预览 — 从世锦赛到街头赛一网打尽</p>

      {/* 筛选 */}
      <div className="flex gap-3 flex-wrap">
        <input type="text" value={search} onChange={e => setSearch(e.target.value)}
          placeholder="搜索赛事/城市/国家..." className="flex-1 min-w-[150px] bg-white/[0.03] border border-white/5 px-4 py-2 text-white text-sm focus:outline-none focus:border-accent/50" />
        <select value={level} onChange={e => setLevel(e.target.value)}
          className="bg-white/[0.03] border border-white/5 px-3 py-2 text-white text-sm focus:outline-none focus:border-accent/50">
          {LEVEL_OPTIONS.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
        </select>
        <select value={month} onChange={e => setMonth(+e.target.value)}
          className="bg-white/[0.03] border border-white/5 px-3 py-2 text-white text-sm focus:outline-none focus:border-accent/50">
          {MONTH_OPTIONS.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
        </select>
      </div>

      <p className="text-xs text-gray-600">共 {filtered.length} 场赛事</p>

      {/* 赛事列表 */}
      <div className="space-y-3">
        {filtered.map(c => (
          <div key={c.id} className={`bg-white/[0.02] border border-white/5 border-l-4 ${LEVEL_COLORS[c.level]} p-4 hover:bg-white/[0.04] transition-colors`}>
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <div>
                <h3 className="text-white font-semibold">{c.name}</h3>
                <p className="text-gray-500 text-xs">{c.nameEn}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 tracking-wider ${LEVEL_BG[c.level]}`}>{c.level}</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 mb-2">
              <span>📅 {c.date}</span>
              <span>📍 {c.location}，{c.country}</span>
              <span>🏷️ {c.category}</span>
            </div>
            <p className="text-gray-400 text-xs mb-2">{c.description}</p>
            <div className="flex flex-wrap gap-1">
              {c.events.split('/').slice(0, 8).map(e => (
                <span key={e} className="text-xs bg-white/5 text-gray-500 px-1.5 py-0.5">{e}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-gray-600 text-center py-16">没有匹配的赛事</p>
      )}
    </div>
  )
}
