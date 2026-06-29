import React, { useOptimistic, useState } from "react";

function UseOptimistic() {
  const [tasks, setTasks] = useState([]);

  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    tasks,
    (currentTasks, newTask) => {
      return [...currentTasks, newTask];
    },
  );

  async function addTask(formData) {
    const task = formData.get("task");

    if (!task.trim()) {
      return;
    }

    addOptimisticTask(task);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    setTasks((prevTasks) => [...prevTasks, task]);
  }

  return (
    <>
      <h2>useOptimistic Demo</h2>

      <form action={addTask}>
        <input type="text" name="task" placeholder="Enter Task" />

        <button>Add</button>
      </form>

      <ul>
        {optimisticTasks.map((currentTask, index) => (
          <li key={index}>{currentTask}</li>
        ))}
      </ul>
    </>
  );
}

export default UseOptimistic;
