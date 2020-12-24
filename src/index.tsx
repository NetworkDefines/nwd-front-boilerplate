import { StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import App from './App';
import { ThemeProvider } from './providers/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <StylesProvider injectFirst>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StylesProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('app'),
);
