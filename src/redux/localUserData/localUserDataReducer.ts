import { LocalUserDataAction } from './localUserDataAction';
import { CLEAR_USER_DATA, LocalUserDataState, STORE_USER_DATA } from './localUserDataType';

const initialState = null;

export function localUserDataReducer(
  state: LocalUserDataState = initialState,
  action: LocalUserDataAction,
): LocalUserDataState {
  switch (action.type) {
    case STORE_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case CLEAR_USER_DATA:
      return null;

    default:
      return state;
  }
}
