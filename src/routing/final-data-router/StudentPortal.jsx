import React, { useRef } from "react";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

function StudentPortal() {
  const actionData = useActionData();
  const formRef = useRef();
  const students = useLoaderData();
  const navigation = useNavigation();
  
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

        <button type="submit" disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting"
            ? "Adding Student..."
            : "Add Student"}
        </button>
      </Form>

      {actionData && <p>{actionData.message}</p>}

      {students.map((student) => (
        <li key={student}>{student}</li>
      ))}
    </div>
  );
}

export default StudentPortal;
