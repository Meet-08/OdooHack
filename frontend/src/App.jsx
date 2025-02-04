import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import ReportPage from './pages/ReportPage'
import SchemePage from './pages/SchemePage'
import Register from './pages/Register'
import Login from './pages/Login'
import Initiative from './pages/Initiative'
import AuthProvider from './AuthContext/AuthProvider'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/initiative' element={<Initiative />} />
          <Route path='/schemes' element={<SchemePage />} />
          <Route path='/report' element={<ReportPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Toaster />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
