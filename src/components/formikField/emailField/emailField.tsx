import { TextFieldProps } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { transKeys } from 'src/helpers/i18n';
import FormTextField from '../formTextField';

const EmailField = (props: TextFieldProps) => {
  const { t } = useTranslation();

  return (
    <FormTextField
      id='email'
      label={t(transKeys.email_address)}
      name='email'
      autoComplete='email'
      {...props}
    />
  );
};

export default EmailField;
