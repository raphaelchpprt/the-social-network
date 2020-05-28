import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { logIn } from "./redux";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import User from "./pages/User";

import Header from "./components/Header";

import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Cookies.get("token") && Cookies.get("user"))
      dispatch(logIn(JSON.parse(Cookies.get("user"))));
  }, []);

  const AuthRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={() =>
        loggedIn ? <Profile /> : <Redirect to={{ pathname: "/login" }} />
      }
    />
  );

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/user/:username" component={User} />
          <AuthRoute path="/profile" component={Profile} />
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
