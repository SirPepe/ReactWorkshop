import * as React from "react";
import * as ReactDOM from "react-dom";

export interface TodoFormProps {
  addItem: (title: string, details: string) => void
}

export default class TodoForm extends React.Component<TodoFormProps, {}> {
  onSubmit(evt: React.FormEvent){    
    var title = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["title"]).value;
    let details = ReactDOM.findDOMNode<HTMLTextAreaElement>(this.refs["details"]).value;
    evt.preventDefault();
    this.props.addItem(title, details);
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