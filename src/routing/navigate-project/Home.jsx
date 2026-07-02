import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    return navigate("/success");
  }

  return (
    <div>
      <h2>This is Home page...</h2>
      <button onClick={handleClick}>Register</button>
    </div>
  );
}

export default Home;
