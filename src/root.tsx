/*

*/
import { createStore } from 'redux'
import reducers from "./reducers/index";
const store = createStore(reducers);


/*
  ÄNDERUNGEN AM STORE erfolgen, indem ACTIONS an den Store dispatched werden.
  Die zuständigen REDUCER kümmern sich um die Umsetzung der State-Änderung.
  Per Konvention werden die Action-Objekte über die Aufrufe von Funktionen
  erzeugt, den soganannten ACTION CREATORS. (zu finden in /actions)
  Diese paar Zeilen erzeugen die drei Anfangs-Todo-Punkte
*/
import { add } from './actions/todo';
store.dispatch(add("Learn React", "Learn about React and JSX"));
store.dispatch(add("Learn Redux", "Learn about Redux"));
store.dispatch(add("Build the App", "Create the prototype"));


/*

*/
import * as React from "react";
import * as ReactDOM from "react-dom";


/*

*/
import TodoApp from "./components/App";


/*

*/
import { Provider } from 'react-redux';
ReactDOM.render(
  <Provider store={ store }>
    <TodoApp />
  </Provider>,
  document.querySelector('#AppRoot')
);