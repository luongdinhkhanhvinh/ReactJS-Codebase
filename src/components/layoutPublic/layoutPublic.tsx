import { Box, CssBaseline, Paper, Typography } from '@material-ui/core';
import clsx from 'clsx';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './style';
import { LayoutProps } from './types';

function LayoutPublic(props: LayoutProps) {
  const { title = 'Welcome!', classCT, children } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <section className={clsx(classes.root, classCT)}>
      <CssBaseline />

      <Box className={classes.box}>
        <Box className={classes.boxInner}>
          {title && (
            <Box textAlign='center' className={classes.titlePaperWrapper}>
              <Typography variant='h2' className={classes.titlePaper}>
                {t(title)}
              </Typography>
            </Box>
          )}
          <Paper elevation={1} className={classes.boxInfo} classes={{ root: classes.paperRoot }}>
            {children}
          </Paper>
        </Box>
      </Box>
    </section>
  );
}

export default LayoutPublic;
