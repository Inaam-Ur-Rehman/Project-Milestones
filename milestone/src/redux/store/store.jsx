import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Slices/users/usersSlice";

// Store
export const store = configureStore({
    reducer: {
        users: usersReducer
    },
});