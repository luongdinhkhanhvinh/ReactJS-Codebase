import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/types';

const bgGradientPrimary = 'linear-gradient(227.14deg, #005CC7 0%, #1F81F3 100%)';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      height: '100%',
      overflow: 'hidden',
    },
    box: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      maxHeight: `calc(100% - ${theme.spacing(6)}px)`,
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      maxWidth: 370,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    boxInner: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'hidden',
      maxHeight: 'none',
      padding: 10,
    },
    paperRoot: {
      width: '100%',
    },
    boxInfo: {
      position: 'relative',
      flex: '1 1 auto',
      overflowY: 'auto',
      padding: theme.spacing(4),
      paddingTop: theme.spacing(7),
    },
    titlePaperWrapper: {
      position: 'relative',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      paddingTop: 28,
      paddingBottom: 28,
      background: bgGradientPrimary,
      boxShadow: theme.variables.boxShadownPrimary,
      color: theme.palette.common.white,
      borderRadius: theme.variables.borderRadiusSm,
      marginBottom: -38,
      zIndex: 2,
    },
    titlePaper: {
      fontWeight: theme.variables.fontWeightMedium,
    },
  }),
);
