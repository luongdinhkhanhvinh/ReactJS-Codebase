import { confirmPasswordSchema, passwordSchema } from 'src/commons/validation';
import { transKeys } from 'src/helpers/i18n';
import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  currentPassword: passwordSchema,
  password: passwordSchema.label(transKeys.new_password),
  confirmPassword: confirmPasswordSchema,
});
