import { Box, Typography } from '@material-ui/core';
import throttle from 'lodash/throttle';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import LayoutPublic from 'src/components/layoutPublic';
import Button from 'src/components/materialUI/components/button';
import { transKeys } from 'src/helpers/i18n';
import useAuth from 'src/hooks/useAuth';
import { RouteName } from 'src/routers/routeName';

const SendVerificationEmail = () => {
  const { t } = useTranslation();
  const { provider } = useAuth();
  const history = useHistory<{ uid: string }>();
  const { uid } = history.location.state || {};

  const onResend = useMemo(
    () =>
      throttle(
        () => {
          provider
            .sendVerificationEmail({ uid })
            .then(() => toast.success(t(transKeys.check_inbox)))
            .catch((error) => toast.error(error.message));
        },
        2000,
        { trailing: false },
      ),
    [provider, t, uid],
  );

  return (
    <LayoutPublic documentTitle={t(transKeys.send_verified_email)}>
      <Box textAlign='center'>
        <Box mt={3} mb={2}>
          <Typography variant='h3'>{t(transKeys.you_are_all)}</Typography>
        </Box>

        <Box mb={7}>
          <Typography component='p'>
            {t(transKeys.sent_verification_email_message_1)}
            <br />
            {t(transKeys.check_inbox)}
            <br />
            <span>{t(transKeys.sent_verification_email_message_2)}</span>
          </Typography>
        </Box>

        <Box display='flex' flexDirection='column' alignItems='center'>
          <Button variant='contained' onClick={onResend} color='secondary'>
            {t(transKeys.resend_email)}
          </Button>

          <Box height={20} />

          <Button onClick={() => history.replace(RouteName.LOGIN)} variant='contained'>
            {t(transKeys.back_to_login)}
          </Button>
        </Box>
      </Box>
    </LayoutPublic>
  );
};

export default SendVerificationEmail;
