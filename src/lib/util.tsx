/*
  Diverse Hilfsfunktionen
*/


/*
  Store-Logger-Middleware. Diese Funktion klinkt sich in den Store ein und
  meldet sämtliche Änderungen am State in die Konsole.
*/
export const logger = (store) => (next) => (action) => {
  console.groupCollapsed(`${new Date()} State-Änderung`);
  console.info("Dispatching", action);
  let result = next(action);
  console.info("Neuer State", store.getState());
  console.groupEnd();
  return result;
};


/*
  Das Folgende defininiert einen Class Decorator namens "@reduxify", der
  die Erstellung von Smart Components mit Klassen ermöglicht. Einfach verwenden
  und nicht weiter beachten :)
*/
import { connect } from "react-redux";
import { Dispatch, ActionCreator } from "redux";
interface MapStateToProps {
  (state: any, ownProps?: any): any;
}
export interface MapDispatchToPropsFn {
  (dispatch: Dispatch, ownProps?: any): any;
}
export interface MapDispatchToPropsObj {
  [name: string]: ActionCreator;
}
export const reduxify = (mapStateToProps?: MapStateToProps,
  mapDispatchToProps?: MapDispatchToPropsFn | MapDispatchToPropsObj) => {
  return target => connect(mapStateToProps, mapDispatchToProps)(target);
};