/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import AdminPage from "views/AdminPage/AdminPage.js";
import ShoppingCarPage from "views/ShoppingCarPage/ShoppingCar.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/shoppingCar" component={ShoppingCarPage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/admin-page" component={AdminPage} />
      <Route exact path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
