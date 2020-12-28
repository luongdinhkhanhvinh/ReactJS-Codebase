import * as React from 'react';
import { Route } from 'react-router-dom';
import NotFound from 'src/pages/404';

export const NotFoundRoute = () => {
  return <Route component={NotFound} />;
};
