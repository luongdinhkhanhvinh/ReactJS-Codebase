import { Box } from '@material-ui/core';
import { Formik } from 'formik';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PasswordField from 'src/components/formikField/passwordField';
import LayoutPublic from 'src/components/layoutPublic';
import Button from 'src/components/materialUI/components/button';
import { transKeys } from 'src/helpers/i18n';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerType';
import { RouteName } from 'src/routers/routeName';
import { updatePassword } from 'src/services/user/forgotPassword';
import { UpdatePasswordRequest } from 'src/types/user';
import { ResetPasswordForm } from './types';
import { validationSchema } from './validation';

const initialValues: ResetPasswordForm = {
  password: '',
  confirmPassword: '',
};

const ResetPassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { id, code } = useParams<{ id: string; code: string }>();
  const history = useHistory();

  const onSubmit = (values: ResetPasswordForm) => {
    dispatch({ type: SHOW_SPINNER });

    const updatePasswordRequest: UpdatePasswordRequest = {
      code,
      password: values.password,
    };

    updatePassword(id, updatePasswordRequest);

    try {
      history.push(RouteName.RESET_PASSWORD_SUCCESS);
    } catch (error) {
      toast.error(error.message);
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  };

  return (
    <LayoutPublic documentTitle={t(transKeys.reset_password)}>
      <Box textAlign='center'>
        <Formik<ResetPasswordForm>
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formikProps) => {
            const { handleSubmit } = formikProps;
            return (
              <>
                <PasswordField
                  name='password'
                  label={t(transKeys.enter_new_password)}
                  placeholder={t(transKeys.enter_new_password)}
                />

                <PasswordField
                  name='confirmPassword'
                  label={t(transKeys.confirm_your_password)}
                  placeholder={t(transKeys.confirm_your_password)}
                />

                <Box mt={4}>
                  <Button color='secondary' variant='contained' onClick={() => handleSubmit()}>
                    {t(transKeys.confirm)}
                  </Button>
                </Box>
              </>
            );
          }}
        </Formik>
      </Box>
    </LayoutPublic>
  );
};

export default ResetPassword;
