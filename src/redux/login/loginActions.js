import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from "./loginTypes";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    error,
  };
};
