import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginVerification from "./form-handling/LoginVerification";

function App() {
  return (
    <>
      <div className="main-container">
        <LoginVerification />
      </div>
    </>
  );
}

export default App;
