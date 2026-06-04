import type { VercelRequest, VercelResponse } from '@vercel/node'

// World Athletics 公开 API endpoints
const WA_API = 'https://worldathletics.org/api'

// 缓存策略：30分钟刷新一次
let cache: { data: unknown; timestamp: number } | null = null
const CACHE_TTL = 30 * 60 * 1000

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 允许跨域（GitHub Pages 调用 Vercel）
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')

  // 返回缓存（30分钟内）
  if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
    return res.status(200).json({ source: 'cache', updated: new Date(cache.timestamp).toISOString(), data: cache.data })
  }

  try {
    // 尝试获取官方赛事日历
    const results = await fetchLiveData()
    cache = { data: results, timestamp: Date.now() }
    return res.status(200).json({ source: 'live', updated: new Date().toISOString(), data: results })
  } catch (err) {
    // 抓取失败，返回提示
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return res.status(200).json({
      source: 'error',
      error: msg,
      hint: '当前无法获取实时数据，请使用本站内置的赛事日历。',
      updated: new Date().toISOString(),
      data: null,
    })
  }
}

async function fetchLiveData() {
  // 方案1：World Athletics 赛事日历（公开接口，无需API Key）
  const controllers = [
    { name: 'WA Calendar', url: 'https://worldathletics.org/competition/calendar-results' },
    { name: 'Diamond League', url: 'https://www.diamondleague.com/calendar/' },
  ]

  const events: Array<{ name: string; date: string; location: string; source: string }> = []

  // 尝试 WA Calendar JSON 接口
  try {
    const waResp = await fetch(
      'https://worldathletics.org/api/records/toplists/sprints/100-metres/outdoor/men/senior/2026?regionType=world&page=1&bestResultsOnly=true',
      { headers: { 'Accept': 'application/json', 'User-Agent': 'SprintCoach/1.0' }, signal: AbortSignal.timeout(8000) }
    )
    if (waResp.ok) {
      const data = await waResp.json()
      if (data?.data?.length > 0) {
        events.push({
          name: 'WA 2026男子100m赛季最好成绩（实时）',
          date: new Date().toISOString(),
          location: '全球',
          source: 'World Athletics API',
        })
        return {
          seasonLeaders: data.data.slice(0, 5).map((r: Record<string, unknown>) => ({
            name: r.competitor,
            nation: r.nat,
            mark: r.mark,
            date: r.date,
            venue: r.venue,
          })),
          message: '✅ 成功获取 WA 实时数据',
          events,
        }
      }
    }
  } catch {
    // WA API 不可用，尝试其他
  }

  // 方案2：使用更简单的公开数据源
  try {
    const resp = await fetch(
      'https://worldathletics.org/competition/calendar-results',
      { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(8000) }
    )
    if (resp.ok) {
      const text = await resp.text()
      if (text.includes('competition')) {
        events.push({
          name: 'WA 官方赛事日历',
          date: new Date().toISOString(),
          location: 'worldathletics.org',
          source: 'WA Calendar',
        })
      }
    }
  } catch {
    // 降级
  }

  if (events.length === 0) {
    throw new Error('无法连接 World Athletics 服务器（可能被墙或服务不可用）')
  }

  return { events }
}
