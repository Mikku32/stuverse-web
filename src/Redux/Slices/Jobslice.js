import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";

const initialState = {
  jobs: [],
  status: "idle",
};

export const getJobs = createAsyncThunk("jobs/getJobs", async ({ token }) => {
  const resp = await axiosClient.get("/job/posts/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return resp.data;
});

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.status = "success";
        state.jobs = action.payload;
      })
      .addCase(getJobs.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default jobSlice.reducer;
