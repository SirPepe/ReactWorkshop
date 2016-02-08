import * as React from "react";
import { Item } from "./TodoApp";

export default class TodoStatus extends React.Component<{ items: Item[] }, void> {
  constructor(props){
    super(props);
  }
  render() {
    const open = this.props.items.filter(item => !item.done).length;
    return (
      <p className="status">
        { open }{ open === 1 ? " Eintrag" : " Einträge" }
      </p>
    );
  }
}