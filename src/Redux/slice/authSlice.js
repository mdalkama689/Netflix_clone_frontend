import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let loadingToast;
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
    const response = await axiosInstance.post("/auth/send/otp", data);
    // Display loading toast
    loadingToast = toast.error("Sending OTP. Please wait...");
    // Extract the necessary data from the response
    const responseData = response.data;
    // Display success toast
    toast.success(responseData.message, { autoClose: 2000 });
    if (toast.success) {
      toast.dismiss(loadingToast);
    }
    return responseData;
  } catch (error) {
    const errorMessage = error.response?.data?.message;
    toast.error(errorMessage);
  }
});

export const verifyOtp = createAsyncThunk("auth/verifyOtp", async (data) => {
  try {
    const response = await axiosInstance.post("/auth/verify/otp", data);
    loadingToast = toast.error("Verifying OTP. Please wait...");
    const responseData = response.data;
    toast.success(responseData.message, { autoClose: 2000 });
    if (toast.success) {
      toast.dismiss(loadingToast);
    }
    return responseData;
  } catch (error) {
    const errorMessage = error.response?.data?.message;
    toast.error(errorMessage);
    return { error: errorMessage };
  }
});

export const registerAccount = createAsyncThunk(
  "auth/register",
  async (data) => {
    try {
      const response = await axiosInstance.post("/auth/register", data);
      loadingToast = toast.error("Please wait, your account is being created.");
      const responseData = response.data;
      toast.success(responseData.message, { autoClose: 2000 });
      if (toast.success) {
        toast.dismiss(loadingToast);
      }
      return responseData;
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      toast.error(errorMessage);
      return { error: errorMessage };
    }
  }
);
export const signInAccount = createAsyncThunk("auth/singin", async (data) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    loadingToast = toast.error("Signing in. Please wait..");
    const responseData = response.data;
    toast.success(responseData.message, { autoClose: 2000 });
    if (toast.success) {
      toast.dismiss(loadingToast);
    }
    return responseData;
  } catch (error) {
    const errorMessage = error.response?.data?.message;
    toast.error(errorMessage);
    return { error: errorMessage };
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},extraReducers: (builder) => {
    builder.addCase(signInAccount.fulfilled, (state, action) => {
      if (action.payload) {
        localStorage.setItem("data", JSON.stringify(action.payload.userExists));
        localStorage.setItem("isLoggedIn", true); // Corrected key
        const role = action.payload.userExists.isAdmin ? "Admin" : "User";
        localStorage.setItem("role", role);
        state.isLoggedIn = true;
        state.role = action.payload.userExists.isAdmin;
        state.data = action.payload.userExists;
      }
    });
  }
  
});

export default authSlice.reducer;
