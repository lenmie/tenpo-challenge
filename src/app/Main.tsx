import { ThemeProvider } from '@emotion/react';
import React, { useState } from 'react';
import { useMemo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from '../constants/theme';
import AppNavigator from '../navigation/AppNavigator';
import { UserContext } from './UserContext';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function Main() {
  const [userAddress, setUserAddress] = useState(null);
  const value = useMemo(
    () => ({ userAddress, setUserAddress }),
    [userAddress, setUserAddress],
  );

  return (
    <ThemeProvider theme={theme}>
      <BottomSheetModalProvider>
        <UserContext.Provider value={value}>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </UserContext.Provider>
      </BottomSheetModalProvider>
    </ThemeProvider>
  );
}
