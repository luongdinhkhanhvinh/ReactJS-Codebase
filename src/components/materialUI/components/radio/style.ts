import { makeStyles } from '@material-ui/core';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) => ({
  icon: {
    borderRadius: '50%',
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.secondary.main}`,

    '$root.Mui-focusVisible &': {
      outline: `2px auto ${theme.colors.focusVisible}`,
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: theme.colors.inputHover,
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: theme.palette.grey[400],
    },
    '&:before': {
      transition: theme.transitions.create(['transform']),
      transform: 'scale(0.5)',
      content: '""',
    },
  },
  checkedIcon: {
    position: 'relative',
    '&:before': {
      position: 'absolute',
      top: 3,
      right: 3,
      bottom: 3,
      left: 3,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: '50%',
      display: 'block',
      content: '""',
      transform: 'scale(1)',
    },
  },
}));
