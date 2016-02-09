/*
  REDUCER-FUNKTIONEN beschreiben den State. Drei eiserne Regeln:
  1. Es gibt nur einen State. Reducer bearbeiten jeweils einen Teil dieses
     globalen State. Gefühlt setzt sich der globale State aus Sub-States
     zusammen, die durch die jeweiligen Reducer beschrieben werden.
  2. State ist Read-Only. Auf dem Store-Objekt werden über den Umweg von
     ACTION CREATORs verschiedene ACTIONS getriggert, die ihrerseits die
     Reducer auslösen
  3. Reducer sind PURE FUNCTIONS über einen State und eine Action. Sie erzeugen
     auf dem alten State und der Action ein neues State-Objekt, das den neuen
     Zustand des Sub-States beschreibt. Wichtig: Es wird immer ein neuer
     State aus dem alten State erzeugt, nie einfach der der alte State
     verändert
*/


/*
  Die einzelnen Reducer sollten der Übersicht halber auf einzelne Module
  verteilt werden. Die werden in diese Index-Datei importiert...
*/
import todoReducer from "./todo";


/*
  ... und mittels der combineReducers-Funktion von Redux zu einem großen
  Gesamt-Reducer kombiniert.
*/
import { combineReducers } from "redux";
export default combineReducers({
  items: todoReducer
});