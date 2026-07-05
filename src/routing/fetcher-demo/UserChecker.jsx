import React from "react";
import { useState } from "react";
import { Form, useFetcher } from "react-router-dom";

function UserChecker() {
  const [username, setUsername] = useState("");

  const fetcher = useFetcher();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Username"
        style={{
          padding: "10px 18px",
          fontSize: "18px",
          border: "none",
          borderRadius: "24px",
          background: "skyblue",
        }}
      />

      <button
        disabled={!username.trim()}
        onClick={() => {
          fetcher.load(`/check-username?username=${username}`);
        }}
      >
        Check Availability
      </button>

      {fetcher.data && (
        <p>
          {fetcher.data.available
            ? "✅ Username Available"
            : "❌ Username Already Taken"}
        </p>
      )}
    </div>
  );
}

export default UserChecker;
