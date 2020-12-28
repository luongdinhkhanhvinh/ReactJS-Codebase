import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppTheme } from '../../../../themes/types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      borderRadius: theme.variables.borderRadius,
      boxShadow: theme.variables.boxShadowCard,
    },
  }),
);
