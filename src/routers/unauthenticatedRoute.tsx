import * as React from 'react';
import BaseRoute from './baseRoute';
import { RouteProps } from './types';

export const UnauthenticatedRoute = (props: RouteProps) => {
  return <BaseRoute {...props} />;
};

export default UnauthenticatedRoute;
