import React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  return false ? (
    <Route {...props} />
  ) : (
    <Navigate to="/login" replace state={props} />
  );
};

export default PrivateRoute;
