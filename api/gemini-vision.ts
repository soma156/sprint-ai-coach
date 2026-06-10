import type { VercelRequest, VercelResponse } from '@vercel/node'

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || ''
const MODEL = 'gemini-2.5-flash'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: '只支持 POST' })

  if (!GEMINI_API_KEY) return res.status(500).json({ error: '未配置 GEMINI_API_KEY' })

  try {
    const { frames, prompt, description } = req.body

    // 构建 Gemini 请求体
    const parts: Array<{ text?: string; inlineData?: { mimeType: string; data: string } }> = []

    // 添加提示词
    parts.push({ text: prompt || `请分析这段短跑视频。用户描述：${description || '未提供'}` })

    // 添加帧（最多 16 帧，避免超出 Gemini 上下文限制）
    const selectedFrames = (frames || []).slice(0, 16)
    for (const frame of selectedFrames) {
      if (frame.dataUrl && frame.dataUrl.startsWith('data:image')) {
        const [header, data] = frame.dataUrl.split(',')
        const mimeType = header.split(':')[1].split(';')[0]
        parts.push({ inlineData: { mimeType, data } })
      }
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts }],
          generationConfig: { temperature: 0.4, maxOutputTokens: 4096 },
        }),
      }
    )

    if (!response.ok) {
      const err = await response.text()
      return res.status(response.status).json({ error: `Gemini API Error: ${err}` })
    }

    const data = await response.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '分析未返回内容'

    return res.status(200).json({ analysis: text })
  } catch (err) {
    return res.status(500).json({ error: `服务器错误: ${err}` })
  }
}
