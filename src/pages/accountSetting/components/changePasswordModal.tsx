import { Box, Button, Dialog, DialogContent, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Form, Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PasswordField from 'src/components/formikField/passwordField';
import { transKeys } from 'src/helpers/i18n';
import useUserProfile from 'src/hooks/useUserProfile';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerType';
import { updateUserSetting } from 'src/services/user';
import { UpdateUserSettingRequest } from 'src/types/user';
import { ChangePasswordModalProps, ChangePasswordValues, PasswordFieldsType } from './types';
import { validationSchema } from './validation';

const ChangePasswordModal = (props: ChangePasswordModalProps) => {
  const { open, onClose } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data: userProfile } = useUserProfile();

  const handleClose = () => {
    onClose();
  };

  const initialValues: ChangePasswordValues = {
    currentPassword: '',
    password: '',
    confirmPassword: '',
  };

  const passwordFields: PasswordFieldsType[] = [
    { name: 'currentPassword', label: transKeys.password },
    { name: 'password', label: transKeys.new_password },
    { name: 'confirmPassword', label: transKeys.confirm_password },
  ];

  const onSubmit = async (values: ChangePasswordValues) => {
    dispatch({ type: SHOW_SPINNER });
    try {
      const changePasswordRequest: UpdateUserSettingRequest = {
        firstName: userProfile?.firstName || '',
        lastName: userProfile?.lastName || '',
        currentPassword: values.currentPassword,
        password: values.password,
      };

      await updateUserSetting(changePasswordRequest);
      toast.success(t(transKeys.change_password_modal_message_success));
      handleClose();
    } catch (error) {
      if (error.message.includes('currentPassword')) {
        toast.error(t(transKeys.change_password_modal_message_error));
      } else {
        toast.error(t(error.message));
      }
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby='simple-dialog-title' open={open} maxWidth='xs'>
      <DialogContent>
        <IconButton onClick={() => onClose()}>
          <CloseIcon />
        </IconButton>

        <Formik<ChangePasswordValues>
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          enableReinitialize
        >
          <Form>
            <Box textAlign='center' pt={2} pb={4} px={{ sm: 2 }}>
              <Box mb={2}>
                <Typography variant='h3' component='h3'>
                  {t(transKeys.enter_your_new_password)}
                </Typography>
              </Box>

              <Box>
                {passwordFields.map((item: PasswordFieldsType) => {
                  return <PasswordField key={item.name} name={item.name} label={t(item.label)} />;
                })}
              </Box>

              <Box mt={4}>
                <Button variant='contained' color='secondary' type='submit'>
                  {t(transKeys.confirm)}
                </Button>
              </Box>
            </Box>
          </Form>
        </Formik>
      </DialogContent>
    </Dialog>
  );
};
export default ChangePasswordModal;
