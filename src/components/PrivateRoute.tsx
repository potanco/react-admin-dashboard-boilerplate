import { Row } from 'antd';
import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import User from './User';

type props = {
  component: React.FC;
  path: string;
  exact: boolean;
};

const PrivateRoute: React.FC<props> = (props) => {
  if (localStorage.getItem('token')) {
    return (
      <>
        <User />
        <Row>
          <Sidebar />
          <Suspense fallback={<div>Loading...</div>}>
            <Route path={props.path} exact={props.exact} component={props.component} />;
          </Suspense>
        </Row>
      </>
    );
  }

  return <Redirect to="/login" />;
};

// PrivateRoute.propTypes = {
//   component: React.FC,
//   path: String,
//   exact: Boolean,
// };
export default PrivateRoute;
