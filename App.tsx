import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Forum from './pages/Forum';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#001f3f',
    },
    secondary: {
      main: '#FFD700',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Forum />
    </ThemeProvider>
  );
}

export default App;
