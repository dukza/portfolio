import React from 'react';
import { Route } from 'react-router-dom';

const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;
  return (
    <Route
      {...rest}
      render={(props) => {
        return(
        <Layout {...props}>
          <Component  />
        </Layout>
      )
      }} >
      </Route>
  );
}

export default AppRoute;