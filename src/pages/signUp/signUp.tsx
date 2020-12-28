import { Box } from '@material-ui/core';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LayoutPublic from 'src/components/layoutPublic';
import { RouteName } from 'src/routers/routeName';
import FormSignUp from './components/formSignUp';
import useStyles from './style';
import { transKeys } from 'src/helpers/i18n';

const SignUp = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <LayoutPublic documentTitle={t(transKeys.sign_up)}>
      <FormSignUp />
      <Box textAlign='center' mt={3} mb={2}>
        {t(transKeys.already_have_account)}{' '}
        <Link className={classes.link} to={RouteName.LOGIN}>
          {t(transKeys.sign_in)}
        </Link>
      </Box>
    </LayoutPublic>
  );
};

export default SignUp;
