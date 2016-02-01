import * as React from "react";
import { ItemList } from "./TodoApp";

export default class TodoStatus extends React.Component<ItemList, any> {
  constructor(props: ItemList){
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