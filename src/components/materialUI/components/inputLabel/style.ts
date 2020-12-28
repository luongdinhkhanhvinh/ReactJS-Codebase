import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      color: theme.palette.grey[400],
      '&$disabled': {
        transform: 'translate(0px, 10px) scale(0.75)',
      },
    },
    disabled: {},
    shrink: {
      fontSize: theme.typography.fontSize,
      fontFamily: theme.typography.fontFamily,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  }),
);
