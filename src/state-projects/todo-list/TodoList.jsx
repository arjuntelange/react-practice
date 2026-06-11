import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (!task.trim()) return;
    setTasks((prevTasks) => [...prevTasks, task]);
    setTask("");
  }

  function deleteTask(deleteIndex) {
    setTasks(tasks.filter((task, index) => index !== deleteIndex));
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
          <li key={index}>
            <span>{elem}</span>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>

      <div className="counter-box">
        <span className="tasks-counter">Total Tasks: {tasks.length}</span>
      </div>
    </div>
  );
}

export default TodoList;
