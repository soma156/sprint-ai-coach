// ========== 表单步骤 ==========

export type FormStep =
  | 'basic' | 'body' | 'speed' | 'power' | 'strength'
  | 'flexibility' | 'injury' | 'background' | 'technique' | 'recovery'

export const FORM_STEPS: { key: FormStep; title: string; icon: string; num: number }[] = [
  { key: 'basic', title: '基本信息', icon: '📋', num: 1 },
  { key: 'body', title: '身体比例', icon: '📐', num: 2 },
  { key: 'speed', title: '速度测试', icon: '🏃', num: 3 },
  { key: 'power', title: '爆发力测试', icon: '💥', num: 4 },
  { key: 'strength', title: '力量测试', icon: '🏋️', num: 5 },
  { key: 'flexibility', title: '柔韧性评估', icon: '🤸', num: 6 },
  { key: 'injury', title: '伤病档案', icon: '🏥', num: 7 },
  { key: 'background', title: '训练背景', icon: '📊', num: 8 },
  { key: 'technique', title: '技术特点', icon: '🔧', num: 9 },
  { key: 'recovery', title: '恢复·条件·目标', icon: '🎯', num: 10 },
]

// ========== 基础枚举 ==========

export type EventType = '60m' | '100m' | '200m' | '400m'
export type Gender = 'male' | 'female'
export type ExperienceLevel = 'beginner' | '1-3years' | '3-5years' | '5years+'
export type StrengthCondition = 'gym' | 'no-gym'
export type InjuryType = 'none' | 'hamstring' | 'knee' | 'achilles' | 'lowerback'

// ========== 身体比例 ==========

export interface BodyMeasurements {
  armSpan: number
  sittingHeight: number
  legLength: number
  thighLength: number
  calfLength: number
  footLength: number
}

// ========== 速度测试 ==========

export interface SpeedTests {
  time30m?: number
  time60m?: number
  time100m?: number
  time150m?: number
  time200m?: number
}

// ========== 爆发力测试 ==========

export interface PowerTests {
  standingLongJump?: number
  standingTripleJump?: number
  verticalReach?: number
  cmj?: number
}

// ========== 力量测试 ==========

export interface StrengthTests {
  squat1RM?: number
  halfSquat1RM?: number
  deadlift1RM?: number
  benchPress1RM?: number
}

// ========== 柔韧性 ==========

export type MobilityLevel = 'good' | 'normal' | 'limited' | 'poor'

export interface FlexibilityAssessment {
  ankleMobility: MobilityLevel
  hipMobility: MobilityLevel
  squatAbility: MobilityLevel
  pelvicPosture: 'neutral' | 'anterior_tilt' | 'posterior_tilt'
  sitAndReach: MobilityLevel
  hamstringFlexibility: MobilityLevel
}

// ========== 伤病档案 ==========

export type InjurySeverity = 'mild' | 'moderate' | 'severe'

export interface InjuryRecord {
  id: string
  bodyPart: string
  occurredDate: string
  severity: InjurySeverity
  isRecurring: boolean
  fullyRecovered: boolean
  notes: string
}

// ========== 训练背景 ==========

export type TrainingPhase = 'off_season' | 'pre_season' | 'in_season' | 'competition' | 'transition'

export interface TrainingBackground {
  trainingAge: number
  recent4WeekVolume: number
  weeklySpecificSessions: number
  weeklyStrengthSessions: number
  competitionExperience: 'none' | 'regional' | 'national' | 'international'
  currentPhase: TrainingPhase
}

// ========== 技术特点 ==========

export type SelfRating = 1 | 2 | 3 | 4 | 5

export interface TechnicalSkills {
  startAbility: SelfRating
  accelerationAbility: SelfRating
  maxSpeedAbility: SelfRating
  lateRaceAbility: SelfRating
  videoAnalysis: boolean
}

// ========== 恢复能力 ==========

export interface RecoveryStatus {
  avgSleepHours: number
  sleepQuality: 1 | 2 | 3 | 4 | 5
  restingHeartRate: number
  subjectiveFatigue: 1 | 2 | 3 | 4 | 5
  stressLevel: 1 | 2 | 3 | 4 | 5
  recoveryFeeling: 'good' | 'normal' | 'poor'
}

// ========== 训练条件 ==========

export interface TrainingConditions {
  hasTrack: boolean
  hasGrass: boolean
  hasGym: boolean
  hasBarbell: boolean
  hasSquatRack: boolean
  hasResistanceBands: boolean
  hasSled: boolean
  hasPlyoBox: boolean
  hasMedicineBall: boolean
  hasOther: string
}

// ========== 目标 ==========

export type TrainingGoal =
  | 'improve_start' | 'improve_acceleration' | 'improve_max_speed'
  | 'improve_speed_endurance' | 'increase_strength' | 'reduce_injury_risk'
  | 'prepare_competition' | 'improve_technique'

// ========== 完整表单数据 ==========

export interface UserFormData {
  age: number
  gender: Gender
  height: number
  weight: number
  event: EventType
  currentBest: number
  targetTime: number
  planWeeks: number
  trainingDaysPerWeek: number
  experience: ExperienceLevel
  strengthCondition: StrengthCondition
  injuries: InjuryType[]
  bodyMeasurements: BodyMeasurements
  speedTests: SpeedTests
  powerTests: PowerTests
  strengthTests: StrengthTests
  flexibility: FlexibilityAssessment
  injuryRecords: InjuryRecord[]
  trainingBackground: TrainingBackground
  technicalSkills: TechnicalSkills
  recoveryStatus: RecoveryStatus
  trainingConditions: TrainingConditions
  goals: TrainingGoal[]
}

// ========== AI 输出 ==========

export interface AthleteProfile {
  bodyType: string
  speedPhase: string
  strengths: string[]
  weaknesses: string[]
  injuryRisks: string[]
  trainingRisks: string[]
}

export interface TrainingPriorities {
  maxSpeed: number
  acceleration: number
  strength: number
  power: number
  endurance: number
  technique: number
  recovery: number
  flexibility: number
}

export interface PhasePlan {
  phase: number
  weeks: string
  goal: string
  focus: string
  indicators: string[]
}

export interface TrainingPlan {
  athleteProfile: AthleteProfile
  trainingPriorities: TrainingPriorities
  analysis: string
  weeklyPlan: DayPlan[]
  roadmap: PhasePlan[]
  statsSummary: {
    speedSessions: number
    strengthSessions: number
    recoverySessions: number
  }
  riskAlerts: string[]
}

export interface DayPlan {
  dayOfWeek: string
  warmup: string
  mainTraining: string
  strengthTraining: string
  auxiliary: string
  recovery: string
  purpose: string
  notes: string
}

export interface TrainingLogEntry {
  id: string
  date: string
  dayOfWeek: string
  completed: boolean
  completionRate: number
  notes: string
  createdAt: string
}

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface DeepSeekRequest {
  model: string
  messages: ChatMessage[]
  temperature?: number
  max_tokens?: number
}

export interface DeepSeekResponse {
  choices: Array<{ message: { content: string } }>
}
