import { ApiEndpoint } from 'src/commons/apiEndpoint';
import { axiosClient } from 'src/providers/authProvider';

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
}

export function signIn(request: SignInRequest): Promise<SignInResponse> {
  return axiosClient.post<any, SignInResponse>(ApiEndpoint.SIGN_IN, request);
}
