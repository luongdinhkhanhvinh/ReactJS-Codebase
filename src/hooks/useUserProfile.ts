import { toast } from 'src/helpers/toast';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerType';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/types';
import { SET_USER_PROFILE, UserProfileState } from 'src/redux/userProfile/userProfileType';
import { getProfile } from 'src/services/user';
import useAuth from './useAuth';

const useUserProfile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector<RootState, UserProfileState>((state) => state.userProfileReducer);
  const { provider } = useAuth();

  const getData = useCallback(async () => {
    if (!provider.isSignedIn()) {
      return;
    }

    dispatch({ type: SHOW_SPINNER });
    try {
      const data = await getProfile();
      dispatch({ type: SET_USER_PROFILE, payload: data });
    } catch (error) {
      toast.error(error.message);
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  }, [dispatch, provider]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    data: userProfile,
    getData,
  };
};

export default useUserProfile;
