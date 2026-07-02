import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/success");
  };

  return (
    <>
      <h2>Welcome to SkillStack</h2>
      <button onClick={handleClick}>Start Learning</button>
      <nav>
        <NavLink to="/about">About</NavLink>
        {" | "}
        <NavLink to="/topics">Topics</NavLink>
      </nav>
    </>
  );
}

export default Home;
