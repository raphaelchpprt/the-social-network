import Cookies from "js-cookie";

import {
  registrationRequest,
  registrationSuccess,
  registrationFailed,
} from "./registrationActions";

import { loginSuccess } from "../login/loginActions";

export const register = (user) => {
  return (dispatch) => {
    console.log(user);
    dispatch(registrationRequest(user));
    fetch("https://api-minireseausocial.mathis-dyk.fr/auth/local/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.jwt) {
          dispatch(registrationSuccess(user));
          dispatch(loginSuccess(user));
          Cookies.set("token", response.jwt);
          Cookies.set("user", user);
          console.log(response);
          console.log("success");
        } else {
          dispatch(registrationFailed(response.message));
          console.log(response);
          console.log("failed");
        }
      })
      .catch((error) => console.log(error));
  };
};
