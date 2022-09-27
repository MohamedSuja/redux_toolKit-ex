import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEmployees } from "./employeesAPI";

// Requesting all employees, with loading state, and only one request at a time

const initialState = {
  employees: [],
  loading: "idle",
  error: null,
};

export const fetchEmployees = createAsyncThunk(
  "employees/fetch",
  async (_, thunkAPI) => {
    async () => {
      if (thunkAPI.getState().loading !== "pending") {
        return;
      }
    };
    const response = await getEmployees();
    return response;
  }
);

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
