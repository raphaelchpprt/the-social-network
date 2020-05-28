import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logIn } from "../redux";
import "./stylesheets/Header.css";

const Header = () => {
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const dispatch = useDispatch();

  const handleClick = ({ history }) => {
    Cookies.remove("token", "user");
    dispatch(logIn());
  };

  return (
    <header>
      <Link className="link-header" to="/">
        Home
      </Link>
      {loggedIn ? (
        <>
          <Link className="link-header" to="/profile">
            My Profile
          </Link>
          <Link className="link-header" to="/login" onClick={handleClick}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link className="link-header" to="/register">
            Register
          </Link>{" "}
          <Link className="link-header" to="/login">
            Login
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
