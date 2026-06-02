import { createContext, useContext, useReducer, type ReactNode, type Dispatch } from 'react'
import type { UserFormData, TrainingPlan, TrainingLogEntry } from '../types'

// ========== 全局状态类型 ==========

interface AppState {
  formData: UserFormData | null
  trainingPlan: TrainingPlan | null
  logs: TrainingLogEntry[]
  isLoading: boolean
  error: string | null
}

const initialState: AppState = {
  formData: null,
  trainingPlan: null,
  logs: [],
  isLoading: false,
  error: null,
}

// ========== Actions ==========

type AppAction =
  | { type: 'SET_FORM_DATA'; payload: UserFormData }
  | { type: 'SET_TRAINING_PLAN'; payload: TrainingPlan }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'ADD_LOG'; payload: TrainingLogEntry }
  | { type: 'UPDATE_LOG'; payload: TrainingLogEntry }
  | { type: 'DELETE_LOG'; payload: string }
  | { type: 'SET_LOGS'; payload: TrainingLogEntry[] }

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_FORM_DATA':
      return { ...state, formData: action.payload }
    case 'SET_TRAINING_PLAN':
      return { ...state, trainingPlan: action.payload }
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    case 'ADD_LOG':
      return { ...state, logs: [action.payload, ...state.logs] }
    case 'UPDATE_LOG':
      return {
        ...state,
        logs: state.logs.map((l) =>
          l.id === action.payload.id ? action.payload : l
        ),
      }
    case 'DELETE_LOG':
      return {
        ...state,
        logs: state.logs.filter((l) => l.id !== action.payload),
      }
    case 'SET_LOGS':
      return { ...state, logs: action.payload }
    default:
      return state
  }
}

// ========== Context ==========

interface AppContextType {
  state: AppState
  dispatch: Dispatch<AppAction>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

/** 使用 AppContext 的便捷 Hook */
export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext 必须在 AppProvider 内部使用')
  }
  return context
}
