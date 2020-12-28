import { TextField as MaterialTextField } from '@material-ui/core';
import * as React from 'react';
import useHelperTextStyle from 'src/components/materialUI/components/formHelperText/style';
import useInputLabelStyle from 'src/components/materialUI/components/inputLabel/style';
import useStyle from './style';
import { Props } from './types';

export const TextField = (props: Props) => {
  const classes = useStyle();
  const inputLabelClasses = useInputLabelStyle();
  const helperTextClasses = useHelperTextStyle();
  const { multiline = false, label = false } = props;
  const helperTextProps = {
    classes: helperTextClasses,
  };
  const inputLabelProps = multiline
    ? {
        classes: inputLabelClasses,
        shrink: false,
      }
    : {
        classes: inputLabelClasses,
      };

  return (
    <MaterialTextField
      InputLabelProps={{ ...inputLabelProps }}
      FormHelperTextProps={{ ...helperTextProps }}
      classes={{ root: !label ? classes.hideLabel : classes.showLabel }}
      {...props}
    />
  );
};

TextField.defaultProps = {
  fullWidth: true,
  margin: 'normal',
} as Props;

export default TextField;
