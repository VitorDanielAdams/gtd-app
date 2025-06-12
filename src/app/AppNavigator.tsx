import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import { useAppSelector } from '@/infrastructure/redux/hooks';
import { darkTheme } from '@/shared/styles/theme/dark';
import { lightTheme } from '@/shared/styles/theme/light';

import MenuBottomTabs from '@/presentation/navigation/MenuBottomTabs/MenuBottomTabs';
import { Header } from '@/presentation/components/common/Header';

const AppNavigator = () => {
  const navigationRef = useNavigationContainerRef();

  const currentThemeName = useAppSelector((state) => state.theme.currentTheme);
  const theme = currentThemeName === 'dark' ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Header />
      <NavigationContainer ref={navigationRef}>
        <MenuBottomTabs />
      </NavigationContainer>
    </StyledThemeProvider>
  );
};

export default AppNavigator; 