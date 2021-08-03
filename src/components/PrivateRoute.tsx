import React from 'react';
import { Redirect, Route } from 'react-router-dom';

type props = {
  component: React.FC;
  path: string;
  exact: boolean;
};

const PrivateRoute: React.FC<props> = (props) => {
  if (localStorage.getItem('token')) {
    return <Route path={props.path} exact={props.exact} component={props.component} />;
  }

  return <Redirect to="/login" />;
};

// PrivateRoute.propTypes = {
//   component: React.FC,
//   path: String,
//   exact: Boolean,
// };
export default PrivateRoute;
