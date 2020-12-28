import { FormHelperText as MaterialFormHelperText, FormHelperTextProps } from '@material-ui/core';
import * as React from 'react';
import useStyles from './style';

const FormHelperText = (props: FormHelperTextProps) => {
  const classes = useStyles();

  return <MaterialFormHelperText {...props} className={classes.root} />;
};

export default FormHelperText;
