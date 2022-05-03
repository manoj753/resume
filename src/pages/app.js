import { Redirect, Router } from '@reach/router';
import React, { memo } from 'react';
import PrivateRoute from '../components/router/PrivateRoute';
import Wrapper from '../components/shared/Wrapper';
import NotFound from './404';
import Builder from './app/builder';
import Dashboard from './app/dashboard';
import Account from './app/account';
import Payment from './app/payment';

const App = () => (
  <Wrapper>
    <Router>
      <Redirect noThrow from="/app" to="/app/dashboard" exact />
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <PrivateRoute path="/app/account" component={Account} />
      <PrivateRoute path="/app/builder/:id" component={Builder} />
      <PrivateRoute path="/app/payment/:id" component={Payment} />
      <NotFound default />
    </Router>
  </Wrapper>
);
export default memo(App);
