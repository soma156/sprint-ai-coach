import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ResultPage from './pages/ResultPage'
import LogPage from './pages/LogPage'
import StatsPage from './pages/StatsPage'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/log" element={<LogPage />} />
            <Route path="/stats" element={<StatsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
