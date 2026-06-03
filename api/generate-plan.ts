import type { VercelRequest, VercelResponse } from '@vercel/node'

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || ''
const ADMIN_KEY = process.env.ADMIN_KEY || ''
const DAILY_LIMIT = 1

const rateLimitMap = new Map<string, number>()

setInterval(() => {
  const today = new Date().toISOString().slice(0, 10)
  for (const key of rateLimitMap.keys()) {
    if (!key.endsWith(today)) rateLimitMap.delete(key)
  }
}, 3600000)

function getIP(req: VercelRequest): string {
  return (req.headers['x-real-ip'] as string)
    || (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim()
    || req.socket.remoteAddress || 'unknown'
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: '只支持 POST 请求' })
  }

  const ip = getIP(req)
  const body = req.body || {}
  const isAdmin = ADMIN_KEY && body._admin === ADMIN_KEY

  // 频率限制（管理员跳过）
  if (!isAdmin) {
    const today = new Date().toISOString().slice(0, 10)
    const key = `${ip}:${today}`
    const count = rateLimitMap.get(key) || 0
    if (count >= DAILY_LIMIT) {
      return res.status(429).json({ error: `你今天已用完${DAILY_LIMIT}次，请明天再来`, remaining: 0 })
    }
    rateLimitMap.set(key, count + 1)
  }

  if (!DEEPSEEK_API_KEY) {
    return res.status(500).json({ error: '服务器未配置 API Key' })
  }

  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const errText = await response.text()
      return res.status(response.status).json({ error: `DeepSeek API 错误: ${errText}` })
    }

    const data = await response.json()

    // 返回剩余次数
    if (!isAdmin) {
      const today = new Date().toISOString().slice(0, 10)
      const key = `${ip}:${today}`
      const remaining = DAILY_LIMIT - (rateLimitMap.get(key) || 0)
      return res.status(200).json({ ...data, _remaining: Math.max(0, remaining) })
    }
    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json({ error: `服务器错误: ${err}` })
  }
}
