import React from "react";
import { useLoaderData } from "react-router-dom";

function Students() {
  const students = useLoaderData();
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2>Students</h2>

      {students.map((student) => (
        <li key={student}>{student}</li>
      ))}
    </div>
  );
}

export default Students;
