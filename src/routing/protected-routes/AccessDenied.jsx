import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function AccessDenied() {
  const navigate = useNavigate();

  return (
    <>
      <h2>🚫 Access Denied</h2>
      <p>Please login to access the dashboard.</p>
      <button onClick={() => navigate("/")}>LogIn</button>
    </>
  );
}

export default AccessDenied;
