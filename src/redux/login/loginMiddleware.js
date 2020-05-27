import { loginRequest, loginSuccess, loginFailed } from "./loginActions";
import Cookies from "js-cookie";

export const logIn = (user) => {
  return (dispatch) => {
    dispatch(loginRequest(user));
    fetch("https://api-minireseausocial.mathis-dyk.fr/auth/local", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.jwt) {
          dispatch(loginSuccess(response.user));
          Cookies.set("token", response.jwt);
          Cookies.set("user", user);
        } else {
          dispatch(loginFailed(response.message));
        }
      })
      .catch((error) => console.log(error));
  };
};
