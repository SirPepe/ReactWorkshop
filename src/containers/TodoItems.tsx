import * as React from "react";
import { reduxify } from '../lib/util';
import { toggle, remove } from '../actions/todo';
import TodoList from "../components/TodoList";
import TodoStatus from "../components/TodoStatus";

const mapStateToProps = (state) => {
  const open = state.items.filter(item => !item.done).length;
  return Object.assign({}, state, { open });
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleItem: (id) => {
      dispatch(toggle(id));
    },
    removeItem: (id) => {
      dispatch(remove(id));
    }
  }
}

@reduxify(mapStateToProps, mapDispatchToProps)
export default class TodoItems extends React.Component<any, {}> {
  render() {
    return (
      <div>
        <TodoStatus { ...this.props } />
        <TodoList { ...this.props } />
      </div>
    );
  }
}