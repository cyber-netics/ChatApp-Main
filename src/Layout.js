import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyle } from "./theme";

const LayoutContainer = styled.div`
  background: ${(props) => props.theme.colors.background};
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const Layout = ({ children }) => {
  const [isDarkTheme, setThemeMode] = useState(true);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isDarkTheme={isDarkTheme} />
      <LayoutContainer>
        {React.cloneElement(children, { setThemeMode })}
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
