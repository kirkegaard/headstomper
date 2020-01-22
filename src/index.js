import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import ReactGA from 'react-ga';

ReactGA.initialize('');
ReactGA.pageview(window.location.pathname + window.location.search);

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      'din-2014',
      'arial',
      'sans-serif',
    ].join(','),
    htmlFontSize: 16,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h2: {
      textTransform: 'uppercase',
      fontWeight: 700,
      marginTop: 100,
      marginBottom: 100,
    },
    h3: {
      fontSize: 1.4,
      fontWeight: 700,
    },
    h4: {
      fontSize: 1.1,
      fontWeight: 700,
    },
  },
  palette: {
    type: 'dark',
    background: {
      default: '#1d1d1d',
    },
  },
});
theme = responsiveFontSizes(theme);


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
