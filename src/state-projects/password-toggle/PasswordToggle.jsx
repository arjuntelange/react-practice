import React, { useState } from "react";
import "./PasswordToggle.css";

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  function changeStatus() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="container">
      <input type={showPassword ? "text" : "password"} />
      <button onClick={changeStatus}>{showPassword ? "Hide" : "Show"}</button>
    </div>
  );
}

export default PasswordToggle;
