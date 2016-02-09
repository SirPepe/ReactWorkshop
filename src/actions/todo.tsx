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