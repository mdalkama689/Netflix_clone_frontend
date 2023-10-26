import React from 'react'
import SendOtpPage from './Pages/SendOtpPage'
import { Routes, Route } from 'react-router-dom'
import RegisterLayout from './Layouts/RegisterLayout'
import VerifyOTPPage from './Pages/VerifyOtpPage'
const App = () => {
  return (
<Routes>
<Route path='/send/otp' element={<SendOtpPage/>} />
<Route path='/verify/otp' element={<VerifyOTPPage/>} />
</Routes>
  )
} 

export default App