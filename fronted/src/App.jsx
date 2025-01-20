import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import ReportPage from './pages/ReportPage'
import SchemePage from './pages/SchemePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/schemes' element={<ReportPage />} />
        <Route path='/report' element={<SchemePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
