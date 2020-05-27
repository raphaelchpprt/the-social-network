import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../redux";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { loggedIn, registeredUser } = useSelector((state) => ({
    loggedIn: state.login.loggedIn,
    registeredUser: state.registration.user,
  }));
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (user.username && user.email && user.password) {
      dispatch(register(user));
    }
  };

  return (
    <div className="register-container">
      <h1>Registration Page</h1>

      {loggedIn ? (
        <h2>Vous êtes connecté</h2>
      ) : (
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      )}
    </div>
  );
};
export default Register;
