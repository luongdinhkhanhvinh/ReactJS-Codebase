import { Checkbox as MaterialCheckbox, CheckboxProps } from '@material-ui/core';
import * as React from 'react';

const Checkbox = (props: CheckboxProps) => {
  return <MaterialCheckbox color='secondary' {...props} />;
};

export default Checkbox;
