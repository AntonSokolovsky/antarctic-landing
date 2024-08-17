import { ThemeOptions } from '@mui/material';
declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }

  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}
import { createTheme } from '@mui/material';

export const colorThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#00006F',
    },
    secondary: {
      main: '#5BC0DE',
    },
    accent: {
      main: '#FF0F0F',
    },
    background: {
      paper: '#F1F1F1',
      default: '#F1F1F1',
    },
    divider: 'rgba(0,0,111,0.4)',
    text: {
      primary: '#00006F',
      secondary: '#F1F1F1',
      disabled: 'rgba(0, 0, 111, 0.3)',
    },
  },
};

export const colorTheme = createTheme(colorThemeOptions);
