import React, { ReactElement } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import LandingPage from '../pages/Auth/Landing';
import LoginPage from '../pages/Auth/Login';
import SignUpPage from '../pages/Auth/SignUp';

function AuthNavigator(): ReactElement {
  return (
    <BrowserRouter>
      <li>
        <Link to="/">Landing</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">SignUP</Link>
      </li>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default AuthNavigator;
