import { Box, Grid, Typography } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import EmailField from 'src/components/formikField/emailField';
import LayoutPublic from 'src/components/layoutPublic';
import Button from 'src/components/materialUI/components/button';
import { transKeys } from 'src/helpers/i18n';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerType';
import { RouteName } from 'src/routers/routeName';
import { resetPassword } from 'src/services/user/forgotPassword';
import { ForgotPasswordFormValue } from './types';
import { validationSchema } from './validation';

const initialValues: ForgotPasswordFormValue = {
  email: '',
};

const ForgotPassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const sendLink = (values: ForgotPasswordFormValue) => {
    dispatch({ type: SHOW_SPINNER });
    resetPassword(values.email)
      .then(() => {
        history.push({
          pathname: RouteName.FORGOT_PASSWORD_SUCCESS,
          state: { email: values.email },
        });
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        dispatch({ type: HIDE_SPINNER });
      });
  };

  return (
    <LayoutPublic documentTitle={t(transKeys.forgot_password)}>
      <Box textAlign='center'>
        <Box mb={4}>
          <Typography variant='h3'>{t(transKeys.forgot_your_password)}</Typography>
        </Box>

        <Box mb={2}>
          <Typography component='p'>{t(transKeys.forgot_password_message)}</Typography>
        </Box>

        <Formik<ForgotPasswordFormValue>
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={sendLink}
        >
          {() => (
            <Form>
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

              <Box textAlign='center' mt={4}>
                <Button color='secondary' variant='contained' type='submit'>
                  {t(transKeys.send_link)}
                </Button>

                <Box height={20} />

                <Button onClick={() => history.replace(RouteName.LOGIN)} variant='contained'>
                  {t(transKeys.cancel)}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </LayoutPublic>
  );
};

export default ForgotPassword;
