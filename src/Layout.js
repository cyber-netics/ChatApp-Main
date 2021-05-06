import React, { useState } from 'react';

import styled, {
  ThemeProvider,
} from 'styled-components';

import {
  darkTheme,
  lightTheme,
  GlobalStyle,
} from './theme';

import { Background } from 'Components/Common';

const LayoutContainer = styled(Background)`
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const Layout = ({ children }) => {
  const [isDarkTheme, setThemeMode] = useState(true);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const toggleTheme = () => setThemeMode(!isDarkTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isDarkTheme={isDarkTheme} />
      <LayoutContainer>
        {React.cloneElement(children, {
          toggleTheme,
        })}
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
