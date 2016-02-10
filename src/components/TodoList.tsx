import * as React from "react";
import TodoItem, { TodoItemProps } from "./TodoItem";

export interface TodoListProps extends React.Props<any> {
  todoItems: TodoItemProps[];
  toggleItem: (id: number) => void;
  removeItem: (id: number) => void;
}

export default class TodoList extends React.Component<TodoListProps, {}> { 
  render() {
    /*
      React besteht darauf, dass Elemente die in Arrays vorkommen ein
      HTML-Attribut namens "key" mit einem einzigartigen String haben. Aber
      kein Problem: im Fall der Fälle wird ein dicker roter Fehler in der
      Console auf fehlende Keys hinweisen
    */
    const itemNodes = this.props.todoItems.map(item => (
      <TodoItem
        key={ String(item.id) }
        toggleItem={ this.props.toggleItem }
        removeItem={ this.props.removeItem }
        { ...item }
      />
    ));
    return (<ul> { itemNodes } </ul>);
  }
}