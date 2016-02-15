import * as React from "react";
import FilterComponent from "../components/TodoFilter";
import { reduxForm } from "redux-form";

@reduxForm({
  form: "filter",
  fields: ["state"],
  initialValues: {
    state: "all"
  }
})
export default class TodoFilter extends React.Component<any, {}> {
  render() {
    return (
      <FilterComponent { ...this.props } />
    );
  }
}