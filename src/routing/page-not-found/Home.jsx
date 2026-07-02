import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/about");
  }

  return (
    <>
      <h2>🏠Home Page🏠</h2>
      <button onClick={handleClick}>About</button>
    </>
  );
}

export default Home;
