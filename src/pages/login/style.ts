import { makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    marginTop: -16,
  },
  boxLink: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.common.white,
    paddingBottom: 30,
    zIndex: theme.zIndex.mobileStepper,
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    maxWidth: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: 'auto',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    minWidth: 200,
  },

  logo: {
    textAlign: 'center',
  },
  imgLogo: {
    width: 200,
  },
}));
