/*
  Eine weitere klassische Dumb Component! Sie zeigt die Anzahl der "Einträge"
  an und macht sonst nichts. Und da nicht weiter definiert ist, was ein
  "Eintrag" ist, kann sie im Prizip auch für andere Dinge als Todo-Punkte
  verwendet werden (nur der Name ist dafür etwas unglücklich gewählt).
*/

import * as React from "react";

export interface TodoStatusProps extends React.Props<any> {
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