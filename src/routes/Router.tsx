import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from '../pages/Main/MainPage';
import LoginPage from '../pages/Login/LoginPage';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/login" exact component={LoginPage} />
      {/* <PrivateRoute path="/" exact component={MyPage} /> */}
    </Switch>
  );
};

export default Router;
