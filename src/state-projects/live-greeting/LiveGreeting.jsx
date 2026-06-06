import React, { useState } from "react";
import "./LiveGreeting.css";

function LiveGreeting() {
  const [inputName, setInputName] = useState("");
  const [displayName, setDisplayName] = useState("");

  function greet() {
    if (inputName.trim() === "") return;

    setDisplayName(inputName);
  }

  return (
    <div className="container">
      <input
        type="text"
        value={inputName}
        onChange={(event) => setInputName(event.target.value)}
        placeholder="Enter your name"
      />

      <button onClick={greet}>Greet</button>

      <h2>{displayName ? `Hello, ${displayName} 👋` : "Enter your name 😊"}</h2>
    </div>
  );
}

export default LiveGreeting;
