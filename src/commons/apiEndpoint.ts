export class ApiEndpoint {
  static readonly SIGN_UP = '/users/register';
  static readonly SIGN_IN = '/users/login';
  static readonly RENEW_TOKEN = '/users/renew-token';
  static readonly USER_PROFILE = '/users/me/profile';
  static readonly USER_CHANGE_PASSWORD = '/users/password';
  static readonly USER_RESEND_PASSWORD = '/users/resend-password/{id}';
  static readonly USER_CHANGE_PASSWORD_FIRST_LOGIN = '/users/password/verification/{id}';
  static readonly RESEND_VERIFICATION = '/users/resend-verification';
  static readonly USER_RESET_PASSWORD = '/users/reset-password';
  static readonly USER_UPDATE_PASSWORD = '/users/{id}/password';
  static readonly MY_PROFILE = '/my-profile';
  static readonly UPDATE_USER_SETTING = 'users/me/user-setting';
}
