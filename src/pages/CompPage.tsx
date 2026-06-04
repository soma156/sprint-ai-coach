import { useState, useMemo, useEffect } from 'react'
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
  const [tab, setTab] = useState<'calendar' | 'rankings' | 'stars'>('calendar')
  const [interested, setInterested] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem('comp-interested') || '[]') } catch { return [] }
  })
  const [rankingEvent, setRankingEvent] = useState('男子100m')
  const [liveData, setLiveData] = useState<{ source: string; updated: string; data: unknown } | null>(null)

  useEffect(() => {
    fetch('https://sprint-ai-coach.vercel.app/api/fetch-competitions')
      .then(r => r.json())
      .then(d => { if (d.source !== 'error') setLiveData(d) })
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

      {/* 数据源状态 */}
      {liveData && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2 text-xs text-green-400 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          实时数据已连接 · 更新于 {new Date(liveData.updated).toLocaleString('zh-CN')}
        </div>
      )}

      {/* Tab 切换 */}
      <div className="flex border-b border-white/10">
        {[
          { key: 'calendar' as const, label: '📅 赛事日历' },
          { key: 'rankings' as const, label: '📊 赛季排名' },
          { key: 'stars' as const, label: '⭐ 明星运动员' },
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

                {open && (
                  <div className="space-y-4 mt-4 pt-4 border-t border-white/5">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">🏷️ 比赛项目</h4>
                      <div className="flex flex-wrap gap-1">
                        {c.events.split('/').map(e => <span key={e} className="text-xs bg-white/5 text-gray-400 px-2 py-1">{e}</span>)}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a href={`https://search.bilibili.com/all?keyword=${encodeURIComponent(c.name + ' 田径')}`} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-accent-light hover:underline">▶ B站搜索比赛视频</a>
                      <a href="https://worldathletics.org/competitions" target="_blank" rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-gray-300">🌐 World Athletics 官方</a>
                    </div>
                  </div>
                )}
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

      {tab === 'stars' && (
        <AthleteStars />
      )}
    </div>
  )
}

// ⭐ 明星运动员资料
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
