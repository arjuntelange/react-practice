import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import SearchFilter from "./hooks-practice/SearchFilter";
import PostComment from "./state-projects/comment-post/PostComment";
import Home from "./routing/student-portal/Home";
import About from "./routing/student-portal/About";
import Contact from "./routing/student-portal/Contact";

function App() {
  return (
    <>
      <div className="main-container">
        <nav>
          <Link to="/">Home</Link>{" | "}
          <Link to="/About">About</Link>{" | "}
          <Link to="/Contact">Contact</Link>
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
