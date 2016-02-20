/*
  Eine weitere klassische Dumb Component! Sie zeigt die Anzahl der angezeigtenm
  "Elemente" an und macht sonst nichts. Und da nicht weiter definiert ist, was
  ein "Element" ist, kann sie im Prizip auch für andere Dinge als Todo-Punkte
  verwendet werden (nur der Name ist dafür etwas unglücklich gewählt).
*/

import * as React from "react";

export interface TodoStatusProps extends React.Props<any> {
  numDisplay: number;
  numAll: number;
}

export default class TodoStatus extends React.Component<TodoStatusProps, {}> {
  getInflection(x: number){
    return (x === 1) ?  "Element" : "Elemente";
  }
  render() {
    const { numDisplay: num, numAll: all } = this.props;
    return (
      <p className="status">
        Zeige <b>{ num } { this.getInflection(num) } </b> von insgesamt { all }
      </p>
    );
  }
}