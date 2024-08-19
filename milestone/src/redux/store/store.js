import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";

//! Create Store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export default store;


