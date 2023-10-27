import React from "react";
import SendOtpPage from "./Pages/SendOtpPage";
import { Routes, Route } from "react-router-dom";
import VerifyOTPPage from "./Pages/VerifyOtpPage";
import RegisterPage from "./Pages/RegisterPage";
import SignIn from "./Pages/SignIn";
import RegisterLayout from "./Layouts/RegisterLayout";
import HomePage from "./Pages/HomePage";
import WatchPage from './Pages/WatchPage'
const App = () => {
  return (
    <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/movies" element={<HomePage type='movies' />} />
       <Route path="/series" element={<HomePage type='series' />} />
       <Route path="/watch" element={<WatchPage />} />
      <Route path="/send/otp" element={<SendOtpPage />} />
      <Route path="/verify/otp" element={<VerifyOTPPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/registerLayout" element={<RegisterLayout />} />
    </Routes>
  );
};

export default App;
