import {
  Box,
  FormHelperText,
  Input,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import LayoutPublic from 'src/components/layoutPublic';
import Button from 'src/components/materialUI/components/button';
import { transKeys } from 'src/helpers/i18n';
import useUserProfile from 'src/hooks/useUserProfile';
import { HIDE_SPINNER, SHOW_SPINNER } from 'src/redux/spinner/spinnerType';
import { updateUserSetting } from 'src/services/user';
import { UpdateUserSettingRequest } from 'src/types/user';
import ChangePasswordModal from './components';
import { FormValues, InputFields } from './types';
import { validationSchema } from './validation';

const AccountSetting = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data: userProfile } = useUserProfile();
  const [isOpenChangePassword, setOpenChangePassword] = React.useState<boolean>(false);

  const initialValues: FormValues = useMemo(() => {
    return {
      firstName: userProfile?.firstName || '',
      lastName: userProfile?.lastName || '',
    };
  }, [userProfile?.firstName, userProfile?.lastName]);

  const inputFields: InputFields[] = [
    { label: transKeys.first_name, name: 'firstName' },
    { label: transKeys.last_name, name: 'lastName' },
  ];

  const onSubmit = async (values: FormValues) => {
    dispatch({ type: SHOW_SPINNER });
    try {
      await updateUserSetting(values as UpdateUserSettingRequest);

      toast.success(t(transKeys.account_setting_message_success));
    } catch (error) {
      toast.error(error.message);
    } finally {
      dispatch({ type: HIDE_SPINNER });
    }
  };

  return (
    <LayoutPublic documentTitle={t(transKeys.accout_setting)} title={t(transKeys.accout_setting)}>
      <Box px={{ xs: 1, lg: 3 }} mb={{ xs: 3, lg: 4 }} flexGrow={1}>
        <Typography variant='h2' component='h2'>
          {t(transKeys.accout_details)}
        </Typography>
      </Box>

      <Formik<FormValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formikProps) => {
          const { dirty } = formikProps;

          const { values, handleChange, handleBlur, errors, touched } = formikProps;
          return (
            <Form>
              <List>
                {inputFields.map((item: InputFields) => {
                  const { label, name, ...others } = item;
                  return (
                    <React.Fragment key={label}>
                      <ListItem>
                        <ListItemText primary={t(label)} />

                        <Input
                          // disableUnderline
                          value={values[name]}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name={name}
                          {...others}
                        />
                      </ListItem>

                      {!!touched[name] && !!errors[name] && (
                        <FormHelperText error>{errors[name]}</FormHelperText>
                      )}
                    </React.Fragment>
                  );
                })}

                <ListItem>
                  <ListItemText primary={t(transKeys.email)} />

                  <Input disableUnderline value={userProfile?.email || ''} readOnly disabled />
                </ListItem>

                <ListItem>
                  <ListItemText key='passwordField' primary={t(transKeys.password)} />

                  <Link
                    onClick={() => {
                      setOpenChangePassword(true);
                    }}
                  >
                    {t(transKeys.changed_password)}
                  </Link>
                </ListItem>
              </List>

              <Box textAlign='right' my={4} mr={{ xs: 2, md: 5 }}>
                <Button variant='contained' type='submit' disabled={!dirty} color='secondary'>
                  {t(transKeys.save_password)}
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>

      <ChangePasswordModal
        open={isOpenChangePassword}
        onClose={() => {
          setOpenChangePassword(false);
        }}
      />
    </LayoutPublic>
  );
};
export default AccountSetting;
