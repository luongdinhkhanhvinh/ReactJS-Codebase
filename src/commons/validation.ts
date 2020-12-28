import { transKeys } from 'src/helpers/i18n';
import * as yup from 'yup';
import { Constant } from './constant';

export const passwordSchema = yup
  .string()
  .label('Password')
  .matches(/.*[A-Z]/, ({ label }) => `${label} ${transKeys.validate_password_required_uppercase}`)
  .matches(/.*[a-z]/, ({ label }) => `${label} ${transKeys.validate_password_required_lowercase}`)
  .matches(/.*\d/, ({ label }) => `${label} ${transKeys.validate_password_required_number}`)
  .matches(
    /.*[-_!@#$%^&*.,?]/,
    ({ label }) => `${label} ${transKeys.validate_password_required_special}`,
  )
  .min(8, ({ label }) => `${label} ${transKeys.validate_password_min_length}`)
  .max(20, ({ label }) => `${label} ${transKeys.validate_password_max_length}`)
  .required(({ label }) => `${label} ${transKeys.validate_password_required}`);

export const confirmPasswordSchema = yup
  .string()
  .oneOf([yup.ref('password')], transKeys.validate_password_not_match)
  .required(transKeys.validate_comfirm_password_required);

export const firstNameSchema = yup
  .string()
  .matches(Constant.NAME_FIELD_PATTERN, transKeys.validate_first_name_general)
  .min(2, transKeys.validate_first_name_min_length)
  .max(20, transKeys.validate_first_name_max_length)
  .required(transKeys.validate_first_name_required);

export const lastNameSchema = yup
  .string()
  .matches(Constant.NAME_FIELD_PATTERN, transKeys.validate_last_name_general)
  .min(2, transKeys.validate_last_name_min_length)
  .max(20, transKeys.validate_last_name_max_length)
  .required(transKeys.validate_last_name_required);

export const emailSchema = yup
  .string()
  .email(transKeys.validate_email_invalid)
  .required(transKeys.validate_email_required);
