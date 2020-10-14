import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks }) => {
  return (
    <ul className="list-group flush my-5">
      {tasks.map((task, i) => (
        <TodoItem key={i} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
