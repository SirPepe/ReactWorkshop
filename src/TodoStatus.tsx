import * as React from "react";
import { ItemPropList } from "./TodoApp";

export default class TodoStatus extends React.Component<ItemPropList, any> {
  constructor(props: ItemPropList){
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