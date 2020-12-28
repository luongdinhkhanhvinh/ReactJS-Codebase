import {
  confirmPasswordSchema,
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  passwordSchema,
} from 'src/commons/validation';
import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema,
});
