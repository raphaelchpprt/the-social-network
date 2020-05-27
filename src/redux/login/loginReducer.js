import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from "./loginTypes";

const initialState = {
  loggingIn: false,
  loggedIn: false,
  user: {},
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loggingIn: true, user: action.user };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        user: action.user,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        user: {},
        error: action.error,
      };
    default:
      return state;
  }
};

export default loginReducer;
