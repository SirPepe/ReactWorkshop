/*
  Willkommen in der Root-Komponente! Hier fängt alles an...
*/


/*
  In Redux (der Quasi-Flux-Variante für diesen Workshop) gibt es nur einen
  STORE. Spezielle Funktionen, genannt REDUCER, bearbeiten den darin
  abgebildeten State. Das Modul "./reducers/index" enthält einen Meta-Reducer,
  der aus allen Reducern in dieser App zusammengesetzt ist. Alle Reducer liegen
  im Verzeichnis "./reducers/". Zusätzlich zu Reducern kann man einem Store
  auch ENHANCER mitgeben, die z.B. Logging aktivieren.
*/
import { createStore, applyMiddleware } from "redux";
import { logger } from "./lib/util";
import reducers from "./reducers/index";
const store = createStore(
  reducers,                // Meta-Reducer
  applyMiddleware(logger)  // Logging-Middleware für Debugging
);


/*
  Änderungen am State erfolgen, indem ACTIONS an den Store dispatched werden.
  Die zuständigen REDUCER kümmern sich um die Umsetzung der State-Änderung.
  Per Konvention werden die Action-Objekte über die Aufrufe von Funktionen
  erzeugt, den soganannten ACTION CREATORS. (zu finden in "./actions/")
*/


/*
  Wichtig: wann immer eine externe Library eingebunden wird, müssen die
  entsprechenden Type Definition Files intalliert werden. Wird das mit
  dem tsd-Paketmanager gemacht, werden sie automatisch in das Projekt
  eingebunden. Type Definitions gibt es auf http://definitelytyped.org/
*/
import * as React from "react";
import * as ReactDOM from "react-dom";


/*
  Es gibt zwei Arten von Komponenten:
  1. DUMB COMPONENTS (auch Presentational Components)
     Dumb Components stellen Dinge dar und machen sonst wenig bis nichts. Sie
     bekommen "von oben" Daten und Callbacks zugereicht und bauen diese in
     JSX-Markup ein. Sie wissen nicht mal, dass sie in einer Redux-App
     existieren. Dumb Components liegen in "./components/". Die hier
     eingebundene App-Komponenten ist eine Dumb Component.
  2. SMART COMPONENTS (auch Container Components)
     Smart Components sind die Manager. Sie kommunizieren mit dem Store und
     übergeben Daten und Callbacks an die Dumb Components. Man kann sie sich
     als Logik-Wrapper um Dumb Components vorstellen. Alle Dumb Components
     liegen in "/.containers/"
  Die Unterschiede zwischen Smart und Dumb Components sind hier aufgeführt:
  http://rackt.org/redux/docs/basics/UsageWithReact.html#presentational-and-container-components
*/
import TodoApp from "./components/App";


/*
  Der Provider ist ein Tool, mit dem Redux den Store für alle Sub-Komponenten
  bereitstellt. Außer an dieser Stelle sollte er nie benötigt werden. Hier
  können weitere Module neben der Todo-Funktionalität eingebunden werden. Diese
  Root-Komponente ist nur für die ganz ganz grobe Struktur zuständig.
*/
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={ store }>
    <TodoApp />
  </Provider>,
  document.querySelector("#AppRoot")
);


/*
  Diese paar Zeilen erzeugen die drei Anfangs-Todo-Punkte
*/
import { add } from "./actions/todo";
store.dispatch(add("Learn React", "Learn about React and JSX"));
store.dispatch(add("Learn Redux", "Learn about Redux"));
store.dispatch(add("Build the App", "Create the prototype"));
/*
  Normalerweise würde man "store.dispatch()" nie direkt aufrufen (allein schon
  weil man nirgends sonst auf die Variable "store" Zugriff hat), aber hier
  geht es gerade nicht anders.
*/