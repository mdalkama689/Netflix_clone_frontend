import React from "react";
import SendOtpPage from "./Pages/SendOtpPage";
import { Routes, Route } from "react-router-dom";
import RegisterLayout from "./Layouts/RegisterLayout";
import VerifyOTPPage from "./Pages/VerifyOtpPage";
import RegisterPage from "./Pages/RegisterPage";
import SignIn from "./Pages/SignIn";
const App = () => {
  return (
    <Routes>
      <Route path="/send/otp" element={<SendOtpPage />} />
      <Route path="/verify/otp" element={<VerifyOTPPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default App;
