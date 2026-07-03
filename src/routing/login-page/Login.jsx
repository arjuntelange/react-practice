import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div>
      <h2>Login to See Content🎯</h2>
      <form className="login-form">
        <input type="text" placeholder="Enter username" />
        <br />
        <input type="text" placeholder="Enter password" />
        <br />
        <button onClick={handleClick}>LogIn</button>
      </form>
    </div>
  );
}

export default Login;
