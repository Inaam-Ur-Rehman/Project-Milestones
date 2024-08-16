import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//Initial State
const initialState = {
  users: [],
  loading: false,
  error: null,
  user: {},
  profile: {},
  userAuth: {
    loading: false,
    error: null,
    userInfo: {},
  },
};

//Login User
export const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }, { rejectWithValue, getState, dispatch }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/users/login",
        { email, password },
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    //Login User
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.userAuth.loading = true;
    });

    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.userAuth.loading = false;
      state.userAuth.userInfo = action.payload;
    });

    builder.addCase(loginUserAction.rejectWithValue, (state, action) => {
      state.userAuth.loading = false;
      state.userAuth.error = action.payload;
    });
  },
});

const userReducer = usersSlice.reducer;
export default userReducer;
