const navReducer = (state = {}, action) => {
  switch (action.type) {
  case "MY_FIRST_ACTION":
    return { result: action.payload }

  default:
    return state;
  }
}

export default navReducer;
