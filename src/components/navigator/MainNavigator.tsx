import React, { ReactElement } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import MainPage from '../pages/Main/Main';
import SubPage from '../pages/Main/Sub';
import SubPage2 from '../pages/Main/Sub2';

function MainNavigator(): ReactElement {
  return (
    <BrowserRouter>
      <li>
        <Link to="/">MainPage</Link>
      </li>
      <li>
        <Link to="/sub">SubPage</Link>
      </li>
      <li>
        <Link to="/sub2">SubPage2</Link>
      </li>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/sub" component={SubPage} />
        <Route exact path="/sub2" component={SubPage2} />
      </Switch>
    </BrowserRouter>
  );
}

export default MainNavigator;
