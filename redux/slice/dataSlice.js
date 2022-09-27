import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk(
  "users/getUsers",
  async (dispatch, getState) => {
    return await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
      (res) => res.json()
    );
  }
);

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const dataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.status = "loading";
    },
    [getData.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    [getData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default dataSlice.reducer;
