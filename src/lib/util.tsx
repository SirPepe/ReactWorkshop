/*
  Hilfsfunktionen
*/


/*
  Das folgende defininiert einen Class Decorator namens "@reduxify", der
  die Erstellung von Smart Components mit Klassen ermöglicht. Einfach verwenden
  und nicht weiter beachten :)
*/
import { connect } from "react-redux";
import { Store, Dispatch, ActionCreator } from "redux";
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
}