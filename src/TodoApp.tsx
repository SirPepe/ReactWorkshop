import * as React from "react";
import TodoStatus from "./TodoStatus";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

// BEGIN CRAP ============================================================

// Pseudo-unique ID-Generator
function id(){
  return Date.now() + '-' + Math.random()
}

// Todo-Datenobjekt
function Item(title, details, done, id){
  this.title = title;
  this.details = details;
  this.done = done;
  this.id = id;
  this.key = id; // React besteht drauf
}

// Statische Todo-Sammlung
var items = [
  new Item('Learn React', 'Learn about React', true, id()),
  new Item('Learn Flux', 'Learn about Flux', false, id()),
  new Item('Build app', 'Build the app', false, id())
];

// END CRAP ==============================================================

export interface ItemProp {
  done: boolean;
  title: string;
  details: string;
}

export interface ItemPropList {
  items: Array<ItemProp>;
}

export default class TodoApp extends React.Component<any, any> {
  render() {
    return (
      <section>
        <TodoStatus items={ items } />
        <TodoList items={ items } />
        <TodoForm />
      </section>
    );
  }
}