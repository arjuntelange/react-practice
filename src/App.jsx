import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routing/mini-platform/pages/Home";
import About from "./routing/mini-platform/pages/About";
import Topics from "./routing/mini-platform/pages/Topics";
import Success from "./routing/mini-platform/pages/Success";
import Html from "./routing/mini-platform/pages/topics/Html";
import Css from "./routing/mini-platform/pages/topics/Css";
import Javascript from "./routing/mini-platform/pages/topics/Javascript";

function App() {
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/success" element={<Success />} />

          <Route path="/topics" element={<Topics />}>
            <Route path="html" element={<Html />} />
            <Route path="css" element={<Css />} />
            <Route path="javascript" element={<Javascript />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
