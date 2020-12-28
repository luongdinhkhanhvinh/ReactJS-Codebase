import { IconButton, InputAdornment } from '@material-ui/core';
import * as React from 'react';
import Tooltip from 'src/components/materialUI/components/tooltip';
import { Props } from './types';
import { Image } from 'src/commons/images';

const AdornmentTooltip = (props: Props) => {
  const { open, title } = props;
  return (
    <Tooltip title={title} open={open} disableHoverListener placement='top'>
      <InputAdornment position='end'>
        <IconButton>
          <img src={Image.ICON_WARNING_TEXTFIELD} />
        </IconButton>
      </InputAdornment>
    </Tooltip>
  );
};

export default AdornmentTooltip;
