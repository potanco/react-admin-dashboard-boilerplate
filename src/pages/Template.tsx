import React, { Suspense } from 'react';
import Sidebar from '../components/Sidebar';
import User from '../components/User';
import { Row } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { privateRoutes } from '../PrivateRoutes';
import { Spin } from 'antd';

const Template = (): JSX.Element => {
  return (
    <>
      <User />
      <Row>
        <Sidebar />
        <Suspense fallback={<Spin style={{position: "absolute", top: "50%", left: "50%"}} />}>
          <Switch>
            {privateRoutes.map((privateRoute, idx) => {
              return (
                privateRoute.component && (
                  <Route
                    key={idx}
                    path={privateRoute.path}
                    exact
                    render={(props: any) => <privateRoute.component {...props} />}
                  />
                )
              );
            })}
          </Switch>
        </Suspense>
      </Row>
    </>
  );
};

export default Template;
