import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/userReducer";
import departmentReducer from "./store/departmentReducer";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    departmentReducer: departmentReducer
  },
})