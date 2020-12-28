import { ThemeProvider } from '@material-ui/core';
import * as React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import history from 'src/helpers/history';
import 'src/helpers/i18n';
import App from './app';
import ErrorBoundary from './pages/errorBoundary';
import theme from './themes';
import colors from './themes/colors';
import styles from './themes/styles';
import variables from './themes/variables';

render(
  <ThemeProvider theme={{ ...theme, colors, variables, styles }}>
    <Router history={history}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement,
);
