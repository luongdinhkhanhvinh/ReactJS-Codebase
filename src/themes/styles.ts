import { makeStyles, createStyles } from '@material-ui/core';
import { AppTheme } from './types';

export default makeStyles((theme: AppTheme) =>
  createStyles({
    title: {
      backgroundColor: theme.palette.common.black,
    },
    toastify: {
      fontFamily: 'inherit',
    },
    pageHeading: {
      fontSize: theme.variables.pageHeadingFontSize,
      color: theme.colors.blueGrey900,
    },
    headerPublic: {
      [theme.breakpoints.down('xs')]: {
        paddingLeft: 15,
        paddingRight: 15,
        '& .MuiTypography-h2': {
          fontSize: 18,
        },
        '& .MuiGrid-item:last-child': {
          display: 'none',
        },
      },
    },
    formWrapper: {
      width: '100%',
      maxWidth: 400,
      marginTop: theme.spacing(1),
      marginLeft: 'auto',
      marginRight: 'auto',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 4),
      },
    },
    minWidthButton: {
      minWidth: 200,
    },
    paperRounded: {
      borderRadius: theme.variables.borderRadius,
    },
    dialogPaper: {
      width: '100%',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    iconButton: {
      position: 'absolute',
      right: 0,
      top: 0,
      padding: theme.spacing(2),
      zIndex: theme.zIndex.speedDial,
      '& svg': {
        fontSize: theme.variables.fontSizeHeading2,
      },
    },
    boxBlur: {
      opacity: 0.5,
      pointerEvents: 'none',
      cursor: 'default',
    },
    linkPrimary: {
      color: theme.palette.secondary.main,
      transition: theme.transitions.create(['color']),
      textDecoration: 'none',
      '&:hover': {
        color: theme.colors.blueGrey900,
      },
    },
    linkDefault: {
      color: theme.colors.blueGrey900,
      transition: theme.transitions.create(['color']),
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
  }),
);
