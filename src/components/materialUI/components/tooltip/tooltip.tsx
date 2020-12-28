import { Tooltip as MaterialTooltip, TooltipProps } from '@material-ui/core';
import * as React from 'react';
import useStyles from './style';
import Zoom from '@material-ui/core/Zoom';

const Tooltip = (props: TooltipProps) => {
  const classes = useStyles();

  return (
    <MaterialTooltip
      classes={{ tooltip: classes.root }}
      TransitionProps={{ timeout: 300 }}
      TransitionComponent={Zoom}
      {...props}
    />
  );
};

export default Tooltip;
