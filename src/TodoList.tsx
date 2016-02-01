import * as React from "react";
import TodoItem from "./TodoItem";
import { ItemList } from "./TodoApp";

export default class TodoList extends React.Component<ItemList, any> {
  constructor(props: ItemList){
    super(props);
  }
  render() {
    const itemNodes = this.props.items.map(item => <TodoItem { ...item } />);
    return <ul> { itemNodes } </ul>;
  }
}