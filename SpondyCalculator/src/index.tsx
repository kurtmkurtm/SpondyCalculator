import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider as StoreProvider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import "inter-ui/inter.css";
import { PartialTheme, ThemeProvider } from '@fluentui/react';

const appTheme: PartialTheme  = {
  defaultFontStyle: { fontFamily: '"Inter var", Arial' },
  palette: {
    themePrimary: '#485460',
    themeLighterAlt: '#f6f7f9',
    themeLighter: '#dde1e6',
    themeLight: '#c0c8d0',
    themeTertiary: '#8894a0',
    themeSecondary: '#5a6774',
    themeDarkAlt: '#414c57',
    themeDark: '#37404a',
    themeDarker: '#292f36',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#595959',
    neutralSecondary: '#373737',
    neutralPrimaryAlt: '#2f2f2f',
    neutralPrimary: '#000000',
    neutralDark: '#151515',
    black: '#0b0b0b',
    white: '#ffffff',
  }};

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={appTheme}>
        <App />
      </ThemeProvider >
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
