import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export async function getEmployees() {
  const url = "http://dummy.restapiexample.com/api/v1/employees";
  const url2 = "https://jsonplaceholder.typicode.com/todos/1";
  try {
    const employeesResponse = await axios.get(url);
    // console.log(111111111111, employeesResponse.data.data);
    return employeesResponse.data.data;
  } catch (err) {
    throw err;
  }
}

export const fetchEmployees = createAsyncThunk(
  "employees/fetch",
  async (_, thunkAPI) => {
    console.log("I am here", _.token);
    async () => {
      if (thunkAPI.getState().loading !== "pending") {
        return;
      }
    };
    const response = await getEmployees();
    return response;
  }
);
