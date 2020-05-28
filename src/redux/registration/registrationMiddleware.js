import Cookies from "js-cookie";

import {
  registrationRequest,
  registrationSuccess,
  registrationFailed,
} from "./registrationActions";

import { loginSuccess } from "../login/loginActions";

export const register = (user) => {
  return (dispatch) => {
    const cookieUser = { identifier: user.email, password: user.password };
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
        console.log(response);
        if (response.jwt) {
          dispatch(registrationSuccess(response.user));
          dispatch(loginSuccess(response.user));
          Cookies.set("token", response.jwt);
          Cookies.set("user", cookieUser);
        } else {
          dispatch(registrationFailed(response.message));
        }
      })
      .catch((error) => console.log(error));
  };
};
