/*
  Action creators können auch ganz einfach aufgebaut sein
*/
export const set = (state) => {
  return { type: "SET_FILTER", state };
};