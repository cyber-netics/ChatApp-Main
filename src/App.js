import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute } from "./Router";

import Home from "./Pages/Home";

const App = () => (
  <Router>
    <Switch>
      <PrivateRoute exact path={"/"} component={Home} />
    </Switch>
  </Router>
);

export default App;
