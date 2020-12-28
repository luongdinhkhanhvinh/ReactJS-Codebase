import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { CLEAR_USER_DATA } from 'src/redux/localUserData/localUserDataType';
import useAuth from './useAuth';

export const useLogOut = () => {
  const dispatch = useDispatch();
  const { provider } = useAuth();

  const signOut = useCallback(async () => {
    await provider.signOut();

    dispatch({ type: CLEAR_USER_DATA });
  }, [dispatch, provider]);

  return { signOut };
};
