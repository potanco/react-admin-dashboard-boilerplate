import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';

function App() {
  let token = localStorage.getItem('token');
  return (
    <>
      <BrowserRouter>
        {/* <CheckToken /> */}
        <Switch>
          <PrivateRoute component={Home} path="/" exact />

          <Route path="/login" exact>
            <Login />
          </Route>

          <PrivateRoute
            path="/logout"
            exact
            component={() => {
              // dispatch(logout(0));
              return <Redirect to="/"></Redirect>;
            }}
          />
          {!token && <Redirect from="/*" to="/login" />}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
