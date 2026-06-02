// ========== 基础枚举类型 ==========

/** 短跑项目 */
export type EventType = '60m' | '100m' | '200m' | '400m'

/** 性别 */
export type Gender = 'male' | 'female'

/** 训练年限 */
export type ExperienceLevel = 'beginner' | '1-3years' | '3-5years' | '5years+'

/** 伤病类型 */
export type InjuryType =
  | 'none'
  | 'hamstring'      // 腘绳肌
  | 'knee'           // 膝盖
  | 'achilles'       // 跟腱
  | 'lowerback'      // 腰背

/** 力量条件 */
export type StrengthCondition = 'gym' | 'no-gym'

// ========== 表单数据 ==========

/** 用户填写的表单数据 */
export interface UserFormData {
  age: number
  gender: Gender
  height: number        // cm
  weight: number        // kg
  event: EventType
  currentBest: number   // 秒
  targetTime: number    // 秒
  planWeeks: number     // 计划周期（周）
  trainingDaysPerWeek: number  // 每周训练天数 3-7
  experience: ExperienceLevel
  strengthCondition: StrengthCondition
  injuries: InjuryType[]
}

// ========== 训练计划 ==========

/** 单天训练内容 */
export interface DayPlan {
  dayOfWeek: string         // 周一～周日
  warmup: string            // 热身
  mainTraining: string      // 主训练内容
  strengthTraining: string  // 力量训练
  auxiliary: string         // 辅助训练
  recovery: string          // 恢复放松
  purpose: string           // 训练目的
  notes: string             // 注意事项
}

/** AI 返回的完整训练计划 */
export interface TrainingPlan {
  analysis: string           // 运动员水平分析
  weeklyPlan: DayPlan[]      // 一周训练计划
  statsSummary: {
    speedSessions: number    // 速度训练次数
    strengthSessions: number // 力量训练次数
    recoverySessions: number // 恢复训练次数
  }
  riskAlerts: string[]       // 风险提醒列表
}

// ========== 训练日志 ==========

/** 单条训练日志 */
export interface TrainingLogEntry {
  id: string
  date: string               // ISO 日期 YYYY-MM-DD
  dayOfWeek: string          // 对应计划中的周几
  completed: boolean         // 是否完成
  completionRate: number     // 完成度 0-100
  notes: string              // 用户备注
  createdAt: string          // ISO 时间戳
}

// ========== API ==========

/** DeepSeek API 消息格式 */
export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

/** DeepSeek API 请求体 */
export interface DeepSeekRequest {
  model: string
  messages: ChatMessage[]
  temperature?: number
  max_tokens?: number
}

/** DeepSeek API 响应（简化） */
export interface DeepSeekResponse {
  choices: Array<{
    message: {
      content: string
    }
  }>
}
