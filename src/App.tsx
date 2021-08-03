import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import CheckToken from './components/CheckToken';
import { privateRoutes } from './PrivateRoutes';
import { getToken } from './utils/localStorage';
import Home from './pages/Home';
import Users from './pages/Users';
import Template from './pages/Template';

function App(): JSX.Element {
  const token = getToken();
  // const r = privateRoutes.map((el, i) => {
  //   return <PrivateRoute key={i} component={el.component} exact path={el.path} />;
  // });
  return (
    <>
      <BrowserRouter>
        {/* <CheckToken /> */}
        <Switch>
          {/* {privateRoutes.map((el, i) => {
            return <PrivateRoute key={i} component={el.component} exact path={el.path} />;
          })} */}
          {/* <PrivateRoute component={Home} exact path={'/'} />
          <PrivateRoute component={Users} exact path={'/users'} /> */}
          {/* {r} */}
          <PrivateRoute component={Template} path={'/'} />

          <Route path="/login" exact>
            <Login />
          </Route>
          {/* redirect from all routes to login if token doesnt exist  */}
          {!token && <Redirect to="/login" />}
         
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
