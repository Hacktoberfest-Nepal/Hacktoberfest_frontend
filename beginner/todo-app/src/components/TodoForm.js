import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };
  return (
    <div className="container bg-light py-4">
      <h2 className="text-center">Task Adder</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            id="task"
            className="form-control"
            value={taskInput}
            onChange={handleTaskInputChange}
          />
        </div>
        <button className="btn btn-primary" disabled={!taskInput}>
          Add Task
        </button>
      </form>
      {tasks.length === 0 ? (
        <p className="lead text-center text-danger my-5">
          No tasks. Please add some tasks.
        </p>
      ) : (
        <TodoList tasks={tasks} />
      )}
    </div>
  );
};

export default TodoForm;
