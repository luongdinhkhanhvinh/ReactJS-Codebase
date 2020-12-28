import * as React from 'react';
import { Route } from 'react-router-dom';
import { Spinner } from 'src/components/spinner';
import { RouteProps } from './types';

export const BaseRoute = (props: RouteProps) => {
  const { path, componentPath, exact = true } = props;
  const ComponentRoute = React.useMemo(() => {
    return React.lazy(() => import(`src/${componentPath}`));
  }, [componentPath]);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        <React.Suspense fallback={<Spinner show={true} />}>
          <ComponentRoute />
        </React.Suspense>
      )}
    />
  );
};

export default BaseRoute;
