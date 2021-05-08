import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { PrivateRoute, ProtectedRoute } from 'Router';
import Layout from 'Layout';

import Home from 'Pages/Home';
import Login from 'Pages/Auth/Login';
import Reset from 'Pages/Auth/ResetPass';

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

        <ProtectedRoute
          exact
          path={'/reset-password'}
          component={Reset}
        />
      </Switch>
    </Layout>
  </Router>
);

export default App;
