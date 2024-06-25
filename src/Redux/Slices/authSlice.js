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
  reducers: {
    loadUser: (state) => {
      const user = JSON.parse(localStorage.getItem("user")); //getting the user data from local storage and parsing it to json
      if (user) {
        state.user = user;
      }
      state.status = "success";
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginWithEmailPassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginWithEmailPassword.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload)); //storing the user data in local storage in user as a string
      })
      .addCase(loginWithEmailPassword.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { loadUser, logout } = authSlice.actions;
export default authSlice.reducer;
