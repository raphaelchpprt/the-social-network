import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../redux";

import { FaCheckCircle } from "react-icons/fa";

const Login = () => {
  const [inputs, setInputs] = useState({
    identifier: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { identifier, password } = inputs;
  const { loggingIn, loggedIn } = useSelector((state) => ({
    loggingIn: state.login.loggingIn,
    loggedIn: state.login.loggedIn,
  }));
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (identifier && password) {
      dispatch(logIn(inputs));
    }
  };

  return (
    <div className="login-container">
      <h1>LoginPage</h1>
      {loggedIn ? (
        <p>
          <FaCheckCircle
            style={{ color: "rgb(83, 197, 53)", fontSize: "30px" }}
          />
          <br />
          Vous êtes connecté{" "}
        </p>
      ) : (
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            name="identifier"
            value={inputs.identifier}
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      )}
    </div>
  );
};

export default Login;
