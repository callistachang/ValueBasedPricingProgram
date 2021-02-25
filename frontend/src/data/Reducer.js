const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      window.localStorage.setItem("state", JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};

export default Reducer;
