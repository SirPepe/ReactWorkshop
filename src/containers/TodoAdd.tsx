import * as React from "react";
import { reduxify } from "../lib/util";
import { add } from '../actions/todo';
import TodoForm from "../components/TodoForm";

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (title, details) => {
      dispatch(add(title, details));
    }
  }
}

@reduxify(null, mapDispatchToProps)
export default class AddTodo extends React.Component<any, {}> {
  render() {
    return (
      <TodoForm { ...this.props } />
    );
  }
}