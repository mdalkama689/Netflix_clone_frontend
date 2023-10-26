import React, { useState } from "react";
import RegisterLayout from "../Layouts/RegisterLayout";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInAccount } from "../Redux/slice/authSlice";
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  const handleSubmitButton = async (e) => {
    e.preventDefault();
    if (!userDetails.email || !userDetails.password) {
      toast.error("All fiels are required");
    }
    const response = await dispatch(signInAccount(userDetails));
    if (response) {
      navigate("/");
    }
  };
  return (
    <RegisterLayout showContent={false}>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-12 rounded-2xl">
        <h1 className="text-white text-2xl text-center font-medium tracking-widest">
          Login your account
        </h1>
        <form
          noValidate
          onSubmit={handleSubmitButton}
          className="mt-5 flex flex-col"
        >
          <label htmlFor="email"></label>
          <input
            className=" bg-black text-white border border-white rounded-md py-4 pl-4 pr-2 w-96 outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            value={userDetails.email}
            onChange={handleUserInput}
          />

          <br />
          <label htmlFor="password"></label>
          <input
            className=" bg-black text-white border border-white rounded-md py-4 pl-4 pr-2 w-96 outline-none"
            type="text"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={userDetails.password}
            onChange={handleUserInput}
          />
          <div className="bg-red-600 mt-5 hover:bg-red-700 focus:outline-none text-white font-semibold flex items-center gap-0 justify-center rounded-xl py-2.5 px-7 cursor-pointer shadow-lg transition-all">
            <button className="text-2xl font-bold">Login</button>
          </div>
        </form>
      </div>
    </RegisterLayout>
  );
};

export default SignIn;
