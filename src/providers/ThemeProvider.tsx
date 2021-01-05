import React, { ReactElement } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { styledTheme } from '../theme';

interface Props {
  children?: ReactElement;
}

function ThemeProvider({ children }: Props): ReactElement {
  return (
    <StyledThemeProvider theme={styledTheme}>{children}</StyledThemeProvider>
  );
}

export { ThemeProvider };
