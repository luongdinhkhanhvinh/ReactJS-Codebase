import { InputProps } from '@material-ui/core';

export interface FormValues {
  firstName: string;
  lastName: string;
}

export interface InputFields extends InputProps {
  label: string;
  name: string;
}