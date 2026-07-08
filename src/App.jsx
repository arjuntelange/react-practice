import { Routes, Route } from "react-router-dom";
import "./App.css";
import PasswordVerification from "./form-handling/PasswordVerification";

function App() {
  return (
    <>
      <div className="main-container">
        <PasswordVerification />
      </div>
    </>
  );
}

export default App;
