/*
  Und noch eine Dumb Component! Es ist ein bisschen mühsam, dass sie die
  Callbacks zum Löschen und Abhaken von Todo-Items durchleiten muss, aber
  das ist anders nicht zu machen (und wäre ohne TS-Boilerplate auch halb
  so schlimm)
*/

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
      React besteht darauf, dass Elemente, die in Listen vorkommen, ein
      HTML-Attribut namens "key" mit einem einzigartigen String als Wert haben.
      Aber kein Problem: im Fall der Fälle wird ein dicker roter Fehler in der
      Console auf fehlende Keys hinweisen.
    */
    const itemNodes = this.props.todoItems.map(item => (
      <TodoItem
        key={ String(item.id) }
        toggleItem={ this.props.toggleItem }
        removeItem={ this.props.removeItem }
        { ...item }
      />
    ));
    return (<ol className="todoList"> { itemNodes } </ol>);
  }
}