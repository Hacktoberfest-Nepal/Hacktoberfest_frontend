import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <TodoForm />
    </div>
  );
}

export default App;
