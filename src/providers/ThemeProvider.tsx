import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import React, { ReactElement } from 'react';
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';

import { muiTheme, styledTheme } from '../theme';

const GlobalStyle = createGlobalStyle`
  body, p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

interface Props {
  children?: ReactElement;
}

function ThemeProvider({ children }: Props): ReactElement {
  return (
    <>
      <GlobalStyle />
      <StyledThemeProvider theme={styledTheme}>
        <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
      </StyledThemeProvider>
    </>
  );
}

export { ThemeProvider };
