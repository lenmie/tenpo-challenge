import { ThemeProvider } from '@emotion/react';
import React, { useState } from 'react';
import { useMemo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from '../constants/theme';
import AppNavigator from '../navigation/AppNavigator';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import StoreProvider from './store/StoreProvider';

export default function Main() {
  // const [userAddress, setUserAddress] = useState(null);
  // const value = useMemo(
  //   () => ({ userAddress, setUserAddress }),
  //   [userAddress, setUserAddress],
  // );

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
