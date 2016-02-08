import * as React from "react";
import { Item } from "./TodoApp";

export default class TodoItem extends React.Component<Item, void> {
  constructor(props: Item){
    super(props);
  }
  render() {
    return (
      <li data-done= { this.props.done } >
        <h2>
          <input checked={ this.props.done }
            type="checkbox" />
          <span> { this.props.title }</span>
        </h2>
        <span className="delete">
          [ <a>Löschen</a> ]
        </span>
        <p className="details"> { this.props.details } </p>
      </li>
    );
  }
}