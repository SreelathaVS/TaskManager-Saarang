// src/TaskItem.js
import React, { useState } from "react";

const TaskItem = ({ task, editTask, deleteTask, toggleTaskCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [isSaveHovered, setIsSaveHovered] = useState(false);
  const [isCancelHovered, setIsCancelHovered] = useState(false);
  const [isEditHovered, setIsEditHovered] = useState(false);
  const [isDeleteHovered, setIsDeleteHovered] = useState(false);
  const [isToggleHovered, setIsToggleHovered] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, { title: newTitle });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewTitle(task.title);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            className="edit-form"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button
            onClick={handleSave}
            onMouseOver={() => setIsSaveHovered(true)}
            onMouseOut={() => setIsSaveHovered(false)}
          >
            <span
              style={{
                backgroundColor: isSaveHovered ? "green" : "transparent",
                color: isSaveHovered ? "white" : "black",
              }}
            >
              Save
            </span>
          </button>
          <button
            onClick={handleCancel}
            onMouseOver={() => setIsCancelHovered(true)}
            onMouseOut={() => setIsCancelHovered(false)}
          >
            <span
              style={{
                backgroundColor: isCancelHovered ? "black" : "transparent",
                color: isCancelHovered ? "white" : "black",
              }}
            >
              Cancel
            </span>
          </button>
        </>
      ) : (
        <>
          <span
            className="list-item"
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.title}
          </span>
          <button
            onClick={handleEdit}
            onMouseOver={() => setIsEditHovered(true)}
            onMouseOut={() => setIsEditHovered(false)}
          >
            <span
              style={{
                backgroundColor: isEditHovered ? "orange" : "transparent",
                color: isEditHovered ? "white" : "black",
              }}
            >
              Edit
            </span>
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            onMouseOver={() => setIsDeleteHovered(true)}
            onMouseOut={() => setIsDeleteHovered(false)}
          >
            <span
              style={{
                backgroundColor: isDeleteHovered ? "red" : "transparent",
                color: isDeleteHovered ? "white" : "black",
              }}
            >
              Delete
            </span>
          </button>
          <button
            onClick={() => toggleTaskCompletion(task.id)}
            onMouseOver={() => setIsToggleHovered(true)}
            onMouseOut={() => setIsToggleHovered(false)}
          >
            <span
              style={{
                backgroundColor: task.completed
                  ? isToggleHovered
                    ? "blue"
                    : "transparent"
                  : isToggleHovered
                  ? "green"
                  : "transparent",
                color: isToggleHovered ? "white" : "black",
              }}
            >
              {task.completed ? "Mark as Not Completed" : "Mark as Completed"}
            </span>
          </button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
