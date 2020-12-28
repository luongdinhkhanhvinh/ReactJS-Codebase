import { Card as MaterialCard, CardProps } from '@material-ui/core';
import * as React from 'react';
import useStyles from './style';

const Card = (props: CardProps) => {
  const classes = useStyles();

  return (
    <MaterialCard
      classes={{
        root: classes.root,
      }}
      {...props}
    />
  );
};

export default Card;
