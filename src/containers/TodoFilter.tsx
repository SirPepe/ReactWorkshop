import * as React from "react";
import FilterComponent from "../components/TodoFilter";
import { set } from "../actions/filter";

const mapDispatchToProps = (dispatch: Redux.Dispatch) => {
  return {
    setFilter: (state: string) => {
      dispatch(set(state));
    }
  };
};

import { reduxify } from "../lib/util";
@reduxify(null, mapDispatchToProps)
export default class TodoFilter extends React.Component<any, {}> {
  render() {
    return (
      <FilterComponent { ...this.props } />
    );
  }
}