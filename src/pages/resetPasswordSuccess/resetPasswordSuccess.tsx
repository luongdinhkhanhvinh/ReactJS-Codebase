import { Box, Typography } from '@material-ui/core';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import LayoutPublic from 'src/components/layoutPublic';
import Button from 'src/components/materialUI/components/button';
import { transKeys } from 'src/helpers/i18n';
import { RouteName } from 'src/routers/routeName';

const ResetPasswordSuccess = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <LayoutPublic documentTitle={t(transKeys.changed_password)}>
      <Box textAlign='center'>
        <Box mb={3}>
          <Typography variant='h3'>{t(transKeys.success)}</Typography>
        </Box>

        <Box mb={2}>
          <Typography component='p'>{t(transKeys.updated_password)}.</Typography>
        </Box>

        <Box mt={4}>
          <Button
            variant='contained'
            onClick={() => history.push(RouteName.LOGIN)}
            color='secondary'
          >
            {t(transKeys.proceed)}
          </Button>
        </Box>
      </Box>
    </LayoutPublic>
  );
};
export default ResetPasswordSuccess;
