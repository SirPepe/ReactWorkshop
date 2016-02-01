import * as React from "react";
import * as ReactDOM from "react-dom";
import TodoApp from "./TodoApp";

ReactDOM.render(
  <div>
    <h1>Epische Todo-Liste</h1>
    <TodoApp />
  </div>,
  document.querySelector('main')
);