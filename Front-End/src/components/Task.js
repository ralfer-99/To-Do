import React from "react";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <div class="task-card-content">

      <p>{task.description}</p>
      <button onClick={() => onDelete(task.id)}>Done</button>

      </div>
      
    </div>
  );
};

export default Task;