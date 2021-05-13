import { createGlobalStyle } from 'styled-components';

const dark = '#1a2236';
const light = 'white';
const primary = '#0a80ff';

const highlight100 = '#293145'; // background secondary
const highlight200 = '#e6e6e6';
const highlight300 = '#384054';
const highlight350 = '#e9ecef';

const highlight400 = '#212529';
const highlight500 = '#333b4f';
const highlight600 = 'rgba(255, 255, 255, 0.75)';
const highlight700 = '#f0f0f0';
const highlight800 = '#1f273b';

const highlight1000 = 'rgba(255, 255, 255, 0.3)';
const highlight900 = 'rgba(0, 0, 0, 0.5)';

const secondary100 = 'black';
const secondary200 = 'rgba(255, 255, 255, 0.5)';
const secondary300 = '#ebebeb';
const secondary400 = '#969696';
const secondary500 = '#6c757d';
const secondary600 = '#424a5e'; //
const secondary700 = '#adb5bd';
const secondary800 = 'rgba(255, 255, 255, 0.4)';

const success = '#0abb87';
const warning = '#ffc107';
const error = 'red';

const baseColors = {
  dark,
  light,
  primary,
  success,
  warning,
  error,
  font: secondary500,
  smooth: highlight1000,
};

const lightColors = {
  background: light,
  highlightBackground: highlight900,

  borderSecondary: highlight350,
  highlight: highlight200,
  highlightSecondary: light,

  active: highlight200,
  highlightPrimary: secondary300,
  highlightItem: highlight200,
  highlightItemSecondary: highlight700,

  activeSecondary: primary,
  fontNeutral: secondary400,
  fontSecondary: highlight400,
  fontInactive: secondary100,
  fontActive: primary,
  fontTernry: secondary500,
  fontMain: highlight400,

  borderTertiary: secondary700, //
  textHighlight: secondary300,
};

const darkColors = {
  background: dark,
  highlightBackground: highlight1000,

  borderSecondary: highlight300,

  highlight: highlight100,
  highlightSecondary: highlight100,
  textHighlight: highlight100,

  highlightPrimary: highlight300,
  highlightItem: highlight500,
  highlightItemSecondary: highlight800,

  active: primary,
  activeSecondary: secondary200,

  fontNeutral: secondary500,
  fontSecondary: highlight600,
  fontInactive: secondary200,
  fontActive: light,
  fontTernry: secondary800,
  fontMain: highlight600,

  borderTertiary: secondary600, //
};

const lightThemeColors = Object.assign(
  {},
  baseColors,
  lightColors,
);
const darkThemeColors = Object.assign(
  {},
  baseColors,
  darkColors,
);

const theme = {
  isDark: false,
};

export const lightTheme = Object.assign(
  {},
  theme,
  { isDark: false },
  { colors: lightThemeColors },
);
export const darkTheme = Object.assign(
  {},
  theme,
  { isDark: true },
  { colors: darkThemeColors },
);

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%:
  }
  body {
    margin:0;
    padding: 0;
    height: 100%;
  }
  .dark {
    background: red;
  }
`;
