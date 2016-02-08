import * as React from "react";
import TodoItem from "./TodoItem";
import { Item } from "./TodoApp";

export default class TodoList extends React.Component<{ items: Item[] }, void> {
  constructor(props){
    super(props);
  }
  render() {
    const itemNodes = this.props.items.map(item => <TodoItem { ...item } />);
    return <ul> { itemNodes } </ul>;
  }
}