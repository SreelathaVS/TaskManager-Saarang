import "./styles.css";
import React from "react";
import TaskManager from "./components/TaskManager";
export default function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>Task Manager</h1>
      </div>
      <TaskManager />
    </div>
  );
}
