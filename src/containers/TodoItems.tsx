/*
  Diese Smart Component kümmert sich um das Anzeigen von Todo-Punkten
*/

import * as React from "react";
import { reduxify } from "../lib/util";


/*
  Diese Funktion baut aus dem vorhandenen State das für die Dumb Components
  relevante Datenset zusammen. In diesem Fall besteht es aus den anzuzeigenden
  Todo-Punkten (gesteuert durch den aktuellen Wert des Filter-Felds) sowie
  der den Properties "numAll" und "numDisplay, die die Anzahl der vorhandenen
  und der angezeigten Elemente enthalten.
*/
import { TodoItemProps } from "../components/TodoItem";
const mapStateToProps = (state):
  { todoItems: TodoItemProps[], numAll: number, numDisplay: number } => {
  let filterItems = (item): boolean => {
    const filterSetting = state.form.filter.state.value;
    switch(filterSetting){
      case "open":
        return item.done === false;
      case "done":
        return item.done === true;
      case "all":
        return true;
      default:
        return true;
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
    toggleItem: (id: number) => dispatch(toggle(id)),
    removeItem: (id: number) => dispatch(remove(id))
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