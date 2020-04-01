import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import CompanyPage from "views/CompanyPage/CompanyPage.js";
import SettingsPage from "views/SettingsPage/SettingsPage.js";
import ScrollToTop from "./views/ScrollToTop";
import SignUpPage from "./views/LoginPage/SignUpPage";
import ClassPage from "./views/LandingPage/ClassPage.js";
import SearchPage from "./views/LandingPage/SearchPage";
import SearchResultsPage from "./views/LandingPage/SearchResults";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
      <ScrollToTop />
        <Switch>
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/search-page" component={SearchPage} />
            <Route path="/search-results-page" component={SearchResultsPage} />
            <Route path="/class-page/:course_id" component={ClassPage} />
            <Route path="/sign-up-page" component={SignUpPage} />
            <Route path="/profile-page" component={ProfilePage} />
            <Route path="/company-page" component={CompanyPage} />
            <Route path="/settings-page" component={SettingsPage} />
            <Route path="/component" component={Components} />
            <Route path="/" component={LoginPage} />
        </Switch>
  </Router>,
  document.getElementById("root")
);
