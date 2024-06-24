import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";

const initialstate = {
  user: null,
  status: "idle", //"loading","succeeded","failed"
};

export const loginWithEmailPassword = createAsyncThunk(
  "auth/loginWithEmailPassword",
  async (data) => {
    const resp = await axiosClient.post("/user/login/", data);
    return resp.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialstate,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginWithEmailPassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginWithEmailPassword.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(loginWithEmailPassword.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default authSlice.reducer;
