import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
} from "./registrationTypes";

export const registrationRequest = () => {
  return {
    type: REGISTRATION_REQUEST,
  };
};

export const registrationSuccess = (user) => {
  return {
    type: REGISTRATION_SUCCESS,
    user,
  };
};

export const registrationFailed = (error) => {
  return {
    type: REGISTRATION_FAILED,
    error,
  };
};
