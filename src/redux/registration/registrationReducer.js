import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
} from "./registrationTypes";

const initialState = {
  registering: false,
  user: {},
  error: "",
};

const registration = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return { ...state, registering: true, user: action.user };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        registering: false,
        user: action.user,
      };
    case REGISTRATION_FAILED:
      return {
        ...state,
        registering: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default registration;
