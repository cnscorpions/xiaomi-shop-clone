import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Routes } from "./router.config";

import AppLayout from "components/Layout/AppLayout";
import NotFound from "pages/NotFound/NotFound";

export default function AppRouter(props) {
  return (
    <Router>
      <Switch>
        {Routes.map((route, index) => (
          <PrivateRoute key={index} exact path={route.path} isAuth={true}>
            <AppLayout content={<route.component />} />
          </PrivateRoute>
        ))}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
