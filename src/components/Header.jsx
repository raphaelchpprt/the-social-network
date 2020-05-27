import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logIn } from "../redux";

const Header = () => {
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const dispatch = useDispatch();

  const handleClick = ({ history }) => {
    Cookies.remove("token", "user");
    dispatch(logIn());
  };

  return (
    <header>
      <Link to="/">Home</Link>{" "}
      {loggedIn ? (
        <>
          <Link to="/profile">My Profile</Link>{" "}
          <Link to="/login" onClick={handleClick}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link> <Link to="/login">Login</Link>
        </>
      )}
    </header>
  );
};

export default Header;
