import React, { useState } from "react";

function StudentCourses() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [message, setMessage] = useState("");

  function verifyInfo(e) {
    e.preventDefault();

    if (!name) {
      setMessage("Name is required");
      return;
    }
    if (!course) {
      setMessage("Please select a course");
      return;
    }
    if (!accepted) {
      setMessage("Accepts terms and conditions");
      return;
    }
    setMessage("Registration Successful!");

    setName("");
    setCourse("");
    setAccepted(false);
  }

  return (
    <div>
      <form
        onSubmit={verifyInfo}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          Accept Terms
        </label>

        <button type="submit">Submit</button>
      </form>

      <h2>{message ? message : ""}</h2>
    </div>
  );
}

export default StudentCourses;
