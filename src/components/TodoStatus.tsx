import * as React from "react";

interface TodoStatusProps extends React.Props<any> {
  open: number
}

export default class TodoStatus extends React.Component<TodoStatusProps, {}> {
  render() {
    return (
      <p className="status">
        { this.props.open }{ this.props.open === 1 ? " Eintrag" : " Einträge" }
      </p>
    );
  }
}