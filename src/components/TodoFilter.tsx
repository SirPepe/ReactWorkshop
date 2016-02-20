/*
  Diese Dumb Component kümmert sich um das Filter-ZU für Todo-Punkte. Sie ist
  per Redux-Form an den State angebunden, weiß darüber selbst aber nichts. Nur
  dass sie ein Formular ist, das die Props für seine diversen Felder unter
  this.props.fields["feldname"] findet, muss wie wissen...
*/

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