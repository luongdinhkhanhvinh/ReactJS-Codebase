import Popover from '@material-ui/core/Popover';
import * as React from 'react';
import { Props } from './types';

export const CustomPopover = (props: Props) => {
  return <Popover {...props}>{props.children}</Popover>;
};

export default CustomPopover;
