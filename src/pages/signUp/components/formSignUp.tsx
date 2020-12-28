import { Box } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import AdornmentTooltip from 'src/components/adornmentTooltip';
import EmailField from 'src/components/formikField/emailField';
import FormTextField from 'src/components/formikField/formTextField';
import PasswordField from 'src/components/formikField/passwordField';
import Button from 'src/components/materialUI/components/button';
import { transKeys } from 'src/helpers/i18n';
import useAuth from 'src/hooks/useAuth';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerType';
import { RouteName } from 'src/routers/routeName';
import useThemeStyles from 'src/themes/styles';
import useStyles from './style';
import { FormValues } from './types';
import { validationSchema } from './validation';

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const FormSignUp = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const themeClasses = useThemeStyles();
  const dispatch = useDispatch();
  const { provider } = useAuth();
  const history = useHistory();
  const [textFieldTooltip, setTextFieldTooltip] = React.useState<string[]>([]);

  const onSubmit = useCallback(
    async (values: FormValues) => {
      dispatch({ type: SHOW_SPINNER });
      try {
        const { id } = await provider.signUp(values);
        history.push(RouteName.SEND_VERIFICATION_EMAIL, { uid: id });
      } catch (error) {
        toast.error(error.message);
      } finally {
        dispatch({ type: HIDE_SPINNER });
      }
    },
    [dispatch, history, provider],
  );

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className={themeClasses.formWrapper}>
          <FormTextField
            label={t(transKeys.first_name)}
            name={'firstName'}
            InputProps={{
              endAdornment: (
                <AdornmentTooltip
                  open={textFieldTooltip.indexOf('firstName') !== -1}
                  title={t(transKeys.you_must_enter_first_name)}
                />
              ),
            }}
            onFocus={() => setTextFieldTooltip([...textFieldTooltip, 'firstName'])}
            onBlurCapture={() =>
              setTextFieldTooltip(textFieldTooltip.filter((item) => item !== 'firstName'))
            }
          />

          <FormTextField
            label={t(transKeys.last_name)}
            name={'lastName'}
            InputProps={{
              endAdornment: (
                <AdornmentTooltip
                  open={textFieldTooltip.indexOf('lastName') !== -1}
                  title={t(transKeys.you_must_enter_first_name)}
                />
              ),
            }}
            onFocus={() => setTextFieldTooltip([...textFieldTooltip, 'lastName'])}
            onBlurCapture={() =>
              setTextFieldTooltip(textFieldTooltip.filter((item) => item !== 'lastName'))
            }
          />

          <EmailField />

          <PasswordField id='password' name='password' label={t(transKeys.password)} />

          <PasswordField
            id='confirmPassword'
            name='confirmPassword'
            label={t(transKeys.confirm_password)}
          />

          <Box textAlign='center'>
            <Button type='submit' variant='contained' color='secondary' className={classes.submit}>
              {t(transKeys.done)}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default FormSignUp;
