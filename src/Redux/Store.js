import { configureStore } from '@reduxjs/toolkit'
import authSliceReducer from './slice/authSlice'
const Store = configureStore({
    reducer:{
        auth: authSliceReducer
    },
    devTools: true
})

export default Store