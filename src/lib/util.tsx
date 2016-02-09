/*

*/

import { connect } from 'react-redux';
import { Store, Dispatch, ActionCreator } from 'redux';

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