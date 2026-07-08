import React, { useState } from "react";

function PasswordVerification() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      setMessage("Name is required");
      return;
    }

    if (!email) {
      setMessage("Email is required");
      return;
    }
    if (!password) {
      setMessage("Password is required");
      return;
    }
    if (password.length < 8) {
      setMessage("Password must be at least 8 characters");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Password not matching");
      return;
    }

    setMessage("Registration Successful!");

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setMessage("");
          }}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage("");
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setMessage("");
          }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setMessage("");
          }}
        />

        <button type="submit">Submit</button>
      </form>
      <h2>{message ? message : ""}</h2>
    </>
  );
}

export default PasswordVerification;
