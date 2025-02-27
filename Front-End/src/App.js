import React, { useState, useEffect } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const handleAddTask = async (task) => {
    if (!task.title.trim()) return; 

    try {
      const response = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error("Failed to add task to database");
      }

      const newTask = await response.json();
      setTasks([newTask, ...tasks]); 
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete task from database");
      }

      setTasks(tasks.filter((task) => task.id !== id)); 
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="app">
      <div className="left-panel">
        <h1>Add a Task</h1>
        <TaskForm onSubmit={handleAddTask} />
      </div>

      <div className="right-panel">
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">No tasks available.</p>
          ) : (
            tasks.map((task) => (
              <Task key={task.id} task={task} onDelete={handleDeleteTask} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
