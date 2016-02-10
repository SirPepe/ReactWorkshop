/*
  Diese Dumb Component stellt das Formular für das Eintragen neuer Todo-Punkte
  bereit. Über Callbacks, die sie von einer Smart Component zugeliefert
  bekommt, gibt die Komponente Events wie z.B. das Absenden des Formulars
  weiter.
*/

import * as React from "react";
import * as ReactDOM from "react-dom";


/*
  Wenn man für die Props einer Komponente ein Interface definiert und dieses
  exportiert, können andere Komponenten bequem dieses Interface importieren
  und z.B. Listen Array<PropType>() bauen.
*/
export interface TodoFormProps extends React.Props<any> {
  addItem: (title: string, details: string) => void
}


/*
  Default export einer Dumb Component ist eine TS-Klasse mit dem Markup und der
  begrenzten lokalen Logik der Komponente.
*/
export default class TodoForm extends React.Component<TodoFormProps, {}> {
  /*
    Für Events kann es sich lohnen, einen Handler mit Validierungslogik o.Ä. in
    der Klasse selbst zu definieren. Dieser Handler ruft den als Prop
    bereitgestellten addItem-Callback auf - einen Fehlercallback, der in der
    Smart Component einen Fehler-State kontrolliert, könnte man nach dem
    gleichen Muster einsetzen
  */
  onSubmit(evt: React.FormEvent){    
    var title = ReactDOM
      .findDOMNode<HTMLInputElement>(this.refs["title"]).value;
    let details = ReactDOM
      .findDOMNode<HTMLTextAreaElement>(this.refs["details"]).value;
    evt.preventDefault();
    this.props.addItem(title, details); // Callback wird aufgerufen
  }
  render() {
    return (
      <section>
        <h2>Neuen Eintrag anlegen</h2>
        <form onSubmit={ this.onSubmit.bind(this) }>
          <input name="title" type="text" ref="title"
            placeholder="Aufgabe" required />
          <br />
          <textarea name="details" rows={3} cols={40}
            placeholder="Details..." ref="details"></textarea>
          <br />
          <button type="submit">Speichern</button>
        </form>
      </section>
    );
  }
}


/*
  Das ist ein sehr einfaches Formular, dessen Eingaben nicht direkt den State
  der App beeinflussen. Für komplexere Aufgaben könnte https://github.com/erikras/redux-form
  einen Blick wert sein.
*/