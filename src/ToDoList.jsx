import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // ✅ update state when typing
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  // ✅ add a new task
  function AddTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  // ✅ delete a task
  function DeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  // ✅ move task up
  function moveTaskUp(index) {
    if (index > 0) {
      setTasks((prev) => {
        const updated = [...prev];
        [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]]; // swap
        return updated;
      });
    }
  }

  // ✅ move task down
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      setTasks((prev) => {
        const updated = [...prev];
        [updated[index + 1], updated[index]] = [updated[index], updated[index + 1]]; // swap
        return updated;
      });
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          placeholder="Enter a task..."
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={AddTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => DeleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
