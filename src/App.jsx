import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routing/navigate-project/Home";
import Success from "./routing/navigate-project/Success";

function App() {
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
