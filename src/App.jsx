import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./redux-practice/theme-toggle/ThemeToggle.css";
import { useSelector } from "react-redux";
import StudentManager from "./redux-practice/student-manager/components/StudentManager";

function App() {
  return (
    <>
      <div className="main-container">
        <StudentManager />
      </div>
    </>
  );
}

export default App;
