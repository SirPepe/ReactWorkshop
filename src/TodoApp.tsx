import * as React from "react";
import { createStore } from "redux";
import TodoStatus from "./TodoStatus";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export class Item {
  constructor(public title: string, public details:string, public done:boolean, public key:number){}
}


// BEGIN CRAP ============================================================

// Pseudo-unique ID-Generator
function id(){
  return Date.now() + Math.floor(Math.random() * (100000 - 1 + 1) + 1);
}

// Statische Todo-Sammlung
var state = {
  items: [
    new Item('Learn React', 'Learn about React', true, id()),
    new Item('Learn Flux', 'Learn about Flux', false, id()),
    new Item('Build app', 'Build the app', false, id())
  ]
};

// END CRAP ==============================================================



const todoReducer = (state: { items: Item[] } = { items: [] }, action) => {
  switch (action.type) {
  case 'add':
    return null;
  case 'remove':
    return null;
  default:
    return state
  }
}

const todoStore = createStore(todoReducer);

export default class TodoApp extends React.Component<{}, void> {
  render() {
    return (
      <section>
        <TodoStatus items={ state.items } />
        <TodoList items={ state.items } />
        <TodoForm />
      </section>
    );
  }
}