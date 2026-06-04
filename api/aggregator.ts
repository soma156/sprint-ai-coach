import type { VercelRequest, VercelResponse } from '@vercel/node'

// ==========================================
//  多平台赛事信息聚合器
//  聚合：WA排名/赛果 + 各平台搜索入口 + RSS新闻
// ==========================================

const CACHE_TTL = 30 * 60 * 1000 // 30分钟缓存

interface AggregatedData {
  timestamp: string
  rankings: RankingData | null
  news: NewsSource[]
  searchLinks: PlatformSearch[]
  rssFeeds: RssItem[]
}

interface RankingData {
  seasonLeaders: Record<string, Array<{ name: string; nation: string; mark: string; date: string }>>
  source: string
}

interface NewsSource {
  platform: string
  title: string
  url: string
  description: string
  icon: string
}

interface PlatformSearch {
  platform: string
  icon: string
  url: string
  description: string
}

interface RssItem {
  source: string
  title: string
  link: string
  pubDate: string
}

// 缓存
const cacheMap = new Map<string, { data: AggregatedData; ts: number }>()

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')

  const query = (req.query.q as string) || (req.query.competition as string) || ''
  const type = (req.query.type as string) || 'all' // all | rankings | news | athlete

  const cacheKey = `${query}:${type}`
  const cached = cacheMap.get(cacheKey)
  if (cached && Date.now() - cached.ts < CACHE_TTL) {
    return res.status(200).json({ ...cached.data, cached: true })
  }

  try {
    const data = await aggregate(query, type)
    cacheMap.set(cacheKey, { data, ts: Date.now() })
    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json({
      error: err instanceof Error ? err.message : '聚合失败',
      timestamp: new Date().toISOString(),
    })
  }
}

async function aggregate(query: string, type: string): Promise<AggregatedData> {
  const data: AggregatedData = {
    timestamp: new Date().toISOString(),
    rankings: null,
    news: [],
    searchLinks: [],
    rssFeeds: [],
  }

  // 1. WA 排名数据
  if (type === 'all' || type === 'rankings') {
    data.rankings = await fetchWARankings()
  }

  // 2. 各平台搜索入口
  data.searchLinks = generateSearchLinks(query)

  // 3. 新闻聚合
  data.news = generateNewsLinks(query)

  // 4. RSS 源
  if (type === 'all' || type === 'news') {
    data.rssFeeds = await fetchRSS(query)
  }

  return data
}

// ==========================================
//  WA 实时排名获取
// ==========================================

async function fetchWARankings(): Promise<RankingData | null> {
  try {
    const response = await fetch(
      'https://worldathletics.org/api/records/toplists/sprints/100-metres/outdoor/men/senior/2026?regionType=world&page=1&bestResultsOnly=true&maxResultsPerPage=10',
      { headers: { 'Accept': 'application/json', 'User-Agent': 'SprintCoach/1.0' }, signal: AbortSignal.timeout(10000) }
    )
    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const raw = await response.json()
    const seasonLeaders: Record<string, Array<{ name: string; nation: string; mark: string; date: string }>> = {}

    if (raw?.data) {
      seasonLeaders['男子100m'] = (raw.data as Array<Record<string, unknown>>).map(r => ({
        name: (r.competitor as string) || '',
        nation: (r.nat as string) || '',
        mark: (r.mark as string) || '',
        date: (r.date as string) || '',
      }))
    }

    return { seasonLeaders, source: 'World Athletics API (实时)' }
  } catch {
    return null
  }
}

// ==========================================
//  各平台智能搜索链接生成
// ==========================================

function generateSearchLinks(query: string): PlatformSearch[] {
  const encoded = encodeURIComponent(query || '短跑 田径')
  const encodedCN = encodeURIComponent((query || '短跑') + ' 田径')

  return [
    { platform: 'Bilibili', icon: '▶️', url: `https://search.bilibili.com/all?keyword=${encodedCN}`, description: '搜索比赛视频/集锦/技术分析' },
    { platform: '百度新闻', icon: '📰', url: `https://www.baidu.com/s?wd=${encodedCN}&tn=news`, description: '搜索最新田径新闻' },
    { platform: '微博', icon: '💬', url: `https://s.weibo.com/weibo?q=${encodedCN}`, description: '社交媒体实时讨论' },
    { platform: '抖音', icon: '🎵', url: `https://www.douyin.com/search/${encodedCN}`, description: '短视频平台相关话题' },
    { platform: '虎扑', icon: '🏀', url: `https://bbs.hupu.com/search?q=${encodedCN}`, description: '体育社区讨论帖' },
    { platform: 'World Athletics', icon: '🌐', url: `https://worldathletics.org/athletes/search?query=${encoded}`, description: '运动员官方档案/成绩' },
    { platform: '腾讯体育', icon: '📺', url: `https://sports.qq.com/search?query=${encodedCN}`, description: '腾讯体育赛程/新闻' },
    { platform: 'YouTube', icon: '🎬', url: `https://www.youtube.com/results?search_query=${encoded}+athletics+sprint`, description: '国际田径视频（需VPN）' },
  ]
}

// ==========================================
//  新闻来源链接生成
// ==========================================

function generateNewsLinks(query: string): NewsSource[] {
  const q = encodeURIComponent(query || '短跑 田径')
  return [
    { platform: '中国田协', icon: '🇨🇳', title: '中国田径协会官方网站', url: 'http://www.athletics.org.cn/', description: '官方赛历/成绩/公告' },
    { platform: '新浪田径', icon: '📰', title: `新浪体育 — "${query || '短跑'}" 相关新闻`, url: `https://sports.sina.com.cn/search/index?k=${q}`, description: '综合体育新闻' },
    { platform: '百度新闻', icon: '🔍', title: `百度新闻搜索 — "${query || '短跑'}"`, url: `https://www.baidu.com/s?wd=${q}&tn=news`, description: '聚合全网新闻' },
    { platform: 'WA News', icon: '🌐', title: 'World Athletics 新闻', url: 'https://worldathletics.org/news', description: '官方新闻稿' },
    { platform: '钻石联赛', icon: '💎', title: '钻石联赛官网', url: 'https://www.diamondleague.com/', description: '赛程/结果/积分榜' },
    { platform: 'Track & Field News', icon: '📊', title: 'Track & Field News', url: 'https://trackandfieldnews.com/', description: '专业田径杂志（英文）' },
  ]
}

// ==========================================
//  RSS 源获取
// ==========================================

async function fetchRSS(_query: string): Promise<RssItem[]> {
  const items: RssItem[] = []

  // 尝试多个 RSS 源
  const rssSources = [
    'https://worldathletics.org/rss/news',
    'https://www.diamondleague.com/rss/news',
  ]

  for (const url of rssSources) {
    try {
      const resp = await fetch(url, { signal: AbortSignal.timeout(5000) })
      if (!resp.ok) continue
      const text = await resp.text()
      // 简单解析 XML（取前5条）
      const titles = text.match(/<title>(?!.*RSS)(.*?)<\/title>/g)
      const links = text.match(/<link>(https:.*?)<\/link>/g)
      if (titles && links) {
        for (let i = 0; i < Math.min(5, titles.length, links.length); i++) {
          items.push({
            source: url.includes('worldathletics') ? 'World Athletics' : 'Diamond League',
            title: titles[i].replace(/<\/?title>/g, ''),
            link: links[i].replace(/<\/?link>/g, ''),
            pubDate: new Date().toISOString(),
          })
        }
      }
    } catch { /* RSS 不可用，跳过 */ }
  }

  return items
}
