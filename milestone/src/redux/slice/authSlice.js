import { createSlice } from "@reduxjs/toolkit";

// Initial State
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("authToken") || null,
  },

  //! Reducers
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
    },

    //! Logout
    logoutAction: (state, action) => {
      state.user = null;
    },
  },
});

//! Generate Action
export const { loginAction, logoutAction } = authSlice.actions;
//! Generate Reducer
const authReducer = authSlice.reducer;
export default authReducer;
