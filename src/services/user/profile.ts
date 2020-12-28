import { identity, pickBy } from 'lodash';
import { ApiEndpoint } from 'src/commons/apiEndpoint';
import { axiosClient } from 'src/providers/authProvider';
import { UpdateUserSettingRequest, UserProfile } from 'src/types/user';

export interface UserProfileResponse extends UserProfile {}

export function getProfile(): Promise<UserProfileResponse> {
  return axiosClient.get<any, UserProfileResponse>(ApiEndpoint.USER_PROFILE);
}

export function updateUserSetting(request: UpdateUserSettingRequest): Promise<any> {
  const body = pickBy(request, identity);
  
  return axiosClient.put<any, any>(ApiEndpoint.UPDATE_USER_SETTING, body);
}

