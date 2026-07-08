import { Routes, Route } from "react-router-dom";
import "./App.css";
import StudentCourses from "./form-handling/StudentCourses";

function App() {
  return (
    <>
      <div className="main-container">
        <StudentCourses />
      </div>
    </>
  );
}

export default App;
