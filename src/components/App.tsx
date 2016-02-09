import * as React from "react";
import TodoItems from "../containers/TodoItems";
import TodoAdd from "../containers/TodoAdd";

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <TodoItems />
        <TodoAdd />
      </div>
    );
  }
}