import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    root: {
      fontSize: theme.typography.fontSize,
      backgroundColor: theme.palette.common.white,
      color: theme.colors.blueGrey900,
      fontWeight: theme.typography.fontWeightMedium,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      [theme.breakpoints.up('md')]: {
        fontSize: theme.variables.fontSize,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.variables.fontSizeSm,
      },
      '&$disabled': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderWidth: 0,
        color: theme.colors.black,
        borderRadius: 0,
      },
      '&$disabled input': {
        paddingLeft: 0,
        paddingBottom: 0,
      },

      '& .MuiFilledInput-input': {
        paddingLeft: 25,
        paddingRight: 25,
      },
      '&.MuiOutlinedInput-root': {
        border: '0 none',
      },
    },
    hideLabel: {
      '& .MuiFilledInput-input': {
        paddingTop: 15,
        paddingBottom: 15,
      },
    },
    showLabel: {
      '& .MuiInputLabel-filled': {
        transform: 'translate(25px, 20px) scale(1)',

        '&.MuiInputLabel-shrink': {
          transform: 'translate(25px, 10px) scale(0.75)',
        },
      },
    },
    focused: {},
    disabled: {},
    error: {},
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[300],
    },
  }),
);
