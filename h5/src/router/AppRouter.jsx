import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Routes } from "./router.config";

import Login from "pages/Login/Login";
import AppLayout from "components/Layout/AppLayout";
import NotFound from "pages/NotFound/NotFound";
import LandingPage from "pages/LandingPage/LandingPage";
import Search from "pages/Search/Search";
import List from "pages/List/List";

export default function AppRouter(props) {
  return (
    <Router>
      <Switch>
        {Routes.map((route, index) => (
          <PrivateRoute key={index} exact path={route.path} isAuth={true}>
            <AppLayout content={<route.component />} />
          </PrivateRoute>
        ))}
        <Route exact path="/download">
          <LandingPage />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/list">
          <List />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
