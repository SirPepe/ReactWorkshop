/*
  Diese Smart Component kümmert sich um das Anzeigen von Todo-Punkten
*/

import * as React from "react";
import { reduxify } from '../lib/util';


/*
  Diese Funktion baut aus dem vorhandenen State das für die Dumb Components
  relevante Datenset zusammen. In diesem Fall besteht es aus allen Todo-Punkten
  sowie der "open"-Property, die die Anzahl der nicht-fertigen Items enthält
*/
const mapStateToProps = (state) => {
  const open = state.todoItems.filter(item => !item.done).length;
  return Object.assign({}, state, { open });
};


/*
  Zusammenbau der Callbacks für die Dumb Components
*/
import { toggle, remove } from '../actions/todo';
const mapDispatchToProps = (dispatch) => {
  return {
    toggleItem: (id: number) => {
      dispatch(toggle(id));
    },
    removeItem: (id: number) => {
      dispatch(remove(id));
    }
  }
}


/*
  Zusammenbau der Props mittels @reduxify und der Wrapper-Komponente
*/
import TodoList from "../components/TodoList";
import TodoStatus from "../components/TodoStatus";
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