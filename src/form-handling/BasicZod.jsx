import React, { useState } from "react";
import { z } from "zod";

function BasicZod() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState("");

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  function handleSubmit(e) {
    e.preventDefault();

    const result = loginSchema.safeParse({
      email,
      password,
    });

    if (!result.success) {
      setMessages(result.error.issues[0].message);
      return;
    }

    setMessages("Login Successful!");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "8px 12px" }}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "8px 12px" }}
        />

        <button type="submit">Submit</button>
      </form>

      <h3>{messages}</h3>
    </>
  );
}

export default BasicZod;
