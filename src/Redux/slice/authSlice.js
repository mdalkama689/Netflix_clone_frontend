import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import { toast } from "react-hot-toast";

const storedIsLoggedIn = localStorage.getItem("isloggedIn");
const storedRole = localStorage.getItem("role");
const storedData = localStorage.getItem("data");

const initialState = {
  isLoggedIn: storedData ? JSON.stringify(storedIsLoggedIn) : false,
  role: storedData || "",
  data: storedData ? JSON.stringify(storedData) : {},
};

export const sendOtp = createAsyncThunk("auth/sendOtp", async (data) => {
  try {
    const response = axiosInstance.post("/auth/send/otp", data);

    toast.promise(response, {
      loading: "Sending OTP. Please wait...",
      success: (data) => {
        return "Otp sent successfully";
      },
      error: "Failed sent Otp",
    });
    return (await response).data
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const verifyOtp = createAsyncThunk("auth/verify/otp", async (data) => {
  try {
    const response = await axiosInstance.post("/auth/verify/otp", data);
    const responseData = {
      success: response?.data?.success,
      message: response?.data?.message,
    };
    const responsePromise = new Promise((resolve) => resolve(responseData));
    toast.promise(responsePromise, {
      pending: "Verifying",
      success: (data) => {
        if (data.success) {
          return "OTP verification successfully";
        }
        return data.message;
      },
      error: "Failed to verify otp",
    });
    return responseData;
  } catch (error) {
    console.log(error.message);
    toast.error(error.message);
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //     builder.addCase()
  // }
});

export default authSlice.reducer;
