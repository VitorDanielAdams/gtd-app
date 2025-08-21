import React, { useState, useCallback } from 'react';
import { Moon, Globe, UserRound, Sun } from 'lucide-react-native';
import { useHeaderLogic } from './Header.hook';
import { HeaderProps } from './Header.types';
import {
  HeaderContainer,
  RightIconsContainer,
  IconButton,
} from './Header.styles';
import { useTheme } from 'styled-components/native';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

export const Header: React.FC<HeaderProps> = ({ onPressProfile }) => {
  const { currentTheme, handleToggleTheme } = useHeaderLogic();
  const theme = useTheme();
  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  const handleOpenLanguageModal = useCallback(() => setLanguageModalVisible(true), []);
  const handleCloseLanguageModal = useCallback(() => setLanguageModalVisible(false), []);

  return (
    <HeaderContainer>
      <RightIconsContainer>
        <IconButton onPress={handleToggleTheme}>
          {currentTheme === 'dark' ? (
            <Moon color={theme.colors.text} size={24} />
          ) : (
            <Sun color={theme.colors.text} size={24} />
          )}
        </IconButton>
        <IconButton onPress={handleOpenLanguageModal}>
          <Globe color={theme.colors.text} size={24} />
        </IconButton>
        {/* {onPressProfile && ( */}
          <IconButton onPress={onPressProfile}>
            <UserRound color={theme.colors.text} size={24} />
          </IconButton>
        {/* )} */}

      </RightIconsContainer>
      <LanguageSelector
        visible={languageModalVisible}
        onClose={handleCloseLanguageModal}
      />
    </HeaderContainer>
  );
};