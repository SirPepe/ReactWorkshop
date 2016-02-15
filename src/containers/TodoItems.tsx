/*
  Diese Smart Component kümmert sich um das Anzeigen von Todo-Punkten
*/

import * as React from "react";
import { reduxify } from "../lib/util";


/*
  Diese Funktion baut aus dem vorhandenen State das für die Dumb Components
  relevante Datenset zusammen. In diesem Fall besteht es aus allen Todo-Punkten
  sowie der "open"-Property, die die Anzahl der nicht-fertigen Items enthält
*/
const mapStateToProps = (state) => {
  let filterItems = (item) => {
    switch(state.filter){
      case "all":
        return true;
      case "open":
        return item.done === false;
      case "done":
        return item.done === true;
    }
  };
  const numAll = state.todoItems.length;
  const todoItems = state.todoItems.filter(filterItems);
  const numDisplay = todoItems.length;
  return Object.assign({}, { todoItems}, { numAll, numDisplay });
};


/*
  Zusammenbau der Callbacks für die Dumb Components
*/
import { toggle, remove } from "../actions/todo";
const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    toggleItem: (id: number) => {
      dispatch(toggle(id));
    },
    removeItem: (id: number) => {
      dispatch(remove(id));
    }
  };
};


/*
  Zusammenbau der Props mittels @reduxify und der Wrapper-Komponente
*/
import TodoList from "../components/TodoList";
import TodoStatus from "../components/TodoStatus";
import TodoFilter from "./TodoFilter";
@reduxify(mapStateToProps, mapDispatchToProps)
export default class TodoItems extends React.Component<any, {}> {
  render() {
    return (
      <div>
        <TodoFilter />
        <TodoStatus { ...this.props } />
        <TodoList { ...this.props } />
      </div>
    );
  }
}