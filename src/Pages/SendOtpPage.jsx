import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import netflixBackgroundImg from "../assets/netflix_background_img.jpg";
import { IoChevronForwardOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isEmailValid } from "../Helpers/regexMatcher";
import { sendOtp } from "../Redux/slice/authSlice";
import RegisterLayout from "../Layouts/RegisterLayout";

const SendOtpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
  });
  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmitButton = async (e) => {
    e.preventDefault();
    if (!userData.email) {
        return toast.error("Please enter the email", {autoClose: 3000});
    }
    if (!isEmailValid(userData.email)) {
     return toast.error("Please error correct email", {autoClose: 3000});
    }

    const response = await dispatch(sendOtp(userData));
    if (response?.payload?.success) {
      const userEmail = response.meta.arg.email;
      navigate("/verify/otp", {
        state: {
          userEmail,
        },
      });
      setUserData({
        email: "",
      });
    }
  };
  return (
    <RegisterLayout>
      <form
        noValidate
        onSubmit={handleSubmitButton}
        className=" absolute left-1/2 top-[65%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-5 mt-4"
      >
        <label htmlFor="email"></label>
        <input
          className=" bg-black text-white border border-white rounded-md py-4 pl-4 pr-2 w-96 outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          value={userData.email}
          onChange={handleUserInput}
        />
        <div className="bg-red-600 hover:bg-red-700 focus:outline-none text-white font-semibold flex items-center gap-0 justify-center rounded-xl py-2.5 px-7 cursor-pointer shadow-lg transition-all">
          <button className="text-2xl font-bold">Get Started</button>
          <IoChevronForwardOutline className="text-4xl" />
        </div>
      </form>
    </RegisterLayout>
  );
};

export default SendOtpPage;
