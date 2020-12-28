import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    selectPreview: {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.colors.transparent,
      },
      '& .MuiOutlinedInput-notchedOutline:after': {
        borderColor: theme.colors.transparent,
      },
      '& .MuiOutlinedInput-notchedOutline:before': {
        borderColor: theme.colors.transparent,
      },
      '& .Mul-focuseds': {
        borderColor: theme.colors.transparent,
      },
    },
    labelPreview: {
      color: theme.colors.secondary,
      textTransform: 'uppercase',
    },
    buttonActive: {
      '&:focus, &:active': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
      },
    },
    modalModeBaseInput: {
      paddingRight: 7,
      '& input': {
        paddingRight: 7,
        cursor: 'pointer',
      },
      '& svg': {
        fill: '#757575',
      },
    },
  }),
);
