import React from "react";
import "./App.css";
import TaskManager from "./components/taskManager";

function App() {
  return (
    <div className="App">
      <h1>A To Do list with Hooks</h1>
      <TaskManager />
    </div>
  );
}

export default App;
