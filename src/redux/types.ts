import { LocalUserDataState } from './localUserData/localUserDataType';
import { RequestState } from './request/requestType';
import { SpinnerState } from './spinner/spinnerType';
import { UserProfileState } from './userProfile/userProfileType';

export interface RootState {
  requestReducer: RequestState;
  spinnerReducer: SpinnerState;

  localUserDataReducer: LocalUserDataState;
  userProfileReducer: UserProfileState;
}
