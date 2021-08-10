import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../pages/Main/MainPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" exact component={() => <div>login</div>} />
        {/* <PrivateRoute path="/" exact component={MyPage} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
