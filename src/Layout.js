import React, { memo } from 'react';
import { connect } from 'react-redux';

import styled, {
  ThemeProvider,
} from 'styled-components';

import {
  darkTheme,
  lightTheme,
  GlobalStyle,
} from './theme';

import { Background } from 'Components/Common'; //remove
const LayoutContainer = styled(Background)`
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const Layout = memo(({ isDarkTheme, children }) => {
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isDarkTheme={isDarkTheme} />
      <LayoutContainer>{children}</LayoutContainer>
    </ThemeProvider>
  );
});

const mapStateToProps = (state) => {
  return {
    isDarkTheme: state.ui.theme.isDarkTheme,
  };
};

export default connect(mapStateToProps, null)(Layout);
