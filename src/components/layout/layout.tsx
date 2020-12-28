import { Box, CssBaseline } from '@material-ui/core';
import clsx from 'clsx';
import * as React from 'react';
import Header from '../header/header';
import useStyles from './style';
import { LayoutProps } from './type';

function Layout(props: LayoutProps) {
  const classes = useStyles();
  const { title } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <div className={classes.app}>
        <Header title={title} />

        <section className={classes.main}>
          <Box p={3} className={clsx(classes.boxWrapper)}>
            {props.children}
          </Box>
        </section>
      </div>
    </div>
  );
}

export default Layout;
