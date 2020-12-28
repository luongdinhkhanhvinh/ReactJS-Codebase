export class RouteName {
  static readonly LOGIN = '/sign-in';
  static readonly SIGN_UP = '/sign-up';
  static readonly HOME = '/';
  static readonly SEND_VERIFICATION_EMAIL = '/verification-email';
  static readonly CHANGE_PASSWORD_FIRST_LOGIN = '/change-password';
  static readonly FORGOT_PASSWORD = '/forgot-password';
  static readonly FORGOT_PASSWORD_SUCCESS = '/forgot-password-success';
  static readonly RESET_PASSWORD = '/reset-password/:id/:code';
  static readonly RESET_PASSWORD_SUCCESS = '/update-password/success';
  static readonly ACCOUNT_SETTING = '/account-setting';
}
