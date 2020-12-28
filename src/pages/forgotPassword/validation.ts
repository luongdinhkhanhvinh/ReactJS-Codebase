import { emailSchema } from 'src/commons/validation';
import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: emailSchema,
});
