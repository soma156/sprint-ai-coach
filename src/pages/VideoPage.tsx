import { useState, useRef, useEffect } from 'react'
import type { CapturedFrame, VideoAnalysisResult } from '../types'

const btnC = "px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
const btnC2 = "px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-sm text-gray-300 hover:bg-white/20 transition-colors"

// Gemini 自动分析模式：提取视频帧 + AI 视觉分析
const MAX_FRAMES = 16 // Gemini API 上限

function GeminiAnalyzer({ videoSrc, duration }: { videoSrc: string; duration: number }) {
  const [mode, setMode] = useState<'input' | 'extracting' | 'analyzing' | 'done'>('input')
  const [description, setDescription] = useState('')
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  /** 从视频元素指定时间点截取一帧 */
  async function captureFrameAt(video: HTMLVideoElement, canvas: HTMLCanvasElement, time: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const onSeeked = () => {
        video.removeEventListener('seeked', onSeeked)
        canvas.width = video.videoWidth || 640
        canvas.height = video.videoHeight || 360
        const ctx = canvas.getContext('2d')
        if (!ctx) return reject(new Error('Canvas context 失败'))
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        resolve(canvas.toDataURL('image/jpeg', 0.8))
      }
      video.addEventListener('seeked', onSeeked)
      video.currentTime = time
    })
  }

  async function handleAutoAnalyze() {
    setError('')
    setResult('')
    setMode('extracting')
    setProgress(0)

    let step = ''

    try {
      const totalDuration = duration || 30
      const totalFrames = Math.min(MAX_FRAMES, Math.max(4, Math.round(totalDuration)))
      const interval = totalDuration / totalFrames

      // 1. 创建隐藏视频元素加载视频
      step = '加载视频...'
      const video = document.createElement('video')
      video.src = videoSrc
      video.crossOrigin = 'anonymous'
      video.preload = 'auto'
      await new Promise<void>((resolve, reject) => {
        video.onloadedmetadata = () => resolve()
        video.onerror = () => reject(new Error('视频加载失败'))
        // 如果 30 秒还没加载完就报错
        setTimeout(() => reject(new Error('视频加载超时')), 30000)
      })
      setProgress(20)

      // 2. 创建 canvas
      step = '提取视频帧...'
      const canvas = document.createElement('canvas')
      const timestamps: number[] = []
      for (let i = 0; i < totalFrames; i++) {
        timestamps.push(Math.round((i * interval + interval / 2) * 100) / 100)
      }

      // 3. 逐个截取
      const frames: { dataUrl: string; timestamp: number }[] = []
      for (let i = 0; i < timestamps.length; i++) {
        step = `截取第 ${i + 1}/${totalFrames} 帧...`
        try {
          const dataUrl = await captureFrameAt(video, canvas, timestamps[i])
          frames.push({ dataUrl, timestamp: timestamps[i] })
          setProgress(20 + Math.round(((i + 1) / totalFrames) * 60))
        } catch { /* 跳过截取失败的帧 */ }
      }

      // 清理
      video.pause()
      video.src = ''
      video.load()
      setProgress(80)

      // 5. 直接调用 Gemini API（无需后端，GitHub Pages 可用）
      setMode('analyzing')
      const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY
      if (!GEMINI_KEY) throw new Error('未配置 Gemini API Key')

      const parts: Array<{ text?: string; inlineData?: { mimeType: string; data: string } }> = []
      parts.push({ text: `你是一名短跑生物力学专家。请分析这段短跑视频，从以下维度给出专业报告：
1. 身体姿态：躯干角度、骨盆位置、头部位置
2. 下肢动作：膝关节驱动、髋关节伸展、踝关节刚性、着地技术
3. 手臂摆动：摆臂幅度、方向、协调性
4. 技术错误：逐一指出具体问题
5. 改进建议：针对每个问题给出训练方法
请用中文回答，结构清晰，数据驱动。
用户描述：${description || '未提供'}` })

      for (const f of frames) {
        if (f.dataUrl.startsWith('data:image')) {
          const [header, data] = f.dataUrl.split(',')
          const mimeType = header.split(':')[1].split(';')[0]
          parts.push({ inlineData: { mimeType, data } })
        }
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`,
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
        throw new Error(`Gemini API 错误: ${err}`)
      }

      const data = await response.json()
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '分析未返回内容'
      setResult(text)
      setProgress(100)
      setMode('done')
    } catch (err) {
      const raw = err instanceof Error ? err.message : String(err)
      const msg = raw || '分析失败'
      // 带步骤信息的错误
      const full = step ? `[${step}] ${msg}` : msg
      if (msg.includes('Failed to fetch') || msg.includes('NetworkError')) {
        setError('Google Gemini API 在中国境内被墙，请使用科学上网后重试')
      } else if (msg.includes('SharedArrayBuffer')) {
        setError('浏览器不支持 SharedArrayBuffer，请用 Chrome/Edge 打开')
      } else {
        setError(full)
      }
      console.error('[GeminiAnalyzer] 步骤:', step, '错误:', msg, err)
      setMode('input')
    }
  }

  if (mode === 'extracting' || mode === 'analyzing') {
    return (
      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 text-center space-y-4">
        <p className="text-4xl">{mode === 'extracting' ? '🎬' : '🧠'}</p>
        <p className="text-white font-medium">{mode === 'extracting' ? '正在提取视频帧...' : 'AI 正在分析你的动作...'}</p>
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-accent transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-gray-500 text-xs">这可能需要 30-60 秒</p>
      </div>
    )
  }

  if (mode === 'done' && result) {
    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <button onClick={() => { setMode('input'); setResult('') }} className={btnC2}>🔄 重新分析</button>
        </div>
        <div className="bg-white/[0.02] border border-accent/20 rounded-xl p-5">
          <h3 className="text-lg font-semibold text-accent-light mb-4">📊 Gemini 视频分析报告</h3>
          <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{result}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-xl">🤖</span>
        <div>
          <h3 className="text-white font-semibold">Gemini AI 自动分析</h3>
          <p className="text-gray-500 text-xs">上传视频 → AI 自动提取关键帧 → 深度分析整个动作</p>
        </div>
      </div>
      <div>
        <label className="block text-xs text-gray-500 mb-1">简单描述这个视频（如：100m起跑训练、200m弯道、途中跑技术...）</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)}
          className="w-full bg-white/[0.03] border border-white/5 px-4 py-2.5 text-white text-sm rounded-lg focus:outline-none focus:border-accent/50"
          rows={2} placeholder="描述视频内容，帮助 AI 更精准分析..." />
      </div>
      <button onClick={handleAutoAnalyze} className={`${btnC} w-full py-3 text-lg`}>
        🧠 开始自动分析
      </button>
      {error && <p className="text-red-400 text-sm">❌ {error}</p>}
    </div>
  )
}

const PHASES = ['起跑', '加速阶段', '途中跑', '冲刺/后程', '弯道技术', '其他']

export default function VideoPage() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null)
  const [videoDuration, setVideoDuration] = useState(0)
  const [frames, setFrames] = useState<CapturedFrame[]>([])
  const [selectedFrame, setSelectedFrame] = useState<string | null>(null)
  const [result, setResult] = useState<VideoAnalysisResult | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [error, setError] = useState('')

  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // 处理视频上传
  function handleVideoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 100 * 1024 * 1024) { setError('视频文件不能超过 100MB'); return }
    const url = URL.createObjectURL(file)
    setVideoSrc(url)
    setFrames([])
    setResult(null)
    setError('')
  }

  // 截取当前帧
  function captureFrame() {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return

    canvas.width = video.videoWidth || 640
    canvas.height = video.videoHeight || 360
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    const dataUrl = canvas.toDataURL('image/jpeg', 0.85)
    const frame: CapturedFrame = {
      id: crypto.randomUUID(),
      dataUrl,
      timestamp: video.currentTime,
      phase: '途中跑',
      userNote: '',
    }
    setFrames(prev => [...prev, frame])
    setSelectedFrame(frame.id)
  }

  // 更新截图的阶段或备注
  function updateFrame(id: string, updates: Partial<CapturedFrame>) {
    setFrames(prev => prev.map(f => f.id === id ? { ...f, ...updates } : f))
  }

  function deleteFrame(id: string) {
    setFrames(prev => prev.filter(f => f.id !== id))
    if (selectedFrame === id) setSelectedFrame(null)
  }

  // 发送给 AI 分析
  async function handleAnalyze() {
    if (frames.length === 0) { setError('请先截取至少一帧'); return }
    setAnalyzing(true)
    setError('')

    try {
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: buildAnalysisPrompt(frames) },
          ],
          temperature: 0.5,
          max_tokens: 8192,
        }),
      })

      if (!response.ok) {
        const t = await response.text()
        throw new Error(`API 错误: ${t}`)
      }

      const data = await response.json()
      const content = data.choices?.[0]?.message?.content || ''
      setResult(parseAnalysisResult(content))
    } catch (err) {
      setError(err instanceof Error ? err.message : '分析失败')
    } finally {
      setAnalyzing(false)
    }
  }

  // 清理视频 URL
  useEffect(() => {
    return () => { if (videoSrc) URL.revokeObjectURL(videoSrc) }
  }, [videoSrc])

  const selected = frames.find(f => f.id === selectedFrame)

  return (
    <div className="max-w-5xl mx-auto py-4 space-y-6">
      <h1 className="text-2xl font-bold">🎥 短跑动作视频分析</h1>
      <p className="text-gray-400 text-sm">
        上传短跑视频 → 播放并截取关键帧 → 简单描述 → AI 从生物力学角度深度分析你的动作
      </p>

      {/* 上传 / 播放 */}
      {!videoSrc ? (
        <div className="border-2 border-dashed border-white/20 rounded-2xl p-12 text-center">
          <p className="text-4xl mb-4">🎬</p>
          <p className="text-white font-medium mb-2">上传你的短跑视频</p>
          <p className="text-gray-500 text-sm mb-4">支持 MP4、MOV、WebM，最大 100MB</p>
          <label className={`${btnC} cursor-pointer inline-block`}>
            选择视频文件
            <input type="file" accept="video/*" onChange={handleVideoUpload} className="hidden" />
          </label>
        </div>
      ) : (
        <div className="space-y-4">
          {/* 视频播放器 */}
          <div className="bg-black rounded-xl overflow-hidden">
            <video ref={videoRef} src={videoSrc} controls className="w-full max-h-[400px]"
              onLoadedMetadata={() => { if (videoRef.current) setVideoDuration(videoRef.current.duration) }}
              onError={() => setError('视频格式不支持，请转换为 MP4 后重试')} />
          </div>
          <canvas ref={canvasRef} className="hidden" />

          {/* Gemini 自动分析 */}
          <GeminiAnalyzer videoSrc={videoSrc} duration={videoDuration} />

          <div className="flex gap-3">
            <button onClick={captureFrame} className={btnC}>📸 截取当前帧</button>
            <span className="text-gray-500 text-sm self-center">
              拖动进度条到关键动作位置，点击截取（已截 {frames.length} 帧）
            </span>
          </div>
        </div>
      )}

      {/* 截图列表 */}
      {frames.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">📸 已截取的关键帧（{frames.length}）</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {frames.map(f => (
              <div key={f.id}
                onClick={() => setSelectedFrame(f.id)}
                className={`shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-colors
                  ${selectedFrame === f.id ? 'border-accent' : 'border-white/20 hover:border-white/50'}`}>
                <img src={f.dataUrl} alt="" className="w-32 h-20 object-cover" />
                <div className="text-xs text-gray-400 text-center py-1">{f.timestamp.toFixed(1)}s</div>
              </div>
            ))}
          </div>

          {/* 选中帧的编辑 */}
          {selected && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
              <div className="flex gap-4 items-start">
                <img src={selected.dataUrl} alt="" className="w-48 rounded-lg hidden sm:block" />
                <div className="flex-1 space-y-3">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">动作阶段</label>
                    <div className="flex gap-1 flex-wrap">
                      {PHASES.map(p => (
                        <button key={p} onClick={() => updateFrame(selected.id, { phase: p })}
                          className={`px-2 py-1 rounded text-xs ${selected.phase === p ? 'bg-accent text-white' : 'bg-white/10 text-gray-400 hover:text-white'}`}>{p}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      简单描述你观察到的内容（如：感觉起跑时膝盖抬起不够高，身体前倾角度是否太大？）
                    </label>
                    <textarea value={selected.userNote}
                      onChange={e => updateFrame(selected.id, { userNote: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-accent"
                      rows={3} placeholder="描述这一帧的动作，越详细 AI 分析越准确..." />
                  </div>
                  <button onClick={() => deleteFrame(selected.id)} className="text-red-400 text-xs hover:text-red-300">🗑 删除此帧</button>
                </div>
              </div>
            </div>
          )}

          {/* 分析按钮 */}
          <button onClick={handleAnalyze} disabled={analyzing} className={`${btnC} w-full py-3 text-lg`}>
            {analyzing ? '⏳ AI 正在分析你的动作...' : '🔬 开始动作分析'}
          </button>
        </div>
      )}

      {/* 错误 */}
      {error && <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-300 text-sm">{error}</div>}

      {/* 分析结果 */}
      {result && (
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white">📊 动作分析报告</h2>

          {/* 整体评估 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-2">🔍 整体评估</h3>
            <p className="text-gray-300 leading-relaxed">{result.overallAssessment}</p>
          </div>

          {/* 优势 */}
          {result.strengths?.length > 0 && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-green-400 mb-2">✅ 做得好的地方</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {result.strengths.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          )}

          {/* 错误分析 */}
          {result.errors?.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">⚠️ 动作问题明细</h3>
              {result.errors.map((e, i) => (
                <div key={i} className="bg-white/5 border border-red-500/30 rounded-xl p-5 space-y-3">
                  <div>
                    <span className="text-xs bg-red-500/30 text-red-300 px-2 py-0.5 rounded">{e.phase}</span>
                    <p className="text-white font-semibold mt-2">❌ {e.error}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">🧬 为什么会错（生物力学原理）</p>
                    <p className="text-gray-300 text-sm">{e.whyWrong}</p>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-3">
                    <p className="text-xs text-blue-400 mb-1">✅ 如何纠正</p>
                    <p className="text-gray-300 text-sm">{e.howToFix}</p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3">
                    <p className="text-xs text-accent mb-1">💪 强化训练方法</p>
                    <p className="text-gray-300 text-sm">{e.exercises}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 关键建议 */}
          {result.keyRecommendations?.length > 0 && (
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-accent-light mb-2">🎯 关键改进建议</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {result.keyRecommendations.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ========== AI 系统提示词 ==========

const SYSTEM_PROMPT = `你是一名短跑生物力学专家和国家级短跑教练。你的任务是分析运动员的短跑动作截图，从生物力学、运动解剖学和训练学角度进行深度分析。

请以 JSON 格式返回分析结果：
{
  "overallAssessment": "整体动作评估（200字内）",
  "errors": [
    {
      "error": "具体错误描述",
      "whyWrong": "从生物力学/运动解剖学原理解释为什么这是错的",
      "howToFix": "如何纠正这个错误（具体可操作的技术指导）",
      "exercises": "针对性的强化训练方法",
      "phase": "所属阶段（起跑/加速/途中跑/冲刺/弯道）"
    }
  ],
  "strengths": ["做得好的地方1", "做得好的地方2"],
  "keyRecommendations": ["关键建议1", "关键建议2"]
}

分析角度：
1. 身体姿态：躯干角度、骨盆位置、头部位置
2. 下肢动作：膝盖驱动、髋关节伸展、踝关节刚性
3. 手臂摆动：摆臂幅度、方向、与下肢的协调
4. 着地技术：着地点位置、触地时间、蹬地发力
5. 步幅与步频：是否与运动员身体条件匹配

重要：从"这是错的，因为什么原理，所以要怎么改，通过什么训练来强化"四步法分析每个错误。只返回 JSON。`

// ========== 构建分析提示词 ==========

function buildAnalysisPrompt(frames: CapturedFrame[]): string {
  return `请分析以下短跑动作截图：

共有 ${frames.length} 个关键帧：
${frames.map((f, i) => `
---
帧 ${i + 1}：
- 时间点：视频第 ${f.timestamp.toFixed(1)} 秒
- 动作阶段：${f.phase}
- 用户观察：${f.userNote || '未提供'}
`).join('\n')}

请根据这些信息，从短跑生物力学角度进行深度动作分析。对每个发现的问题，请严格按"错误→原理→纠正→强化"四步法输出。`
}

// ========== 解析 AI 返回 ==========

function parseAnalysisResult(content: string): VideoAnalysisResult {
  let jsonStr = content.trim()
  if (jsonStr.startsWith('```')) {
    const end = jsonStr.lastIndexOf('```')
    jsonStr = jsonStr.slice(jsonStr.indexOf('\n') + 1, end).trim()
  }

  try {
    const parsed = JSON.parse(jsonStr)
    return {
      overallAssessment: parsed.overallAssessment || '',
      errors: parsed.errors || [],
      strengths: parsed.strengths || [],
      keyRecommendations: parsed.keyRecommendations || [],
    }
  } catch {
    return {
      overallAssessment: content,
      errors: [],
      strengths: [],
      keyRecommendations: [],
    }
  }
}
