import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <h2>🚧Page Not Found🚧</h2>

      <button onClick={handleClick}>Back to Home</button>
    </>
  );
}

export default NotFound;
