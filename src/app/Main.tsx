import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from '../constants/theme';
import AppNavigator from '../navigation/AppNavigator';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import StoreProvider from './store/StoreProvider';

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          <StoreProvider>
            <AppNavigator />
          </StoreProvider>
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    </ThemeProvider>
  );
}
