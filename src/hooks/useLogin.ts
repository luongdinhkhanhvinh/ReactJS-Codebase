import { JwtSignInRequest, JwtSignInResponse } from '@devblock/react-auth/dist/providers/jwt/types';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { util } from 'src/helpers/utils';
import { RouteName } from 'src/routers/routeName';
import { UserStatus } from 'src/types/user';
import { HIDE_SPINNER, SHOW_SPINNER } from '../redux/spinner/spinnerType';
import useAuth from './useAuth';

export const useLogin = () => {
  const { provider } = useAuth();
  const dispatch = useDispatch();
  const history = useHistory();

  const onLoginSuccess = React.useCallback(async () => {
    history.replace(RouteName.HOME);
  }, [history]);

  const onLoginFailure = React.useCallback(
    (response: JwtSignInResponse) => {
      if (response.userStatus === UserStatus.UNVERIFIED) {
        const url = util.formatString(RouteName.SEND_VERIFICATION_EMAIL, { id: response.id });
        history.push(url);

        return;
      }

      toast.error(response.message);
    },
    [history],
  );

  const login = useCallback(
    async (email: string, password: string) => {
      dispatch({ type: SHOW_SPINNER });

      try {
        const request: JwtSignInRequest = { email, password };
        const response = await provider.signIn(request);

        if (response.token) {
          return onLoginSuccess();
        }

        return onLoginFailure(response);
      } catch (error) {
        toast.error(error.message);
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [provider, dispatch, onLoginFailure, onLoginSuccess],
  );

  return { login };
};
