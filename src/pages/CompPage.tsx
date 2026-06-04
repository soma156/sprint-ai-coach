import { useState, useMemo } from 'react'
import { competitions, LEVEL_OPTIONS, MONTH_OPTIONS } from '../data/competitions'
import type { Competition } from '../types'

const LEVEL_COLORS: Record<Competition['level'], string> = {
  '国际顶级': 'border-l-amber-500', '钻石联赛': 'border-l-cyan-500',
  '洲际': 'border-l-blue-500', '全国': 'border-l-green-500', '区域/街头赛': 'border-l-gray-500',
}
const LEVEL_BG: Record<Competition['level'], string> = {
  '国际顶级': 'bg-amber-500/20 text-amber-300', '钻石联赛': 'bg-cyan-500/20 text-cyan-300',
  '洲际': 'bg-blue-500/20 text-blue-300', '全国': 'bg-green-500/20 text-green-300', '区域/街头赛': 'bg-gray-500/20 text-gray-400',
}

export default function CompPage() {
  const [level, setLevel] = useState('全部')
  const [month, setMonth] = useState(0)
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return competitions.filter(c => {
      if (level !== '全部' && c.level !== level) return false
      if (month > 0 && !c.date.includes(`-${String(month).padStart(2,'0')}`)) return false
      if (search && !c.name.includes(search) && !c.location.includes(search) && !c.country.includes(search)) return false
      return true
    }).sort((a,b) => a.date.localeCompare(b.date))
  }, [level, month, search])

  return (
    <div className="max-w-5xl mx-auto py-4 space-y-6">
      <h1 className="text-2xl font-bold">🏟️ 田径赛事日历</h1>
      <p className="text-gray-400 text-sm">点击赛事展开详情 — 从全球大赛到国内分站赛一网打尽</p>

      <div className="flex gap-3 flex-wrap">
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="搜索赛事/城市..." className="flex-1 min-w-[150px] bg-white/[0.03] border border-white/5 px-4 py-2 text-white text-sm focus:outline-none focus:border-accent/50" />
        <select value={level} onChange={e => setLevel(e.target.value)} className="bg-white/[0.03] border border-white/5 px-3 py-2 text-white text-sm">
          {LEVEL_OPTIONS.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
        </select>
        <select value={month} onChange={e => setMonth(+e.target.value)} className="bg-white/[0.03] border border-white/5 px-3 py-2 text-white text-sm">
          {MONTH_OPTIONS.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
        </select>
      </div>
      <p className="text-xs text-gray-600">共 {filtered.length} 场</p>

      <div className="space-y-3">
        {filtered.map(c => {
          const open = expanded === c.id
          return (
          <div key={c.id} onClick={() => setExpanded(open ? null : c.id)}
            className={`bg-white/[0.02] border border-white/5 border-l-4 ${LEVEL_COLORS[c.level]} p-4 hover:bg-white/[0.04] cursor-pointer transition-colors`}>
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
              <span className="text-accent-light">{open ? '▲ 收起' : '▼ 查看详情'}</span>
            </div>
            <p className="text-gray-400 text-xs">{c.description}</p>

            {open && (
              <div className="space-y-4 mt-4 pt-4 border-t border-white/5">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">🏷️ 比赛项目</h4>
                  <div className="flex flex-wrap gap-1">
                    {c.events.split('/').map(e => <span key={e} className="text-xs bg-white/5 text-gray-400 px-2 py-1">{e}</span>)}
                  </div>
                </div>
                <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-amber-400 mb-2">📋 赛事简介</h4>
                  <p className="text-gray-300 text-sm">{c.description}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={`https://search.bilibili.com/all?keyword=${encodeURIComponent(c.name + ' 田径')}`} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-accent-light hover:underline">▶ B站搜索「{c.name}」比赛视频</a>
                  <a href={`https://www.worldathletics.org/competitions`} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-300">🌐 World Athletics 官方赛历</a>
                </div>
              </div>
            )}
          </div>
        )})}
      </div>
      {filtered.length === 0 && <p className="text-gray-600 text-center py-16">没有匹配的赛事</p>}
    </div>
  )
}
