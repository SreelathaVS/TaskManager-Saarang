// src/TaskManager.js
import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const editTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasks = tasks.filter((task) => task.completed);
  const notCompletedTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="task-manager">
      <TaskForm addTask={addTask} />
      <div className="task-sections">
        <div className="task-section">
          <h2>Not Completed Tasks</h2>
          <TaskList
            tasks={notCompletedTasks}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        </div>
        <div className="task-section">
          <h2>Completed Tasks</h2>
          <TaskList
            tasks={completedTasks}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
