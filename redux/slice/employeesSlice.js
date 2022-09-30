import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchEmployees } from "../thunk/employeesThunk";

// Requesting all employees, with loading state, and only one request at a time

const initialState = {
  employees: [],
  loading: "idle",
  error: null,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
        }
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.error = action.error.message || null;
        }
      });
  },
});

export default employeesSlice.reducer;
