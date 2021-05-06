import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { PrivateRoute, ProtectedRoute } from 'Router';

import Home from 'Pages/Home';
import Login from 'Pages/Login';
import Layout from 'Layout';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <PrivateRoute
          exact
          path={'/'}
          component={Home}
        />
        
        <ProtectedRoute
          exact
          path={'/login'}
          component={Login}
        />
      </Switch>
    </Layout>
  </Router>
);

export default App;
