/*
  Dieses Modul exportiert die ACTION CREATORS - einfache Funktionen, die
  Nachrichten für den Store konstruieren. Diese Nachrichten sind Objekte mit
  einer "type"-Eigenschaft und alle sonstigen relevanten Arguments.
*/

let todoId = 0

export const add = (title: string, details: string) => {
  return {
    type: 'ADD_TODO',
    id: todoId++,
    title,
    details
  };
};

export const toggle = (id: number) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export const remove = (id: number) => {
  return {
    type: 'REMOVE_TODO',
    id
  };
};