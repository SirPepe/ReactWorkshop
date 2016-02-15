export default (state: string = "all", action: any): string => {
  switch (action.type) {
    case "SET_FILTER":
      return action.state;
    default:
      return state;
  }
};