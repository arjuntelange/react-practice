import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (!task.trim()) return;
    setTasks((prevTasks) => [...prevTasks, { text: task, completed: false }]);
    setTask("");
  }

  function deleteTask(deleteIndex) {
    setTasks(tasks.filter((task, index) => index !== deleteIndex));
  }

  function toggleTask(toggleIndex) {
    setTasks(
      tasks.map((elem, index) => {
        if (index === toggleIndex) {
          return { ...elem, completed: !elem.completed };
        }

        return elem;
      }),
    );
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  return (
    <div className="container">
      <h1>📝 Todo List</h1>

      <div className="input-section">
        <input
          onChange={(event) => {
            setTask(event.target.value);
          }}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Enter a task"
          value={task}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((elem, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={elem.completed}
              onChange={() => toggleTask(index)}
            />
            <span className={elem.completed ? "completed-task" : ""}>
              {elem.text}
            </span>
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
