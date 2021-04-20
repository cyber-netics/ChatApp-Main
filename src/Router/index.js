import { Redirect } from "react-router";
import { Route } from "react-router-dom";

import Layout from "../Layout";

export const PrivateRoute = (props) => {
  const auth = true;
  const Component = props.component;

  if (!auth) return <Redirect to="/login" />;
  return (
    <Route exact={props.exact} path={props.path}>
      <Layout>
        <Component />
      </Layout>
    </Route>
  );
};
