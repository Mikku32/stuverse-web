import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";

const initialState = {
  jobs: [],
  status: "idle",
  selectedJob: null,
};

export const getJobs = createAsyncThunk(
  "jobs/getJobs",
  async ({ token, search }) => {
    const resp = await axiosClient.get("/job/posts/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        search: search,
      },
    });
    return resp.data;
  }
);

export const getJobDetail = createAsyncThunk(
  "jobs/getJobDetail",
  async ({ token, id }) => {
    const resp = await axiosClient.get(`/job/posts/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return resp.data;
  }
);

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
      })
      .addCase(getJobDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getJobDetail.fulfilled, (state, action) => {
        state.status = "success";
        state.selectedJob = action.payload;
      })
      .addCase(getJobDetail.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default jobSlice.reducer;
