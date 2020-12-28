import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      borderRadius: '50%',
      textTransform: 'uppercase',
      position: 'relative',
    },
    colorDefault: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.dark,
    },
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    avatar: {},
    img: {
      width: '100%',
      height: '100%',
    },
  }),
);
