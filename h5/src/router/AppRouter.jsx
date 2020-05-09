import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Routes } from "./router.config";

import NotFound from "pages/NotFound/NotFound";

export default function AppRouter(props) {
  return (
    <Router>
      <Switch>
        {Routes.map((route, index) => (
          <Route key={index} exact path={route.path}>
            <route.component />
          </Route>
        ))}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
