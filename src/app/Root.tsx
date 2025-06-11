import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import { useAppSelector } from '@/app/infra/redux/hooks';
import { darkTheme } from '@/app/styles/theme/dark';
import { lightTheme } from '@/app/styles/theme/light';

import MenuBottomTabs from '@/app/presentation/navigation/MenuBottomTabs/MenuBottomTabs';
import { Header } from '@/app/presentation/components/common/Header';

const Root = () => {
  const navigationRef = useNavigationContainerRef();
  const [currentRouteName, setCurrentRouteName] = useState<string | undefined>();

  const currentThemeName = useAppSelector((state) => state.theme.currentTheme);
  const theme = currentThemeName === 'dark' ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Header
        title={currentRouteName || "Carregando..."}
        onToggleTheme={() => console.log('Toggle Theme')}
        onSelectLanguage={() => console.log('Select Language')}
        onPressProfile={() => console.log('Press Profile')}
      />
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          setCurrentRouteName(navigationRef.getCurrentRoute()?.name);
        }}
        onStateChange={() => {
          setCurrentRouteName(navigationRef.getCurrentRoute()?.name);
        }}
      >
        <MenuBottomTabs />
      </NavigationContainer>
    </StyledThemeProvider>
  );
};

export default Root; 