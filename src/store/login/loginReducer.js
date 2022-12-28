import { CHANGE_EMAIL, CHANGE_PASSWORD, intialState } from "./loginAction";

export const loginReducer = (state = intialState, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };

    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
