import React, { useState } from "react";
import RegisterLayout from "../Layouts/RegisterLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { verifyOtp } from "../Redux/slice/authSlice";
const VerifyOtpPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userEmail } = location.state || false;
  const [userOtp, setUserOtp] = useState({
    email: userEmail,
    otp: "",
  });
  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserOtp({
      ...userOtp,
      [name]: value,
    });
  };
  // Handle OTP input
  const handleSubmitButton = async (e) => {
    e.preventDefault();
    if (!userOtp.otp) {
      toast.error("Please enter your otp");
    }
    const response = await dispatch(verifyOtp(userOtp));
    if (response?.payload?.success) {
      const userEmail = response.meta.arg.email;
      navigate("/register", {
        state: {
          userEmail}
      });
      setUserOtp({
        email: "",
        otp: "",
      });
    }
  };

  return (
    <RegisterLayout>
      {userEmail && (
        <form
          noValidate
          onSubmit={handleSubmitButton}
          className="absolute top-[65%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-4 "
        >
          <label htmlFor="email"></label>
          <input
            className="hidden"
            readOnly
            type="email"
            id="email"
            name="email"
            value={userOtp.email}
          />
          <label htmlFor="otp"></label>
          <input
            className=" bg-black  text-white border border-white rounded-md py-4 pl-4 pr-2 w-96 outline-none"
            type="text"
            name="otp"
            placeholder="Please enter your otp"
            id="otp"
            onChange={handleUserInput}
            value={userOtp.otp}
          />
          <div className="bg-red-600 hover:bg-red-700 focus:outline-none text-white font-semibold flex items-center gap-0 justify-center rounded-xl py-2.5 px-7 cursor-pointer shadow-lg transition-all">
            <button className="text-2xl font-bold">Verify Otp</button>
          </div>
        </form>
      )}
    </RegisterLayout>
  );
};

export default VerifyOtpPage;
