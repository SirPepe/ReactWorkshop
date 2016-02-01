import * as React from "react";
import TodoItem from "./TodoItem";
import { ItemPropList } from "./TodoApp";

export default class TodoList extends React.Component<ItemPropList, any> {
  constructor(props: ItemPropList){
    super(props);
  }
  render() {
    const itemNodes = this.props.items.map(item => <TodoItem { ...item } />);
    return <ul> { itemNodes } </ul>;
  }
}