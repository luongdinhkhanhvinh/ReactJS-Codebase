import { Box, Button, Typography } from '@material-ui/core';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import LayoutPublic from 'src/components/layoutPublic';
import { transKeys } from 'src/helpers/i18n';
import { RouteName } from 'src/routers/routeName';

const ForgotPasswordSuccess = () => {
  const { t } = useTranslation();
  const history = useHistory<{ email: string }>();
  const { email } = history.location.state || '';

  return (
    <LayoutPublic documentTitle={t(transKeys.changed_password)}>
      <Box textAlign='center'>
        <Box mb={3}>
          <Typography variant='h3'>{t(transKeys.reset_link_sent)}</Typography>
        </Box>

        <Box mb={3}>
          <Typography component='p'>{t(transKeys.forgot_password_success_message_1)}:</Typography>

          <Typography component='p'>
            <b>{email}</b>
          </Typography>
        </Box>

        <Box mb={8}>
          <Typography component='p'>{t(transKeys.forgot_password_success_message_2)}</Typography>
        </Box>

        <Button onClick={() => history.replace(RouteName.LOGIN)} variant='contained'>
          {t(transKeys.back_to_signin)}
        </Button>
      </Box>
    </LayoutPublic>
  );
};

export default ForgotPasswordSuccess;
