import { Box, Button, Grid } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import EmailField from 'src/components/formikField/emailField';
import PasswordField from 'src/components/formikField/passwordField';
import LayoutPublic from 'src/components/layoutPublic';
import { transKeys } from 'src/helpers/i18n';
import { useLogin } from 'src/hooks/useLogin';
import { RouteName } from 'src/routers/routeName';
import { LoginFormValue } from './types';
import { loginFormSchema } from './validation';

const loginFormInitValues: LoginFormValue = {
  email: '',
  password: '',
};

const Login = () => {
  const { login } = useLogin();
  const { t } = useTranslation();

  const onSubmit = React.useCallback(
    async (values: LoginFormValue) => {
      await login(values.email, values.password);
    },
    [login],
  );

  return (
    <LayoutPublic documentTitle={t(transKeys.login)} title={t(transKeys.welcome)}>
      <Formik<LoginFormValue>
        initialValues={loginFormInitValues}
        validationSchema={loginFormSchema}
        onSubmit={onSubmit}
        validateOnBlur={false}
      >
        {(formikProps) => {
          const { handleSubmit } = formikProps;

          return (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
            >
              <Grid container spacing={1}>
                <Grid item>
                  <Box mt={4}>
                    <EmailIcon />
                  </Box>
                </Grid>
                <Grid item xs>
                  <EmailField autoFocus />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item>
                  <Box mt={4}>
                    <LockOutlinedIcon />
                  </Box>
                </Grid>
                <Grid item xs>
                  <PasswordField />
                </Grid>
              </Grid>
              <Box textAlign='center' mt={3} mb={2}>
                <Link to={RouteName.FORGOT_PASSWORD}>{t(transKeys.forgot_password)}</Link>
              </Box>
              <Box textAlign='center'>
                <Button type='submit' variant='contained' color='primary'>
                  {t(transKeys.login)}
                </Button>
              </Box>
            </form>
          );
        }}
      </Formik>
    </LayoutPublic>
  );
};

export default Login;
