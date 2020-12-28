import { passwordSchema, confirmPasswordSchema } from 'src/commons/validation';
import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema,
});