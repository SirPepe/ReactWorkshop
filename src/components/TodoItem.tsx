/*
  Eine weitere Dumb Component, diesmal für das Anzeigen eines
  Todo-Punkts.
*/
import * as React from "react";

export interface TodoItemProps extends React.Props<any> {
  title: string;
  details: string;
  done: boolean;
  id: number;
  toggleItem: (id: number) => void;
  removeItem: (id: number) => void;
}

/*
  Hier ist die Handhabung der Callbacks einfacher als beim Formular: da keine
  Daten extrahiert oder validiert werden müssen, reicht es, die Callbacks via
  Arrow Function direkt im Event auszulösen.
*/
export default class TodoItem extends React.Component<TodoItemProps, {}> {
  render() {
    return (
      <li data-done= { this.props.done }>
        <h2>
          <label>
            <input checked={ this.props.done }
              onChange={ evt => this.props.toggleItem(this.props.id) }
              type="checkbox" />
            <span>{ this.props.title }</span>
          </label>
        </h2>
        <span className="delete"
          onClick={ evt => this.props.removeItem(this.props.id) }>
          [ <a>Löschen</a> ]
        </span>
        <p className="details"> { this.props.details } </p>
      </li>
    );
  }
}