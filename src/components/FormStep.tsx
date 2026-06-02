import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { UserFormData, InjuryType } from '../types'
import {
  EVENT_OPTIONS,
  GENDER_OPTIONS,
  EXPERIENCE_OPTIONS,
  STRENGTH_OPTIONS,
  INJURY_OPTIONS,
  TRAINING_DAYS_OPTIONS,
} from '../constants'
import { useAppContext } from '../context/AppContext'
import { generateTrainingPlan } from '../services/deepseek'

const INITIAL_FORM: UserFormData = {
  age: 20,
  gender: 'male',
  height: 175,
  weight: 70,
  event: '100m',
  currentBest: 12.0,
  targetTime: 11.5,
  planWeeks: 8,
  trainingDaysPerWeek: 5,
  experience: 'beginner',
  strengthCondition: 'gym',
  injuries: ['none'],
}

export default function FormStep() {
  const navigate = useNavigate()
  const { dispatch } = useAppContext()
  const [form, setForm] = useState<UserFormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<string[]>([])

  // 更新单个字段
  function updateField<K extends keyof UserFormData>(key: K, value: UserFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors([])
  }

  // 处理伤病多选
  function toggleInjury(injury: InjuryType) {
    setForm((prev) => {
      // 如果选了"无伤病"，清除其他
      if (injury === 'none') {
        return { ...prev, injuries: ['none'] }
      }
      // 移除"无伤病"并切换选择
      const withoutNone = prev.injuries.filter((i) => i !== 'none')
      if (withoutNone.includes(injury)) {
        const next = withoutNone.filter((i) => i !== injury)
        return { ...prev, injuries: next.length === 0 ? ['none'] : next }
      }
      return { ...prev, injuries: [...withoutNone, injury] }
    })
    setErrors([])
  }

  // 表单验证
  function validate(): boolean {
    const errs: string[] = []
    if (form.age < 10 || form.age > 60) errs.push('年龄需在 10-60 岁之间')
    if (form.height < 130 || form.height > 220) errs.push('身高需在 130-220cm 之间')
    if (form.weight < 30 || form.weight > 150) errs.push('体重需在 30-150kg 之间')
    if (form.currentBest <= 0) errs.push('请填写当前最好成绩')
    if (form.targetTime <= 0) errs.push('请填写目标成绩')
    if (form.targetTime >= form.currentBest) errs.push('目标成绩应优于当前成绩')
    if (form.planWeeks < 1 || form.planWeeks > 52) errs.push('计划周期需在 1-52 周之间')
    setErrors(errs)
    return errs.length === 0
  }

  // 提交表单
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    dispatch({ type: 'SET_FORM_DATA', payload: form })
    dispatch({ type: 'SET_LOADING', payload: true })
    dispatch({ type: 'SET_ERROR', payload: null })

    try {
      const plan = await generateTrainingPlan(form)
      dispatch({ type: 'SET_TRAINING_PLAN', payload: plan })
      navigate('/result')
    } catch (err) {
      dispatch({
        type: 'SET_ERROR',
        payload: err instanceof Error ? err.message : '生成失败，请重试',
      })
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  // ====== 渲染 ======

  const inputClass = "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
  const labelClass = "block text-sm font-medium text-gray-300 mb-1.5"
  const sectionClass = "bg-white/5 border border-white/10 rounded-xl p-5 mb-5"

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {/* 标题 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          🏃 AI短跑训练计划生成器
        </h1>
        <p className="text-gray-400 text-lg">Sprint AI Coach</p>
        <p className="text-gray-500 mt-1">
          根据你的成绩和训练情况生成个性化训练方案
        </p>
      </div>

      {/* 错误提示 */}
      {errors.length > 0 && (
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-5">
          <ul className="list-disc list-inside text-red-300 text-sm space-y-1">
            {errors.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </div>
      )}

      {/* === 基本信息 === */}
      <div className={sectionClass}>
        <h2 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
          📋 基本信息
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 年龄 */}
          <div>
            <label className={labelClass}>年龄</label>
            <input type="number" min={10} max={60} value={form.age}
              onChange={(e) => updateField('age', Number(e.target.value))}
              className={inputClass} />
          </div>
          {/* 性别 */}
          <div>
            <label className={labelClass}>性别</label>
            <div className="flex gap-3">
              {GENDER_OPTIONS.map((g) => (
                <button key={g.value} type="button"
                  onClick={() => updateField('gender', g.value)}
                  className={`flex-1 py-2.5 rounded-lg border text-sm font-medium transition-colors
                    ${form.gender === g.value
                      ? 'bg-accent border-accent text-white'
                      : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                    }`}>
                  {g.label}
                </button>
              ))}
            </div>
          </div>
          {/* 身高 */}
          <div>
            <label className={labelClass}>身高 (cm)</label>
            <input type="number" min={130} max={220} value={form.height}
              onChange={(e) => updateField('height', Number(e.target.value))}
              className={inputClass} />
          </div>
          {/* 体重 */}
          <div>
            <label className={labelClass}>体重 (kg)</label>
            <input type="number" min={30} max={150} value={form.weight}
              onChange={(e) => updateField('weight', Number(e.target.value))}
              className={inputClass} />
          </div>
        </div>
      </div>

      {/* === 训练信息 === */}
      <div className={sectionClass}>
        <h2 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
          🎯 训练信息
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 项目选择 */}
          <div>
            <label className={labelClass}>项目</label>
            <div className="flex gap-2 flex-wrap">
              {EVENT_OPTIONS.map((ev) => (
                <button key={ev.value} type="button"
                  onClick={() => updateField('event', ev.value)}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium transition-colors
                    ${form.event === ev.value
                      ? 'bg-accent border-accent text-white'
                      : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                    }`}>
                  {ev.label}
                </button>
              ))}
            </div>
          </div>
          {/* 训练年限 */}
          <div>
            <label className={labelClass}>训练年限</label>
            <select value={form.experience}
              onChange={(e) => updateField('experience', e.target.value as UserFormData['experience'])}
              className={inputClass}>
              {EXPERIENCE_OPTIONS.map((ex) => (
                <option key={ex.value} value={ex.value}>{ex.label}</option>
              ))}
            </select>
          </div>
          {/* 当前成绩 */}
          <div>
            <label className={labelClass}>当前最好成绩 (秒)</label>
            <input type="number" step="0.01" min={0} value={form.currentBest}
              onChange={(e) => updateField('currentBest', Number(e.target.value))}
              className={inputClass} placeholder="例如：12.00" />
          </div>
          {/* 目标成绩 */}
          <div>
            <label className={labelClass}>目标成绩 (秒)</label>
            <input type="number" step="0.01" min={0} value={form.targetTime}
              onChange={(e) => updateField('targetTime', Number(e.target.value))}
              className={inputClass} placeholder="例如：11.50" />
          </div>
          {/* 计划周期 */}
          <div>
            <label className={labelClass}>计划达成周期 (周)</label>
            <input type="number" min={1} max={52} value={form.planWeeks}
              onChange={(e) => updateField('planWeeks', Number(e.target.value))}
              className={inputClass} />
          </div>
          {/* 每周训练天数 */}
          <div>
            <label className={labelClass}>每周训练天数</label>
            <div className="flex gap-2">
              {TRAINING_DAYS_OPTIONS.map((d) => (
                <button key={d} type="button"
                  onClick={() => updateField('trainingDaysPerWeek', d)}
                  className={`w-10 h-10 rounded-lg border text-sm font-medium transition-colors
                    ${form.trainingDaysPerWeek === d
                      ? 'bg-accent border-accent text-white'
                      : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                    }`}>
                  {d}
                </button>
              ))}
            </div>
          </div>
          {/* 力量条件 */}
          <div className="sm:col-span-2">
            <label className={labelClass}>力量条件</label>
            <div className="flex gap-3">
              {STRENGTH_OPTIONS.map((s) => (
                <button key={s.value} type="button"
                  onClick={() => updateField('strengthCondition', s.value)}
                  className={`flex-1 py-2.5 rounded-lg border text-sm font-medium transition-colors
                    ${form.strengthCondition === s.value
                      ? 'bg-accent border-accent text-white'
                      : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                    }`}>
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* === 伤病情况 === */}
      <div className={sectionClass}>
        <h2 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
          🏥 伤病情况（可多选）
        </h2>
        <div className="flex gap-2 flex-wrap">
          {INJURY_OPTIONS.map((inj) => {
            const selected = form.injuries.includes(inj.value)
            return (
              <button key={inj.value} type="button"
                onClick={() => toggleInjury(inj.value)}
                className={`px-3 py-2 rounded-lg border text-sm transition-colors
                  ${selected
                    ? 'bg-accent border-accent text-white'
                    : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                  }`}>
                {inj.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* 提交按钮 */}
      <button type="submit"
        className="w-full py-3.5 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98]">
        🚀 生成训练计划
      </button>
    </form>
  )
}
