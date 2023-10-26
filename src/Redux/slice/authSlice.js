import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import { toast } from "react-hot-toast";
import { json } from "react-router-dom";

const storedIsLoggedIn = localStorage.getItem("isloggedIn") || false;
const storedRole = localStorage.getItem("role") || "";
const storedData = localStorage.getItem("data") || "";
console.log(
  `login : ${storedIsLoggedIn} and role : ${storedRole} and data : ${storedData}`
);
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
        return data?.data?.message;
      },
      error: "Failed to sent Otp",
    });
    return (await response).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const verifyOtp = createAsyncThunk("auth/verifyOtp", async (data) => {
  try {
    const response = axiosInstance.post("/auth/verify/otp", data);
    toast.promise(response, {
      loading: "Verifying OTP...",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Please enter correct otp",
    });

    return (await response).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const registerAccount = createAsyncThunk(
  "auth/register",
  async (data) => {
    try {
      const response = axiosInstance.post("/auth/register", data);
      toast.promise(response, {
        loading: "Please wait while we create your account...",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to create your account. Please try again later",
      });
      return (await response).data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);
export const signInAccount = createAsyncThunk('auth/singin', async(data) => {
  try {
    const response = axiosInstance.post('/auth/login', data)
    toast.promise(response, {
      loading: 'Logging in... Please wait.',
      success: (data) => {
        return data?.data?.message
      },
      error: 'Login failed. Please check your credentials and try again.'
    })
    return (await response)
  } catch (error) {
    toast.error(error?.response?.data?.message)
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signInAccount.fulfilled, (state, action) => {
      console.log(`action : ${action}`);
      localStorage.setItem("data", JSON.stringify(action?.payload?.user));
      localStorage.setItem("isloggedIn", true);
      localStorage.setItem("role", action?.payload?.user?.isAdmin);
      state.isLoggedIn = true;
      state.role = action?.payload?.user?.isAdmin;
      state.data = action?.payload?.user;
    });
  },
});

export default authSlice.reducer;
