import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import ReportPage from './pages/ReportPage'
import SchemePage from './pages/SchemePage'
import Register from './pages/Register'
import Login from './pages/Login'
import Inititive from './pages/Inititive'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/inititive' element={<Inititive />} />
        <Route path='/schemes' element={<SchemePage />} />
        <Route path='/report' element={<ReportPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
