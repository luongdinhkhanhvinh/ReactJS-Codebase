import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Image } from 'src/commons/images';
import { AppTheme } from 'src/themes/types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    input: {
      '&[value=""], &:not([value])': {
        color: theme.colors.transparent,
      },
      '$focused &': {
        color: theme.colors.blueGrey900,
      },
      '&[type="date"]::-webkit-calendar-picker-indicator': {
        color: theme.colors.transparent,
        opacity: 1,
        backgroundImage: `url(${Image.ICO_CALENDAR})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '19px 20px',
        backgroundPosition: 'center',
        width: 36,
        height: 36,
        cursor: 'pointer',
        borderRadius: '50%',
        outline: 'none',
        position: 'relative',
        left: 10,
      },
      '&[type="date"]::-webkit-calendar-picker-indicator:hover': {
        backgroundColor: theme.colors.btnIconHover,
      },
    },
    ico: {
      fontSize: 20,
      color: theme.palette.secondary.main,
    },
    focused: {},
    error: {},
  }),
);
