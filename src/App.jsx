import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routing/page-not-found/Home";
import NotFound from "./routing/page-not-found/NotFound";
import About from "./routing/page-not-found/About";

function App() {
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
