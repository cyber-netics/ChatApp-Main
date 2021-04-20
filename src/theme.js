import { createGlobalStyle } from "styled-components";

const dark = "#1a2236";
const light = "white";
const active = "#0a80ff";
const primary100 = "rgba(255, 255, 255, 0.75)";
const primary200 = "#212529";
const secondery100 = "#969696";
const secondery200 = "rgba(255, 255, 255, 0.4)";
const highlight100 = "#293145";
const highlight200 = "#e6e6e6";

const baseColors = {
  dark,
  light,
  active,
};

const lightColors = {
  background: light,
  primary: primary200,
  secondery: secondery200,
  highlight: highlight200,
};

const darkColors = {
  background: dark,
  primary: primary100,
  secondery: secondery100,
  highlight: highlight100,
};

const lightThemeColors = Object.assign({}, baseColors, lightColors);
const darkThemeColors = Object.assign({}, baseColors, darkColors);

const theme = {
  isDark: false,
};

export const lightTheme = Object.assign(
  {},
  theme,
  { isDark: false },
  { colors: lightThemeColors }
);
export const darkTheme = Object.assign(
  {},
  theme,
  { isDark: true },
  { colors: darkThemeColors }
);

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%:
  }
  body {
    margin:0;
    height: 100%;
  }
  a {
`;
