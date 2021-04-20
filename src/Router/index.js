import { Redirect } from "react-router";
import { Route } from "react-router-dom";

import Layout from "../Layout";

export const PrivateRoute = (props) => {
  const Component = props.component;

  const auth = true;
  if (!auth) return <Redirect to="/login" />;

  return (
    <Route exact={props.exact} path={props.path}>
      <Layout>
        <Component />
      </Layout>
    </Route>
  );
};
