import { IconButton, InputAdornment, TextFieldProps } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormTextField from '../formTextField';

const PasswordField = (props: TextFieldProps) => {
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const InputAdornmentPwd = (
    <InputAdornment position='end'>
      <IconButton
        onClick={handleClickShowPassword}
        aria-label='toggle password visibility'
        edge='end'
      >
        {!showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <FormTextField
      InputProps={{ endAdornment: InputAdornmentPwd }}
      name='password'
      label={t('Password')}
      type={showPassword ? 'text' : 'password'}
      autoComplete='current-password'
      {...props}
    />
  );
};

export default PasswordField;
