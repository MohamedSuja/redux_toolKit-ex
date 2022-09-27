import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import dataSlice from "./slice/dataSlice";
import employeesSlice from "./slice/employeesSlice";

import userSlice from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    counter: counterSlice,
    data: dataSlice,
    employees: employeesSlice,
  },
});
