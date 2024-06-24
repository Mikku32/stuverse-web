import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  user: null,
  status: "idle", //"loading","succeeded","failed"
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialstate,
  reducers: {},
});

export default authSlice.reducer;
