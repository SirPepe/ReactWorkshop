/*
  Hilfsfunktionen
*/


/*
  Store-Logger-Middleware. Diese Funktion klinkt sich in den Store ein und
  meldet sämtliche Änderungen.
*/
export const logger = (store) => (next) => (action) => {
  console.groupCollapsed("State-Änderung");
  console.info("Dispatching", action);
  let result = next(action);
  console.info("Neuer State", store.getState());
  console.groupEnd();
  return result;
};


/*
  Das folgende defininiert einen Class Decorator namens "@reduxify", der
  die Erstellung von Smart Components mit Klassen ermöglicht. Einfach verwenden
  und nicht weiter beachten :)
*/
import { connect } from "react-redux";
import { Dispatch, ActionCreator } from "redux";
interface MapStateToProps {
  (state: any, ownProps?: any): any;
}
export interface MapDispatchToPropsFunction {
  (dispatch: Dispatch, ownProps?: any): any;
}
export interface MapDispatchToPropsObject {
  [name: string]: ActionCreator;
}
export const reduxify = (mapStateToProps?: MapStateToProps,
  mapDispatchToProps?: MapDispatchToPropsFunction | MapDispatchToPropsObject) => {
  return target => connect(mapStateToProps, mapDispatchToProps)(target);
};