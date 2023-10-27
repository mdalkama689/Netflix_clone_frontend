import React from "react";
import netflixBackgroundImg from "../assets/netflix_background_img.jpg";
import { Link } from "react-router-dom";
const RegisterLayout = ({ children }) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div>
        <div className="relative">
          <img
            src={netflixBackgroundImg}
            alt="Background Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="absolute top-0 flex items-center justify-between w-screen py-3 px-32">
          <h1 className="text-4xl text-red-600 font-semibold tracking-widest">
            NETFLIX
          </h1>
          <div className="flex items-center justify-center gap-6">
            <h3 className="text-white border border-white px-3 rounded-lg">
              English
            </h3>
            <Link to="/signin" className="bg-red-600 cursor-pointer hover:bg-red-700 focus:outline-none text-white font-semibold py-2 px-5 rounded-lg shadow-lg transition-all" >
              <button >
                Sign In
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <div>
              <h1 className=" text-center p-4 text-white text-[45px] font-black ">
                Enjoy big movies, hit series and more from ₹ 149.
              </h1>
              <h3 className=" text-white leading-tight text-center text-2xl font-medium -mt-5  ">
                Join today. Cancel anytime.
              </h3>
            </div>
            <div>
              <p className="text-white text-center mt-3 text-2xl font-semibold">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default RegisterLayout;
