import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh',

      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    app: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: theme.colors.mainBackground,
      minHeight: '100vh',
    },

    main: {
      marginTop: theme.variables.marginTopMain,
    },

    boxWrapper: {
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(5),
      },
      [theme.breakpoints.up(theme.variables.lgVertical)]: {
        padding: theme.spacing(11, 21),
      },
      [theme.breakpoints.down('sm')]: {
        maxWidth: 500,
        marginRight: 'auto',
        marginLeft: 'auto',
      },
    },
  }),
);
