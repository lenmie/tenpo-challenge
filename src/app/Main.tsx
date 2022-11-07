import { ThemeProvider } from '@emotion/react';
import React, { useState } from 'react';
import { useMemo } from 'react';
import { theme } from '../constants/theme';
import AppNavigator from '../navigation/AppNavigator';
import { UserContext } from './UserContext';

export default function Main() {
  const [userAddress, setUserAddress] = useState(null);
  const value = useMemo(
    () => ({ userAddress, setUserAddress }),
    [userAddress, setUserAddress],
  );

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={value}>
        <AppNavigator />
      </UserContext.Provider>
    </ThemeProvider>
  );
}
