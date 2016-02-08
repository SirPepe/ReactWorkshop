import * as React from "react";

export default class TodoForm extends React.Component<{}, void> {
  render() {
    return (
      <section>
        <h2>Neuen Eintrag anlegen</h2>
        <form>
          <input name="text" type="text"
            placeholder="Aufgabe" required />
          <br />
          <textarea name="details" rows={3} cols={40}
            placeholder="Details..."></textarea>
          <br />
          <button type="submit">Speichern</button>
        </form>
      </section>
    );
  }
}