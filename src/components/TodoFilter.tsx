import * as React from "react";

export interface TodoFilterProps extends React.Props<any> {
  fields: String[];
}

export default class TodoFilter extends React.Component<TodoFilterProps, {}> {
  render() {
    return (
      <label>
        Anzeige filtern
        <select className="todoFilter" { ...this.props.fields["state"] }>
          <option value="all">Alle anzeigen</option>
          <option value="open">Nur offene</option>
          <option value="done">Nur abgeschlossene</option>
        </select>
      </label>
    );
  }
}