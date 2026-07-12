import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/students/studentSlice";

const store = configureStore({
  reducer: {
    studentsList: studentReducer,
  },
});

export default store;
