import React, { useState } from "react";
import "./TodoList.css"

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <div className="container">
      <h1>📝 Todo List</h1>

      <div className="input-section">
        <input
          onChange={(event) => {
            setTask(event.target.value);
          }}
          type="text"
          placeholder="Enter a task"
          value={task}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
