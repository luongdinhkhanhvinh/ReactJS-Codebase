import { makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) => ({
  submit: {
    margin: theme.spacing(4, 0, 2),
    minWidth: 175,
  },
}));
