import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  
  if (localStorage.getItem("token")) {
    return (
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    );
  }

  return <Redirect to="/login" />;
};
export default PrivateRoute;
