import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { DefaultTheme } from 'styled-components';

export const styledTheme = {
  gray: '#9d9d9d',
  red: '#ff5851',
  white: '#ffffff',
};

export const muiTheme: DefaultTheme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      h1: {
        fontSize: 48,
      },
      h2: {
        fontSize: 40,
      },
      h3: {
        fontSize: 32,
        fontWeight: 700,
      },
      h4: {
        fontSize: 28,
        fontWeight: 700,
      },
      h5: {
        fontSize: 24,
        fontWeight: 700,
      },
      h6: {
        fontSize: 20,
        fontWeight: 700,
      },
    },

    // color
    palette: {
      type: 'light',
      common: {
        white: '#FFFFFF',
        black: '#1C1E24',
      },
      primary: {
        light: '#E6F2FF',
        main: '#6DA6FC',
        dark: '#5F88EA',
      },
      secondary: {
        light: '#D3C2FC',
        main: '#926DFC',
        dark: '#4824E9',
      },
      error: {
        light: '#FCEDE8',
        main: '#E54E4E',
        dark: '#C8292E',
      },
      warning: {
        light: '#FEEFB8',
        main: '#F2C94C',
        dark: '#EDA400',
      },
      info: {
        light: '#A2AEDC',
        main: '#435DB8',
        dark: '#2C4095',
      },
      success: {
        light: '#6FCF97',
        main: '#27AE60',
        dark: '#219653',
      },
      divider: '#CBD7E5',
      background: {
        default: '#FFFFFF',
        paper: '#F8F8F8',
      },
      text: {
        primary: '#323C47',
        secondary: '#707683',
        disabled: '#828282',
        hint: '#666666',
      },
      action: {
        active: 'rgba(118, 182, 255, 0.75)',
        hover: '#8AB6F7',
        selected: '#E6F2FF',
        disabled: '#FFFFFF',
        disabledBackground: '#CBD7E5',
      },
      grey: {
        100: '#E5E5E5',
        200: '#E0E0E0',
        300: '#D6D8DA',
      },
    },

    // component
    overrides: {},
  }),
);
