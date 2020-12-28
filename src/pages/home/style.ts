import { makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
