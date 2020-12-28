import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    toolbar: {
      marginTop: 10,
      marginBottom: 10,
      display: 'flex',
    },

    menuIcon: {
      fontSize: 24,
      marginRight: 16,
    },
    positionFixed: {
      left: 0,
    },
    appbar: {
      backgroundColor: theme.colors.header,
      color: theme.colors.gray30,
      boxShadow: `0 4px 6px 0 ${theme.colors.gray80}, 0 2px 4px 0 ${theme.colors.btnIconHover}`,
    },
    logo: {
      marginTop: 10,
      marginLeft: 7,
    },
    titleMenu: {
      fontSize: 16,
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    sectionMobile: {
      display: 'flex',

      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    title: {
      fontSize: 20,
      fontWeight: 500,
      fontStyle: 'normal',
      letterSpacing: 0.8,
      textAlign: 'center',
      margin: 0,
      padding: 0,
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    gridTitle: {
      margin: 0,
      padding: 0,
    },
  }),
);
