import { STORE_USER_DATA, CLEAR_USER_DATA } from './localUserDataType';

export interface StoreUserDataAction {
  type: typeof STORE_USER_DATA;
  payload: any;
}

export interface ClearUserDataAction {
  type: typeof CLEAR_USER_DATA;
}

export type LocalUserDataAction = StoreUserDataAction | ClearUserDataAction;
