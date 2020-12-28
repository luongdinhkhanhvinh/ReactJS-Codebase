import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      borderRadius: theme.variables.borderRadius,
      backgroundColor: theme.colors.gray40,
      color: theme.colors.blueGrey900,
      paddingLeft: 16,
      paddingRight: 16,
    },
  }),
);
