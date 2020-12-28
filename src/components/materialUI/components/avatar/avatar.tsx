import { Avatar as MaterialAvatar, AvatarProps } from '@material-ui/core';
import clsx from 'clsx';
import * as React from 'react';
import useStyles from './style';

const Avatar = (props: AvatarProps) => {
  const classes = useStyles();

  return (
    <MaterialAvatar
      classes={{ root: classes.root, colorDefault: classes.colorDefault, img: classes.img }}
      className={clsx(classes.large, { ...props })}
      {...props}
    />
  );
};

export default Avatar;
