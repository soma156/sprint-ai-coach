import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { UserFormData, FormStep } from '../types'
import { FORM_STEPS } from '../types'
import { useAppContext } from '../context/AppContext'
import { generateTrainingPlan } from '../services/deepseek'

// 步骤组件
import Step1Basic from './steps/Step1Basic'
import Step2Body from './steps/Step2Body'
import Step3Speed from './steps/Step3Speed'
import Step4Power from './steps/Step4Power'
import Step5Strength from './steps/Step5Strength'
import Step6Flexibility from './steps/Step6Flexibility'
import Step7Injury from './steps/Step7Injury'
import Step8Background from './steps/Step8Background'
import Step9Technique from './steps/Step9Technique'
import Step10Recovery from './steps/Step10Recovery'

const STEP_COMPONENTS: Record<FormStep, React.ComponentType<{ data: UserFormData; onChange: (u: Partial<UserFormData>) => void }>> = {
  basic: Step1Basic,
  body: Step2Body,
  speed: Step3Speed,
  power: Step4Power,
  strength: Step5Strength,
  flexibility: Step6Flexibility,
  injury: Step7Injury,
  background: Step8Background,
  technique: Step9Technique,
  recovery: Step10Recovery,
}

const INITIAL_FORM: UserFormData = {
  age: 20, gender: 'male', height: 175, weight: 70,
  event: '100m', currentBest: 12.0, targetTime: 11.5, planWeeks: 8,
  trainingDaysPerWeek: 5, experience: 'beginner', strengthCondition: 'gym',
  injuries: ['none'],
  bodyMeasurements: { armSpan: 0, sittingHeight: 0, legLength: 0, thighLength: 0, calfLength: 0, footLength: 0 },
  speedTests: {},
  powerTests: {},
  strengthTests: {},
  flexibility: { ankleMobility: 'normal', hipMobility: 'normal', squatAbility: 'normal', pelvicPosture: 'neutral', sitAndReach: 'normal', hamstringFlexibility: 'normal' },
  injuryRecords: [],
  trainingBackground: { trainingAge: 0, recent4WeekVolume: 0, weeklySpecificSessions: 3, weeklyStrengthSessions: 2, competitionExperience: 'none', currentPhase: 'pre_season' },
  technicalSkills: { startAbility: 3, accelerationAbility: 3, maxSpeedAbility: 3, lateRaceAbility: 3, videoAnalysis: false },
  recoveryStatus: { avgSleepHours: 7, sleepQuality: 3, restingHeartRate: 65, subjectiveFatigue: 3, stressLevel: 2, recoveryFeeling: 'normal' },
  trainingConditions: { hasTrack: true, hasGrass: false, hasGym: false, hasBarbell: false, hasSquatRack: false, hasResistanceBands: false, hasSled: false, hasPlyoBox: false, hasMedicineBall: false, hasOther: '' },
  goals: [],
}

export default function FormStep() {
  const navigate = useNavigate()
  const { dispatch } = useAppContext()
  const [form, setForm] = useState<UserFormData>(INITIAL_FORM)
  const [currentStep, setCurrentStep] = useState(0)
  const [errors, setErrors] = useState<string[]>([])
  const [captchaQuestion, setCaptchaQuestion] = useState('')
  const [captchaAnswer, setCaptchaAnswer] = useState(0) // 正确答案
  const [captchaInput, setCaptchaInput] = useState('')
  const [adminKey, setAdminKey] = useState('')
  const [showAdmin, setShowAdmin] = useState(false)

  // 浏览器本地生成验证码（不需要请求服务器）
  function loadCaptcha() {
    const a = Math.floor(Math.random() * 10) + 1
    const b = Math.floor(Math.random() * 10) + 1
    setCaptchaQuestion(`${a} + ${b} = ?`)
    setCaptchaAnswer(a + b)
    setCaptchaInput('')
  }

  // 进入最后一步时加载验证码
  useEffect(() => {
    if (currentStep === FORM_STEPS.length - 1 && !captchaQuestion) {
      loadCaptcha()
    }
  }, [currentStep, captchaQuestion])

  const isLastStep = currentStep === FORM_STEPS.length - 1
  const CurrentComponent = STEP_COMPONENTS[FORM_STEPS[currentStep].key]

  function handleChange(updates: Partial<UserFormData>) {
    setForm(prev => ({ ...prev, ...updates }))
    setErrors([])
  }

  function validateBasic(): boolean {
    const errs: string[] = []
    if (form.age < 10 || form.age > 60) errs.push('年龄需在 10-60 岁之间')
    if (form.currentBest <= 0) errs.push('请填写当前最好成绩')
    if (form.targetTime <= 0) errs.push('请填写目标成绩')
    if (form.targetTime >= form.currentBest) errs.push('目标成绩应优于当前成绩')
    if (form.planWeeks < 1 || form.planWeeks > 52) errs.push('计划周期需在 1-52 周之间')
    setErrors(errs)
    return errs.length === 0
  }

  function next() {
    if (currentStep === 0 && !validateBasic()) return
    if (currentStep < FORM_STEPS.length - 1) setCurrentStep(prev => prev + 1)
  }
  function prev() { if (currentStep > 0) setCurrentStep(prev => prev - 1) }
  function goTo(n: number) { setCurrentStep(n); setErrors([]) }

  async function handleSubmit() {
    if (!validateBasic()) { setCurrentStep(0); return }
    if (!adminKey && (!captchaInput || Number(captchaInput) !== captchaAnswer)) {
      setErrors(['验证码答案错误，请重新输入'])
      loadCaptcha()
      return
    }
    dispatch({ type: 'SET_FORM_DATA', payload: form })
    dispatch({ type: 'SET_LOADING', payload: true })
    dispatch({ type: 'SET_ERROR', payload: null })
    try {
      const plan = await generateTrainingPlan(form, adminKey || undefined)
      dispatch({ type: 'SET_TRAINING_PLAN', payload: plan })
      navigate('/result')
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err instanceof Error ? err.message : '生成失败，请重试' })
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* 标题 — 科研论文风格 */}
      <div className="text-center mb-8">
        <p className="text-xs tracking-[0.3em] text-gray-600 uppercase mb-2">Athlete Assessment System</p>
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-2 tracking-tight">
          Sprint AI Coach
        </h1>
        <p className="text-gray-500 text-sm">运动生物力学评估 · 个性化训练方案生成</p>
        <div className="sci-divider" />
      </div>

      {/* 进度条 — 实验室步骤指示器 */}
      <div className="mb-8">
        <div className="flex gap-1 overflow-x-auto pb-2">
          {FORM_STEPS.map((s, i) => (
            <button key={s.key} onClick={() => goTo(i)}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs tracking-wider transition-all
                ${i === currentStep
                  ? 'bg-accent/20 text-accent-light border border-accent/40'
                  : i < currentStep
                  ? 'bg-green-500/10 text-green-400/70 border border-green-500/20'
                  : 'bg-transparent text-gray-600 border border-white/5 hover:border-white/10 hover:text-gray-400'
                }`}>
              <span className="font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
              <span className="hidden sm:inline">{s.title}</span>
            </button>
          ))}
        </div>
        <div className="h-px bg-white/5 mt-3">
          <div className="h-px bg-accent transition-all duration-500"
            style={{ width: `${((currentStep + 1) / FORM_STEPS.length) * 100}%` }} />
        </div>
      </div>

      {/* 错误 */}
      {errors.length > 0 && (
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 mb-4">
          {errors.map((e, i) => <p key={i} className="text-red-300 text-sm">• {e}</p>)}
        </div>
      )}

      {/* 当前步骤 */}
      <div className="sci-card p-6 mb-6">
        <h2 className="text-sm tracking-[0.15em] text-gray-500 uppercase mb-5 font-heading">
          {FORM_STEPS[currentStep].icon} Step {currentStep + 1}/10 — {FORM_STEPS[currentStep].title}
        </h2>
        <CurrentComponent data={form} onChange={handleChange} />
      </div>

      {/* 验证码（仅最后一步显示） */}
      {isLastStep && (
        <div className="mb-4 bg-accent/10 border-2 border-accent/40 rounded-xl p-4">
          <p className="text-sm text-accent font-semibold mb-3">🔐 安全验证</p>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-white font-bold text-2xl shrink-0 bg-white/10 rounded-lg px-4 py-2">
              {captchaQuestion}
            </span>
            <input type="number" value={captchaInput}
              onChange={e => setCaptchaInput(e.target.value)}
              className="w-28 bg-white/10 border-2 border-white/30 rounded-lg px-4 py-3 text-white text-xl text-center focus:outline-none focus:border-accent"
              placeholder="?" autoFocus />
            <span className="text-gray-400 text-sm">请输入答案</span>
            <button type="button" onClick={loadCaptcha}
              className="text-gray-500 hover:text-white text-sm ml-auto">🔄 换一题</button>
            <button type="button" onClick={() => setShowAdmin(!showAdmin)}
              className="text-gray-600 hover:text-gray-400 text-xs">🔑</button>
            {showAdmin && (
              <input type="password" value={adminKey}
                onChange={e => setAdminKey(e.target.value)}
                className="w-32 bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-white text-sm"
                placeholder="管理员密码" />
            )}
          </div>
        </div>
      )}

      {/* 导航按钮 */}
      <div className="flex gap-3 justify-between">
        <button onClick={prev} disabled={currentStep === 0}
          className="px-5 py-2.5 border border-white/5 text-sm text-gray-500 hover:text-gray-300 hover:border-white/10 disabled:opacity-20 transition-all tracking-wider">
          ← PREV
        </button>
        {isLastStep ? (
          <button onClick={handleSubmit}
            className="px-10 py-3 bg-accent text-white text-sm tracking-widest hover:bg-accent-dark transition-all">
            GENERATE PLAN
          </button>
        ) : (
          <button onClick={next}
            className="px-5 py-2.5 border border-accent/30 text-accent-light text-sm tracking-wider hover:bg-accent/10 transition-all">
            NEXT →
          </button>
        )}
      </div>
    </div>
  )
}
