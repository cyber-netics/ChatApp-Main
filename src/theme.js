import { createGlobalStyle } from 'styled-components';

const dark = '#1a2236';
const light = 'white';
const highlight100 = '#293145';
const highlight200 = '#e6e6e6';
const highlight300 = '#384054';
const highlight400 = '#212529';
const highlight500 = '#333b4f';

const primary = '#0a80ff';
const secondary100 = 'black';
const secondary200 = 'rgba(255, 255, 255, 0.5)';
const secondary300 = '#ebebeb';

const success = '#0abb87';
const warning = '#ffc107';
const error = 'red';

const baseColors = {
  dark,
  light,
  success,
  warning,
  error,
};

const lightColors = {
  background: light,

  highlight: highlight200,
  highlightSecondary: light,

  active: highlight200,
  highlightPrimary: secondary300,
  highlightItem:highlight200,

  activeSecondary: primary,

  fontSecondary: highlight400,
  fontInactive: secondary100,
  fontActive: primary,
};

const darkColors = {
  background: dark,

  highlight: highlight100,
  highlightPrimary: highlight300,
  highlightSecondary: highlight100,
  highlightItem:highlight500,
  
  active: primary,
  activeSecondary: secondary200,

  fontSecondary: 'rgba(255, 255, 255, 0.7)',
  fontInactive: secondary200,
  fontActive: light,
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
`;
