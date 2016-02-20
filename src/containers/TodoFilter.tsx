/*
  Dies ist die Smart Component bzw. der Container für das Filter-Select. Die
  Besonderheit: die Anbindung des Selects an den State ist durch redux-form
  automatisiert. Hierzu wird der Class Decorator @reduxForm auf die Smart
  Component angewendet und konfiguriert. Und schon entsteht wie durch Magie
  unter state.form.FormName.FeldName der jeweils eingegebene Wert.
*/
import * as React from "react";
import FilterComponent from "../components/TodoFilter";
import { reduxForm } from "redux-form";

@reduxForm({
  form: "filter",    // Form-Name und gleichzeitig State-Property
  fields: ["state"], // Liste der Felder
  initialValues: {   // State-Objekt mit diesen Werten Initialisieren
    state: "all"
  }
})
export default class TodoFilter extends React.Component<any, {}> {
  render() {
    return <FilterComponent { ...this.props } />;
  }
}