import { useState, useMemo, useEffect } from 'react'
import { competitions, LEVEL_OPTIONS, MONTH_OPTIONS } from '../data/competitions'
import { deepDives, type CompDeepDive } from '../data/comp-details'
import { athleteTrackers, currentWatch } from '../data/sprint-watch'
import type { Competition } from '../types'

const LEVEL_COLORS: Record<Competition['level'], string> = {
  '国际顶级': 'border-l-amber-500', '钻石联赛': 'border-l-cyan-500',
  '洲际': 'border-l-blue-500', '全国': 'border-l-green-500', '区域/街头赛': 'border-l-gray-500',
}
const LEVEL_BG: Record<Competition['level'], string> = {
  '国际顶级': 'bg-amber-500/20 text-amber-300', '钻石联赛': 'bg-cyan-500/20 text-cyan-300',
  '洲际': 'bg-blue-500/20 text-blue-300', '全国': 'bg-green-500/20 text-green-300', '区域/街头赛': 'bg-gray-500/20 text-gray-400',
}

// 赛季排名数据
const RANKINGS: { event: string; world: { name: string; nation: string; mark: string; date: string }[]; asia: { name: string; nation: string; mark: string; date: string }[]; china: { name: string; mark: string; date: string }[] }[] = [
  { event: '男子100m', world: [
    { name: 'Noah Lyles', nation: 'USA', mark: '9.79s', date: '2025世锦赛' },
    { name: 'Kishane Thompson', nation: 'JAM', mark: '9.81s', date: '2025世锦赛' },
    { name: 'Oblique Seville', nation: 'JAM', mark: '9.82s', date: '2025钻石联赛' },
  ], asia: [
    { name: '谢震业', nation: 'CHN', mark: '9.97s', date: '2022亚运会' },
    { name: '萨尼布朗', nation: 'JPN', mark: '9.97s', date: '2023世锦赛' },
    { name: 'Abdul Hakim Sani Brown', nation: 'JPN', mark: '9.99s', date: '2024赛季' },
  ], china: [
    { name: '谢震业', mark: '9.97s', date: '2022亚运' },
    { name: '陈冠锋', mark: '10.06s', date: '2024全国锦标赛' },
    { name: '邓信锐', mark: '10.11s', date: '2025室内赛季' },
  ] },
  { event: '男子200m', world: [
    { name: 'Noah Lyles', nation: 'USA', mark: '19.31s', date: '2025世锦赛' },
    { name: 'Erriyon Knighton', nation: 'USA', mark: '19.49s', date: '2024钻石联赛' },
    { name: 'Letsile Tebogo', nation: 'BOT', mark: '19.50s', date: '2025世锦赛' },
  ], asia: [
    { name: '谢震业', nation: 'CHN', mark: '19.88s', date: '2019钻石联赛（亚洲纪录）' },
    { name: '饭冢翔太', nation: 'JPN', mark: '20.11s', date: '2023赛季' },
  ], china: [
    { name: '谢震业', mark: '19.88s', date: '2019（亚洲纪录）' },
    { name: '汤星强', mark: '20.39s', date: '2021全运会' },
  ] },
  { event: '男子60m (室内)', world: [
    { name: 'Christian Coleman', nation: 'USA', mark: '6.34s', date: '2018（世界纪录）' },
    { name: 'Marcell Jacobs', nation: 'ITA', mark: '6.41s', date: '2022室内世锦赛' },
  ], asia: [
    { name: '苏炳添', nation: 'CHN', mark: '6.42s', date: '2018（亚洲纪录）' },
    { name: '多田修平', nation: 'JPN', mark: '6.52s', date: '2021赛季' },
  ], china: [
    { name: '苏炳添', mark: '6.42s', date: '2018（亚洲纪录）' },
    { name: '陈冠锋', mark: '6.55s', date: '2024赛季' },
  ] },
  { event: '男子400m', world: [
    { name: 'Quincy Hall', nation: 'USA', mark: '43.40s', date: '2025世锦赛' },
    { name: 'Matthew Hudson-Smith', nation: 'GBR', mark: '43.44s', date: '2025世锦赛' },
  ], asia: [
    { name: 'Abdalleleh Haroun', nation: 'QAT', mark: '44.07s', date: '2018（亚洲纪录）' },
    { name: '佐藤拳太郎', nation: 'JPN', mark: '44.77s', date: '2023赛季' },
  ], china: [
    { name: '郭钟泽', mark: '45.14s', date: '2017全运会' },
  ] },
]

export default function CompPage() {
  const [level, setLevel] = useState('全部')
  const [month, setMonth] = useState(0)
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [tab, setTab] = useState<'calendar' | 'rankings' | 'stars' | 'watch' | 'ailab'>('calendar')
  const [interested, setInterested] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem('comp-interested') || '[]') } catch { return [] }
  })
  const [rankingEvent, setRankingEvent] = useState('男子100m')
  const [aggregated, setAggregated] = useState<{ searchLinks?: Array<{platform:string;icon:string;url:string;description:string}>; news?: Array<{platform:string;icon:string;title:string;url:string;description:string}>; rssFeeds?: Array<{source:string;title:string;link:string;pubDate:string}>; rankings?: {seasonLeaders:Record<string,Array<{name:string;nation:string;mark:string;date:string}>>;source:string} | null } | null>(null)

  useEffect(() => {
    // 拉取聚合数据
    fetch('https://sprint-ai-coach.vercel.app/api/aggregator?q=短跑&type=all')
      .then(r => r.json())
      .then(d => { if (!d.error) setAggregated(d) })
      .catch(() => {})
  }, [])

  useEffect(() => {
    localStorage.setItem('comp-interested', JSON.stringify(interested))
    // 检查是否有即将开始的关注赛事（3天内）
    const now = new Date()
    interested.forEach(id => {
      const comp = competitions.find(c => c.id === id)
      if (!comp) return
      const d = new Date(comp.date.split(' ~ ')[0])
      const diff = (d.getTime() - now.getTime()) / 86400000
      if (diff > 0 && diff <= 3 && Notification.permission === 'default') {
        Notification.requestPermission()
      }
    })
  }, [interested])

  function toggleInterested(id: string, e: React.MouseEvent) {
    e.stopPropagation()
    setInterested(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  const filtered = useMemo(() => {
    return competitions.filter(c => {
      if (level !== '全部' && c.level !== level) return false
      if (month > 0 && !c.date.includes(`-${String(month).padStart(2,'0')}`)) return false
      if (search && !c.name.includes(search) && !c.location.includes(search) && !c.country.includes(search)) return false
      return true
    }).sort((a,b) => a.date.localeCompare(b.date))
  }, [level, month, search])

  const starred = competitions.filter(c => interested.includes(c.id)).sort((a,b) => a.date.localeCompare(b.date))

  return (
    <div className="max-w-5xl mx-auto py-4 space-y-6">
      <h1 className="text-2xl font-bold">🏟️ 田径赛事中心</h1>


      {/* Tab 切换 */}
      <div className="flex border-b border-white/10">
        {[
          { key: 'calendar' as const, label: '📅 赛事日历' },
          { key: 'watch' as const, label: '🔥 短跑观察' },
          { key: 'ailab' as const, label: '🤖 AI实验室' },
          { key: 'rankings' as const, label: '📊 赛季排名' },
          { key: 'stars' as const, label: '⭐ 运动员' },
        ].map(t => (
          <button key={t.key} onClick={() => setTab(t.key)}
            className={`px-4 py-2 text-sm tracking-wider transition-colors ${tab === t.key ? 'text-accent-light border-b border-accent' : 'text-gray-500 hover:text-gray-300'}`}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'calendar' && (
        <>
          {/* 关注的赛事 */}
          {starred.length > 0 && (
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
              <h2 className="text-sm font-semibold text-accent-light mb-3">⭐ 我关注的赛事（{starred.length}）</h2>
              <div className="space-y-2">
                {starred.map(c => (
                  <div key={c.id} className="flex justify-between items-center text-sm">
                    <span className="text-white">{c.name}</span>
                    <span className="text-gray-500 text-xs">{c.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

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
              const isStarred = interested.includes(c.id)
              return (
              <div key={c.id} onClick={() => setExpanded(open ? null : c.id)}
                className={`bg-white/[0.02] border border-white/5 border-l-4 ${LEVEL_COLORS[c.level]} p-4 hover:bg-white/[0.04] cursor-pointer transition-colors`}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-white font-semibold">{c.name}</h3>
                    <p className="text-gray-500 text-xs">{c.nameEn}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={(e) => toggleInterested(c.id, e)}
                      className={`text-lg ${isStarred ? 'text-yellow-400' : 'text-gray-600 hover:text-yellow-400'}`}>
                      {isStarred ? '★' : '☆'}
                    </button>
                    <span className={`text-xs px-2 py-0.5 tracking-wider ${LEVEL_BG[c.level]}`}>{c.level}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 mb-2">
                  <span>📅 {c.date}</span>
                  <span>📍 {c.location}，{c.country}</span>
                  <span className="text-accent-light">{open ? '▲ 收起' : '▼ 详情'}</span>
                </div>
                <p className="text-gray-400 text-xs">{c.description}</p>

                {open && <CompDetail c={c} deep={deepDives[c.id]} />}
              </div>
            )})}
          </div>
          {filtered.length === 0 && <p className="text-gray-600 text-center py-16">没有匹配的赛事</p>}
        </>
      )}

      {tab === 'rankings' && (
        <div className="space-y-4">
          <select value={rankingEvent} onChange={e => setRankingEvent(e.target.value)}
            className="bg-white/[0.03] border border-white/5 px-3 py-2 text-white text-sm">
            {RANKINGS.map(r => <option key={r.event} value={r.event}>{r.event}</option>)}
          </select>

          {RANKINGS.filter(r => r.event === rankingEvent).map(r => (
            <div key={r.event} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 世界排名 */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-amber-400 mb-3">🌍 世界前3</h3>
                  {r.world.map((a,i) => (
                    <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0 text-sm">
                      <span className="text-gray-300">{a.name} <span className="text-gray-600 text-xs">{a.nation}</span></span>
                      <span className="text-white font-mono">{a.mark}</span>
                    </div>
                  ))}
                </div>
                {/* 亚洲排名 */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-blue-400 mb-3">🌏 亚洲前3</h3>
                  {(r.asia || []).map((a,i) => (
                    <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0 text-sm">
                      <span className="text-gray-300">{a.name} <span className="text-gray-600 text-xs">{a.nation}</span></span>
                      <span className="text-white font-mono">{a.mark}</span>
                    </div>
                  ))}
                </div>
                {/* 中国排名 */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-green-400 mb-3">🇨🇳 中国前3</h3>
                  {(r.china || []).map((a,i) => (
                    <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0 text-sm">
                      <span className="text-gray-300">{a.name}</span>
                      <span className="text-white font-mono">{a.mark}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <p className="text-xs text-gray-600 mt-2">数据更新至2026年6月。来源：World Athletics / 中国田协</p>
        </div>
      )}

      {tab === 'watch' && (
        <SprintWatchTab />
      )}
      {tab === 'ailab' && <AILabs />}
      {tab === 'stars' && (
        <AthleteStars />
      )}

      {/* 多平台聚合区 */}
      {aggregated && (
        <div className="mt-8 pt-6 border-t border-white/10 space-y-6">
          <h2 className="text-lg font-bold text-white">🌐 多平台信息聚合</h2>

          {/* WA 实时排名 */}
          {aggregated.rankings?.seasonLeaders && Object.keys(aggregated.rankings.seasonLeaders).length > 0 && (
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-green-400 mb-3">📊 实时赛季排名 · {aggregated.rankings.source}</h3>
              {Object.entries(aggregated.rankings.seasonLeaders).map(([event, athletes]) => (
                <div key={event} className="mb-3">
                  <p className="text-xs text-gray-500 mb-2">{event}</p>
                  {athletes.slice(0, 5).map((a, i) => (
                    <div key={i} className="flex justify-between text-sm py-0.5">
                      <span className="text-gray-300">{a.name} <span className="text-gray-600 text-xs">{a.nation}</span></span>
                      <span className="text-white font-mono">{a.mark}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* 跨平台搜索链接 */}
          {aggregated.searchLinks && aggregated.searchLinks.length > 0 && (
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-white mb-3">🔍 跨平台信息搜索</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {aggregated.searchLinks.map(s => (
                  <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 p-3 bg-white/[0.02] border border-white/5 rounded-lg hover:border-accent/30 transition-colors no-underline text-center">
                    <span className="text-xl">{s.icon}</span>
                    <span className="text-xs text-gray-300">{s.platform}</span>
                    <span className="text-xs text-gray-600">{s.description}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* 新闻来源 */}
          {aggregated.news && aggregated.news.length > 0 && (
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-white mb-3">📰 新闻与官方渠道</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {aggregated.news.map(n => (
                  <a key={n.platform} href={n.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-lg hover:border-accent/30 transition-colors no-underline">
                    <span className="text-lg shrink-0">{n.icon}</span>
                    <div>
                      <span className="text-sm text-gray-200 block">{n.title}</span>
                      <span className="text-xs text-gray-600">{n.platform} · {n.description}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* RSS Feed */}
          {aggregated.rssFeeds && aggregated.rssFeeds.length > 0 && (
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-white mb-3">📡 RSS 最新消息</h3>
              {aggregated.rssFeeds.map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer"
                  className="block py-1.5 border-b border-white/5 last:border-0 text-sm text-gray-300 hover:text-accent-light no-underline">
                  <span className="text-xs text-gray-600 mr-2">[{item.source}]</span>
                  {item.title}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ⭐ 明星运动员资料
function CompDetail({ c, deep }: { c: Competition; deep?: CompDeepDive }) {
  return (
    <div className="space-y-5 mt-4 pt-4 border-t border-white/5">
      {/* 比赛项目 */}
      <div>
        <h4 className="text-xs tracking-wider text-gray-500 mb-2">比赛项目</h4>
        <div className="flex flex-wrap gap-1">
          {c.events.split('/').map(e => <span key={e} className="text-xs bg-white/5 text-gray-400 px-2 py-1">{e}</span>)}
        </div>
      </div>

      {deep ? (
        <>
          {/* 为什么重要 */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-amber-400 mb-2">🔥 为什么这场比赛很重要</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{deep.whyMatters}</p>
          </div>

          {/* 历史 + 历届冠军 */}
          <div>
            <h4 className="text-xs tracking-wider text-gray-500 mb-2">历届男子100m冠军</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-gray-500 border-b border-white/5">
                    <th className="text-left py-1 pr-3">年份</th>
                    <th className="text-left py-1 pr-3">冠军</th>
                    <th className="text-right py-1 pr-3">成绩</th>
                    <th className="text-left py-1">备注</th>
                  </tr>
                </thead>
                <tbody>
                  {deep.pastWinners.map((w,i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-1 pr-3 text-gray-500">{w.year}</td>
                      <td className="py-1 pr-3 text-gray-200">{w.winner}</td>
                      <td className="py-1 pr-3 text-right text-accent-light font-mono">{w.mark}</td>
                      <td className="py-1 text-gray-500">{w.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 关键对决 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">⚔️ 关键对决</h4>
            {deep.keyMatchups.map((m, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/10 rounded-lg p-4 mb-3 last:mb-0">
                <h5 className="text-accent-light font-medium text-sm mb-1">{m.title}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>

          {/* 中国选手 */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-red-400 mb-2">🇨🇳 中国选手</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{deep.chineseConnection}</p>
          </div>

          {/* 纪录参考 */}
          <div>
            <h4 className="text-xs tracking-wider text-gray-500 mb-2">纪录参考</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {deep.records.map((r,i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 rounded-lg px-3 py-2 flex justify-between items-center text-xs">
                  <span className="text-gray-400">{r.event}</span>
                  <span className="text-white font-mono">{r.record} <span className="text-gray-600">({r.holder} {r.year})</span></span>
                </div>
              ))}
            </div>
          </div>

          {/* 历史 */}
          <div className="bg-white/[0.02] rounded-xl p-4">
            <h4 className="text-xs tracking-wider text-gray-500 mb-2">历史背景</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{deep.history}</p>
          </div>

          {/* 故事线 */}
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-accent-light mb-2">📖 故事线</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{deep.storyline}</p>
          </div>

          {/* 视频 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">▶️ 相关视频</h4>
            <div className="space-y-1.5">
              {deep.bestVideos.map((v, i) => (
                <a key={i} href={v.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent-light no-underline py-1.5 border-b border-white/5 last:border-0">
                  <span className="text-xs bg-white/10 px-1.5 py-0.5 text-gray-500">{v.platform}</span>
                  {v.title}
                </a>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white/[0.02] rounded-xl p-4 text-center">
          <p className="text-gray-500 text-sm mb-2">暂无深度资料</p>
          <a href={`https://search.bilibili.com/all?keyword=${encodeURIComponent(c.name + ' 田径')}`} target="_blank" rel="noopener noreferrer"
            className="text-accent-light text-sm hover:underline">▶ 在B站搜索相关信息</a>
        </div>
      )}
    </div>
  )
}

// 🤖 AI 实验室 — 三个互动工具
function AILabs() {
  const [tool, setTool] = useState<'h2h' | 'predict' | 'breakdown'>('h2h')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  // 头对头
  const [athleteA, setAthleteA] = useState('Usain Bolt (巅峰期 9.58s)')
  const [athleteB, setAthleteB] = useState('Noah Lyles (2025世锦赛 9.79s)')

  // 赛果预测
  const [predictEvent, setPredictEvent] = useState('钻石联赛罗马站 100m')

  // 比赛解说
  const [breakdownRace, setBreakdownRace] = useState('2025东京世锦赛 男子100m决赛')

  async function runTool(prompt: string) {
    setLoading(true); setResult('')
    try {
      const r = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}` },
        body: JSON.stringify({ model: 'deepseek-chat', messages: [
          { role: 'system', content: '你是短跑分析师+体育解说员。用中文回答，生动但不浮夸，数据分析+激情解说兼备。' },
          { role: 'user', content: prompt },
        ], temperature: 0.8, max_tokens: 2048 }),
      })
      const d = await r.json()
      setResult(d.choices?.[0]?.message?.content || '分析失败')
    } catch { setResult('请求失败，请重试') }
    finally { setLoading(false) }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-bold text-white">🤖 AI 实验室</h2>

      {/* 工具切换 */}
      <div className="flex gap-2 flex-wrap">
        {[
          { key: 'h2h' as const, label: '⚔️ 头对头模拟', desc: '任意两位运动员对决' },
          { key: 'predict' as const, label: '🔮 赛果预测', desc: 'AI预测即将到来的比赛' },
          { key: 'breakdown' as const, label: '🎙️ 比赛解说', desc: 'AI深度解说经典比赛' },
        ].map(t => (
          <button key={t.key} onClick={() => { setTool(t.key); setResult('') }}
            className={`flex-1 min-w-[120px] p-4 rounded-xl border text-left transition-colors ${tool === t.key ? 'bg-accent/10 border-accent/30' : 'bg-white/[0.02] border-white/5 hover:border-white/10'}`}>
            <div className="text-sm font-medium text-white">{t.label}</div>
            <div className="text-xs text-gray-500 mt-0.5">{t.desc}</div>
          </button>
        ))}
      </div>

      {/* 头对头 */}
      {tool === 'h2h' && (
        <div className="space-y-4">
          <p className="text-sm text-gray-400">让 AI 模拟两位运动员在巅峰状态下的对决。从起跑反应、加速能力、最高速度和后程保持四个维度分析胜负。</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">运动员 A</label>
              <input value={athleteA} onChange={e => setAthleteA(e.target.value)} className="w-full bg-white/[0.03] border border-white/5 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent/50" />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">运动员 B</label>
              <input value={athleteB} onChange={e => setAthleteB(e.target.value)} className="w-full bg-white/[0.03] border border-white/5 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent/50" />
            </div>
          </div>
          <button onClick={() => runTool(`模拟一场100m对决：${athleteA} VS ${athleteB}。请从起跑反应、前30m加速、最高速度、后程保持四个维度详细分析谁会赢，赢多少。给出具体的时间差估算和每个维度的对比。用体育解说的风格。`)} disabled={loading}
            className="w-full py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent-dark disabled:opacity-50 transition-colors">
            {loading ? '⏳ AI 分析中...' : '⚔️ 开始对决'}
          </button>
        </div>
      )}

      {/* 赛果预测 */}
      {tool === 'predict' && (
        <div className="space-y-4">
          <p className="text-sm text-gray-400">AI 基于近期状态、历史数据和比赛条件预测即将到来的赛事结果。</p>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">比赛</label>
            <input value={predictEvent} onChange={e => setPredictEvent(e.target.value)} className="w-full bg-white/[0.03] border border-white/5 px-4 py-2.5 text-white text-sm" />
          </div>
          <button onClick={() => runTool(`预测即将到来的${predictEvent}的结果。基于运动员近期表现、历史对阵数据、比赛条件等因素，给出前三名预测和各自的夺冠概率，并简要说明理由。`)} disabled={loading}
            className="w-full py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent-dark disabled:opacity-50 transition-colors">
            {loading ? '⏳ AI 预测中...' : '🔮 预测结果'}
          </button>
        </div>
      )}

      {/* 比赛解说 */}
      {tool === 'breakdown' && (
        <div className="space-y-4">
          <p className="text-sm text-gray-400">AI 深度解说经典比赛——分段分析每一位选手的表现，像顶级体育评论员一样讲述比赛故事。</p>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">比赛</label>
            <input value={breakdownRace} onChange={e => setBreakdownRace(e.target.value)} className="w-full bg-white/[0.03] border border-white/5 px-4 py-2.5 text-white text-sm" />
          </div>
          <button onClick={() => runTool(`深度解说${breakdownRace}。请像体育评论员一样，从赛前悬念、起跑瞬间、加速阶段、最高速度对决、冲刺撞线每个阶段进行详细解说的风格，逐位分析选手的表现，为什么赢，为什么输。数据+激情+故事。`)} disabled={loading}
            className="w-full py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent-dark disabled:opacity-50 transition-colors">
            {loading ? '⏳ AI 解说中...' : '🎙️ 开始解说'}
          </button>
        </div>
      )}

      {/* 结果 */}
      {result && (
        <div className="bg-white/[0.02] border border-accent/20 rounded-xl p-5">
          <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{result}</div>
        </div>
      )}
    </div>
  )
}

function SprintWatchTab() {
  const [selectedAthlete, setSelectedAthlete] = useState(0)
  const a = athleteTrackers[selectedAthlete]

  return (
    <div className="space-y-6">
      {/* 月度简报 */}
      <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-accent-light mb-4">🔥 {currentWatch.month} 短跑月度观察</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/[0.02] rounded-lg p-3">
            <span className="text-xs text-gray-500">热门运动员</span>
            <p className="text-gray-200 text-sm mt-1"><strong>{currentWatch.hotAthlete.name}</strong></p>
            <p className="text-gray-400 text-xs mt-0.5">{currentWatch.hotAthlete.reason}</p>
          </div>
          <div className="bg-white/[0.02] rounded-lg p-3">
            <span className="text-xs text-gray-500">本月对决</span>
            <p className="text-gray-200 text-sm mt-1"><strong>{currentWatch.matchupOfMonth.title}</strong></p>
            <p className="text-gray-400 text-xs mt-0.5">{currentWatch.matchupOfMonth.description}</p>
          </div>
          <div className="bg-white/[0.02] rounded-lg p-3">
            <span className="text-xs text-gray-500">数据洞察</span>
            <p className="text-gray-200 text-sm mt-1"><strong>{currentWatch.statOfMonth.stat}</strong></p>
            <p className="text-gray-400 text-xs mt-0.5">{currentWatch.statOfMonth.context}</p>
          </div>
          <div className="bg-white/[0.02] rounded-lg p-3">
            <span className="text-xs text-gray-500">即将开始</span>
            <p className="text-gray-200 text-sm mt-1"><strong>{currentWatch.upcomingMeet.name}</strong></p>
            <p className="text-gray-400 text-xs mt-0.5">{currentWatch.upcomingMeet.date} · {currentWatch.upcomingMeet.whyCare}</p>
          </div>
        </div>
      </div>

      {/* 运动员深度追踪 */}
      <div>
        <h3 className="text-sm font-semibold text-white mb-3">📈 运动员表现追踪</h3>
        <div className="flex gap-2 mb-4 flex-wrap">
          {athleteTrackers.map((at, i) => (
            <button key={at.name} onClick={() => setSelectedAthlete(i)}
              className={`px-3 py-1.5 text-xs tracking-wider transition-colors ${i === selectedAthlete ? 'bg-accent/20 text-accent-light border border-accent/30' : 'bg-white/[0.02] border border-white/5 text-gray-400 hover:border-white/10'}`}>
              {at.nation} {at.name}
            </button>
          ))}
        </div>

        {/* 选中运动员详情 */}
        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5 space-y-5">
          <div className="flex flex-wrap justify-between items-start gap-3">
            <div>
              <h4 className="text-lg font-bold text-white">{a.nation} {a.name} <span className="text-gray-500 text-sm font-normal">{a.nameEn}</span></h4>
              <p className="text-gray-500 text-xs">{a.event} · PB: <span className="text-accent-light font-mono font-bold">{a.pb}</span></p>
            </div>
            <span className={`text-xs px-2 py-1 tracking-wider ${a.trend === 'rising' ? 'bg-green-500/20 text-green-400' : a.trend === 'stable' ? 'bg-blue-500/20 text-blue-400' : a.trend === 'comeback' ? 'bg-amber-500/20 text-amber-400' : 'bg-red-500/20 text-red-400'}`}>
              {a.trend === 'rising' ? '📈 上升期' : a.trend === 'stable' ? '➡️ 稳定期' : a.trend === 'comeback' ? '🔄 复出中' : '📉 下滑期'}
            </span>
          </div>

          {/* 故事 */}
          <div className="bg-white/[0.02] rounded-lg p-4">
            <p className="text-gray-300 text-sm leading-relaxed">{a.story}</p>
          </div>

          {/* 优缺点 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <span className="text-xs text-green-400">✅ 优势</span>
              <ul className="text-xs text-gray-400 mt-1 list-disc list-inside space-y-0.5">
                {a.strengthAreas.map((s,i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
            <div>
              <span className="text-xs text-red-400">⚠️ 短板</span>
              <ul className="text-xs text-gray-400 mt-1 list-disc list-inside space-y-0.5">
                {a.weaknessAreas.map((w,i) => <li key={i}>{w}</li>)}
              </ul>
            </div>
          </div>

          {/* 赛季进步 */}
          <div>
            <h5 className="text-xs tracking-wider text-gray-500 mb-2">📊 赛季进步轨迹</h5>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-gray-500 border-b border-white/5">
                    <th className="text-left py-1 pr-3">年份</th>
                    <th className="text-right py-1 pr-3">年龄</th>
                    <th className="text-right py-1 pr-3">100m SB</th>
                    <th className="text-right py-1 pr-3">200m SB</th>
                    <th className="text-left py-1">亮点</th>
                  </tr>
                </thead>
                <tbody>
                  {a.progression.map((y,i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-1 pr-3 text-gray-500">{y.year}</td>
                      <td className="py-1 pr-3 text-right text-gray-400">{y.age}</td>
                      <td className="py-1 pr-3 text-right text-accent-light font-mono">{y.sb100m}</td>
                      <td className="py-1 pr-3 text-right text-blue-400 font-mono">{y.sb200m}</td>
                      <td className="py-1 text-gray-500">{y.highlights}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 近期赛果 */}
          <div>
            <h5 className="text-xs tracking-wider text-gray-500 mb-2">🏃 近期比赛</h5>
            {a.recentResults.map((r,i) => (
              <div key={i} className="flex justify-between items-start py-1.5 border-b border-white/5 last:border-0 text-xs">
                <div>
                  <span className="text-gray-200">{r.meet}</span>
                  <span className="text-gray-600 ml-2">{r.event}</span>
                </div>
                <div className="text-right">
                  <span className="text-white font-mono">{r.mark}</span>
                  <span className="text-gray-500 ml-2">{r.place}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AthleteStars() {
  const STARS = [
    { name: '苏炳添', nameEn: 'Su Bingtian', nation: '🇨🇳', event: '100m/60m', pb: '9.83s (亚洲纪录)', born: '1989', bio: '中国短跑传奇。2021东京奥运会半决赛9.83s创亚洲纪录，成为首位进入奥运100m决赛的亚洲人。室内60m亚洲纪录保持者6.42s。2025复出后状态持续回升。技术特点：极快的前30m起跑反应+超强加速阶段。', highlights: ['2021奥运100m 9.83s 亚洲纪录', '2018室内60m 6.42s 亚洲纪录', '2015/2017世锦赛100m决赛', '2018亚运100m金牌 9.92s'], tags: ['起跑大师', '加速型', '亚洲纪录保持者'] },
    { name: '谢震业', nameEn: 'Xie Zhenye', nation: '🇨🇳', event: '100m/200m', pb: '9.97s / 19.88s (亚洲纪录)', born: '1993', bio: '中国短跑双料王牌。200m亚洲纪录保持者19.88s（2019钻石联赛伦敦站），100m PB 9.97s（2022亚运夺金）。唯一同时拥有100m破10s和200m破20s的亚洲选手。', highlights: ['200m亚洲纪录 19.88s (2019)', '2022亚运100m金牌 9.97s', '2019世锦赛200m决赛', '2024巴黎奥运100m/200m代表'], tags: ['步幅型', '200m之王', '后程强劲'] },
    { name: 'Noah Lyles', nameEn: 'Noah Lyles', nation: '🇺🇸', event: '100m/200m', pb: '9.79s / 19.31s', born: '1997', bio: '当今短跑之王。2025东京世锦赛100m+200m双冠。200m史上第三人（仅次于Bolt和Blake）。2024巴黎奥运100m金牌。技术特点：后程加速能力极强，200m最后50m无敌。', highlights: ['2025世锦赛双冠(100m+200m)', '2024巴黎奥运100m金牌', '200m PB 19.31s 历史第三', '3次世锦赛200m金牌'], tags: ['短跑之王', '后程无敌', '200m大师'] },
    { name: 'Letsile Tebogo', nameEn: 'Letsile Tebogo', nation: '🇧🇼', event: '100m/200m', pb: '9.86s / 19.50s', born: '2003', bio: '非洲短跑新旗帜。博茨瓦纳天才少年，2025世锦赛200m铜牌。是非洲短跑崛起的标志性人物。21岁已跑进100m 9.86s和200m 19.50s。', highlights: ['2025世锦赛200m铜牌', '2024巴黎奥运200m决赛', '2023世锦赛200m银牌', 'U20 100m世界纪录9.91s'], tags: ['新星', '非洲短跑', '00后天才'] },
    { name: '陈冠锋', nameEn: 'Chen Guanfeng', nation: '🇨🇳', event: '100m', pb: '10.06s', born: '2002', bio: '中国短跑新生代代表。00后短跑领军人物，2024全国锦标赛100m冠军。室内60m PB 6.55s。被视为苏炳添之后中国短跑的希望。', highlights: ['2024全国锦标赛100m冠军', '60m PB 6.55s', '中国00后最快100m'], tags: ['新生代', '中国短跑未来', '00后'] },
  ]

  return (
    <div className="space-y-4">
      <p className="text-gray-400 text-sm">中国及世界短跑明星运动员档案</p>
      {STARS.map(s => (
        <div key={s.name} className="bg-white/[0.02] border border-white/5 rounded-xl p-5">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="text-white font-semibold text-lg">{s.nation} {s.name}</h3>
              <p className="text-gray-500 text-xs">{s.nameEn} · {s.event}</p>
            </div>
            <span className="text-sm text-accent-light font-mono font-bold">{s.pb}</span>
          </div>
          <p className="text-gray-300 text-sm mb-3">{s.bio}</p>
          <div className="flex flex-wrap gap-1 mb-3">
            {s.tags.map(t => <span key={t} className="text-xs bg-accent/10 text-accent-light px-2 py-0.5">{t}</span>)}
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">🏆 主要成就</p>
            {s.highlights.map((h,i) => <p key={i} className="text-xs text-gray-400">• {h}</p>)}
          </div>
        </div>
      ))}
    </div>
  )
}
