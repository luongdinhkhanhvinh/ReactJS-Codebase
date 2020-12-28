import * as React from 'react';
import { Redirect } from 'react-router-dom';
import BaseRoute from './baseRoute';
import { RouteProps } from './types';
import { RouteName } from './routeName';
import useAuthContext from 'src/hooks/useAuth';
import useTokenClearedCheckingInterval from 'src/hooks/useTokenClearedCheckingInterval';
import { useLogOut } from 'src/hooks/useLogOut';
import { toast } from 'src/helpers/toast';
import { useTranslation } from 'react-i18next';

export const AuthenticatedRoute = (props: RouteProps) => {
  const authContext = useAuthContext();
  const { t } = useTranslation();
  const { signOut } = useLogOut();

  const handleSignout = () => {
    toast.error(t('Your session has expired. Please login again'));
    signOut();
  };

  useTokenClearedCheckingInterval({
    authProvider: authContext,
    onTokenCleared: handleSignout,
  });

  if (!authContext.provider.isSignedIn()) {
    return <Redirect to={{ pathname: RouteName.LOGIN }} />;
  }

  return <BaseRoute {...props} />;
};

export default AuthenticatedRoute;
