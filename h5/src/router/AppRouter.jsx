import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function AppRouter(props) {
  return (
    <Router>
      <Switch>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
