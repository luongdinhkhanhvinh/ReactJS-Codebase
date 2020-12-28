import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import clsx from 'clsx';
import React from 'react';
import useStyles from './style';
import { TextField } from '../textField/textField';
import { Props } from './types';

const DatePicker = (props: Props) => {
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        TextFieldComponent={TextField}
        format='MM-dd-yyyy'
        placeholder='MM-dd-yyyy'
        keyboardIcon={<span className={clsx('icon icon-calendar', classes.ico)} />}
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
