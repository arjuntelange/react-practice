import React, { useRef } from "react";
import { Form, useLoaderData } from "react-router-dom";

function StudentForm() {
  const students = useLoaderData();
  const formRef = useRef();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h2>Students LogIn</h2>
      <Form
        ref={formRef}
        method="post"
        style={{ display: "flex", gap: "20px", alignItems: "center" }}
        onSubmit={() => {
          setTimeout(() => formRef.current?.reset(), 0);
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          style={{
            padding: "12px 18px",
            border: "1px solid rgba(0, 0, 0, 0.4)",
            borderRadius: "14px",
          }}
        />

        <button type="submit">Add Student</button>
      </Form>

      {students.map((students) => (
        <li key={students}>{students}</li>
      ))}
    </div>
  );
}

export default StudentForm;
