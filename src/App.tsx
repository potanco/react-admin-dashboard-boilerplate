import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import CheckToken from './components/CheckToken';
import Sidebar from './components/Sidebar';
import { privateRoutes } from './PrivateRoutes';

function App() {
  const token = localStorage.getItem('token');
  return (
    <div>
      <BrowserRouter>
        {/* <CheckToken /> */}
        <Switch>
          {privateRoutes.map((el, i) => {
            return <PrivateRoute key={i} component={el.component} path={el.path} exact />;
          })}

          <Route path="/login" exact>
            <Login />
          </Route>
          {/* // redirect from all routes to login if token doesnt exist */}
          {!token && <Redirect from="/*" to="/login" />}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
