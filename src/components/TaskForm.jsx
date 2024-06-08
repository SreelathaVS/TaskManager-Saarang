// src/TaskForm.js
import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [isMouseOver, setIsMouseOver] = useState(false);
  function handleMouseOver() {
    setIsMouseOver(true);
  }
  function handleMouseOut() {
    setIsMouseOver(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addTask({ title });
      setTitle("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title - use max 55 charcters"
        required
      />
      <button
        className="submit-btn"
        type="submit"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <span
          style={{
            backgroundColor: isMouseOver && "black",
            color: isMouseOver && "white",
          }}
        >
          Add Task
        </span>
      </button>
    </form>
  );
};

export default TaskForm;
