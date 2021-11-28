import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from '../pages/Main/MainPage';
import LoginPage from '../pages/Login/LoginPage';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <PrivateRoute path="/" exact component={MyPage} /> */}
    </Routes>
  );
};

export default Router;
