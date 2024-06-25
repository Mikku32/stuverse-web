import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import Jobslice from "./Slices/Jobslice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    jobs: Jobslice,
  },
  devTools: true,
});
export default store;
