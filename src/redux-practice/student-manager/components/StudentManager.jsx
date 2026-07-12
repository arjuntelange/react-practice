import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addStudent,
  clearAll,
  deleteStudent,
} from "../features/students/studentSlice";
import "../StudentManager.css"

function StudentManager() {
  const [studentName, setStudentName] = useState("");
  const dispatch = useDispatch();
  const students = useSelector((state) => state.studentsList.students);

  return (
    <>
      <div className="student-card">
        <h2>Students Manager</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter student name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(
                addStudent({
                  id: Date.now(),
                  name: studentName,
                }),
              );

              setStudentName("");
            }}
          >
            Add Student
          </button>
        </div>

        <p>Total Students: {students.length}</p>

        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          <ul className="student-list">
            {students.map((student) => (
              <li key={student.id} className="student-item">
                <span>{student.name}</span>

                <button onClick={() => dispatch(deleteStudent(student.id))}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}

        <button onClick={() => dispatch(clearAll())}>Clear All</button>
      </div>
    </>
  );
}

export default StudentManager;
