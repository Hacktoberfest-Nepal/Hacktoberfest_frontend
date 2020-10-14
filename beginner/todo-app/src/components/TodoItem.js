import React, { useState } from "react";

const TodoItem = ({ id, task }) => {
  const [completed, setCompleted] = useState(false);
  const toggleMarkComplete = () => {
    setCompleted(!completed);
  };

  return (
    <li className="list-group-item d-block">
      <h2 style={{ textDecoration: completed ? "line-through" : "none" }}>
        {task}
      </h2>
      <button
        className="btn btn-outline-success mr-2"
        onClick={toggleMarkComplete}
      >
        {completed ? "Mark Uncompleted" : "Mark Completed"}
      </button>
    </li>
  );
};

export default TodoItem;
