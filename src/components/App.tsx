/*
  Eine klassische Dumb Component! Sie lädt andere Komponenten und macht sonst
  nicht viel. Sie weiß nicht mal, dass sie in einer Redux-App eingesetzt wird
  und ist somit im Prinzip portabel.
*/

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