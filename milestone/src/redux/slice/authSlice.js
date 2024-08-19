import { createSlice } from "@reduxjs/toolkit";

// Initial State
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

//! Generate Action
export const { loginAction, logout } = authSlice.actions;
//! Generate Reducer
const authReducer = authSlice.reducer;
export default authReducer;
