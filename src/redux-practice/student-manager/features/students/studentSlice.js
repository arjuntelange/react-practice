import { createSlice, current } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
  },
  reducers: {
    addStudent: (state, actions) => {
      state.students.push(actions.payload);
    },

    deleteStudent: (state, actions) => {
      state.students = state.students.filter(
        (currentElem) => currentElem.id != actions.payload,
      );
    },

    clearAll: (state) => {
      state.students = [];
    },
  },
});

export const { addStudent, deleteStudent, clearAll } = studentSlice.actions;
export default studentSlice.reducer;
