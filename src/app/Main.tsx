import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { theme } from '../constants/theme';
import AppNavigator from '../navigation/AppNavigator';

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
}
