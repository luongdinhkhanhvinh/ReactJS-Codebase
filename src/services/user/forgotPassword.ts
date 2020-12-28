import { ApiEndpoint } from 'src/commons/apiEndpoint';

import { UpdatePasswordRequest } from 'src/types/user';
import { util } from 'src/helpers/utils';
import { axiosClient } from 'src/providers/authProvider';
import { UpdatePasswordResponse } from '@devblock/react-auth/dist/core/types';

export function resetPassword(email: string): Promise<UpdatePasswordResponse> {
  return axiosClient.post<any, UpdatePasswordResponse>(ApiEndpoint.USER_RESET_PASSWORD, { email });
}

export function updatePassword(
  id: string,
  request: UpdatePasswordRequest,
): Promise<UpdatePasswordResponse> {

  const endpoint = util.formatString(ApiEndpoint.USER_UPDATE_PASSWORD, { id });
  
  return axiosClient.patch<UpdatePasswordRequest, UpdatePasswordResponse>(endpoint, {
    code: request.code,
    password: request.password,
  });
}
