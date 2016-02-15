import * as React from "react";
import * as ReactDOM from "react-dom";


export interface TodoFilterProps extends React.Props<any> {
  setFilter: (filter: string) => void;
}

export default class TodoFilter extends React.Component<TodoFilterProps, {}> {
  handleChange(){
    this.props.setFilter(
      ReactDOM.findDOMNode<HTMLSelectElement>(this.refs["filter"]).value
    );
  }
  render() {
    return (
      <label>
        Anzeige filtern
        <select className="todoFilter" ref="filter" onChange={ this.handleChange.bind(this) }>
          <option value="all">Alle anzeigen</option>
          <option value="open">Nur offene</option>
          <option value="done">Nur abgeschlossene</option>
        </select>
      </label>
    );
  }
}