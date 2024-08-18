import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { MainPage } from './components/MainPage';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  );
}
