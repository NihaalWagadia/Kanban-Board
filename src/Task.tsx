import React, { useState } from "react";

export default function Task({ onAddTask }: { onAddTask: any }) {
  const [newTask, setNewTask] = useState("");
  const handleInputChange = (event: any) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = () => {
    if (newTask.trim() !== "") {
      onAddTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleSubmit}>
        Enter Task
      </button>
    </div>
  );
}
