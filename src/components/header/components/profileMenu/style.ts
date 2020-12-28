import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    popper: {
      zIndex: theme.zIndex.tooltip,
    },
    paper: {
      minWidth: 150,
    },
    menuList: {
      [theme.breakpoints.down('md')]: {
        padding: 0,
      },
    },
    menuItem: {
      color: theme.colors.black,
    },
  }),
);
