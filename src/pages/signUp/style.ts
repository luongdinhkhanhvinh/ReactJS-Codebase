import { makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) => ({
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
  boxHeader: {
    maxWidth: 732,
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up(theme.variables.lgVertical)]: {
      marginBottom: 40,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: -60,
    },
  },
  titlePage: {
    fontSize: 20,
    fontWeight: theme.variables.fontWeightMedium,
  },
  br: {
    display: 'none',
    [theme.breakpoints.up(theme.variables.lgVertical)]: {
      display: 'block',
    },
  },
  link: {
    color: theme.palette.secondary.main,
    transition: theme.transitions.create(['color']),
    textDecoration: 'none',
    '&:hover': {
      color: theme.colors.blueGrey900,
    },
  },
}));
