import React from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>This is Success page...</h2>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default Success;
