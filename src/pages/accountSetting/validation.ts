import { firstNameSchema, lastNameSchema } from 'src/commons/validation';
import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
});