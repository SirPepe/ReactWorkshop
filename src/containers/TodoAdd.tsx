/*
  Die Smart Component für das Hinzufügen neuer Todo-Punkte
*/

import * as React from "react";


/*
  Diese Smart Component ist ein Wrapper um die TodoForm-Komponente (higher
  order component), weswegen wir sie hier importieren müssen.
*/
import TodoForm from "../components/TodoForm";


/*
  Diese Smart Component setzt die Props für eine oder mehrere Dumb Components
  zusammen. Normalerweise entstehen diese Props in zwei Schritten:
  1. Aus dem State werden die für die Komponenten relevanten Daten extrahiert
     und ggf. aufbereitet.
  2. Für die Kommunikation von der Dumb Component zur Smart Component werden
     Callbacks erstellt, die via ACTION CREATORS mit dem Store sprechen.
  Eine spezielle Redux-Funktion fügt die Daten zu einem einzigen großen
  Prop-Objekt zusammen. Da das Formular keine Daten anzeigen muss, fällt hier
  nur Schritt 2 an.
*/


/*
  mapDispatchToProps() bekommt eine Dispatch-Funktion übergeben, mit der
  Actions an den Store gesendet werden können. mapDispatchToProps() gibt ein
  Objekt zurück, das Callbacks für die Dumb Component(s) enthält. Mithilfe
  der ACTION CREATORS, die wir aus "./actions/" laden, setzen wir diese
  Action-Objekte zusammen.
*/
import { add } from "../actions/todo";
const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    addItem: (title: string, details: string) => {
      dispatch(add(title, details));
    }
  };
};


/*
  Das Zusammenfügen der Prop-Bestandteile übernimmt in normalen Redux eine
  Funktion namens connect(). Da diese nicht so schön in die Klassen-Welt von
  TypeScript passt., gibt es einen Class Decorator (mögliches ESNext-Feature),
  der diesen Job übernimmt. Einfach aus der Util-Library importieren, über
  die Klasse schreiben und als Arguments die mapDispatchToProps()-Funktion
  und die Daten (sofern jeweils vorhanden) übergeben
*/
import { reduxify } from "../lib/util";
@reduxify(null, mapDispatchToProps)


/*
  Die exportierte Klasse ist ein einfacher Wrapper um die Dumb Component(s)
*/
export default class AddTodo extends React.Component<any, {}> {
  render() {
    return (
      <TodoForm { ...this.props } />
    );
  }
}