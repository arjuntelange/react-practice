import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./routing/student-portal/Home";
import About from "./routing/student-portal/About";
import Contact from "./routing/student-portal/Contact";

function App() {
  const getActiveClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <>
      <div className="main-container">
        <nav>
          <NavLink to="/" className={getActiveClass}>
            Home
          </NavLink>
          {" | "}
          <NavLink to="/About" className={getActiveClass}>
            About
          </NavLink>
          {" | "}
          <NavLink to="/Contact" className={getActiveClass}>
            Contact
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
