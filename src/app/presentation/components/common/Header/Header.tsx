import React from 'react';
import { Moon, Globe, UserRound, Sun } from 'lucide-react-native';
import { useHeaderLogic } from './Header.hook';
import { HeaderProps } from './Header.types';
import {
  HeaderContainer,
  RightIconsContainer,
  IconButton,
} from './Header.styles';
import { useTheme } from 'styled-components/native';

export const Header: React.FC<HeaderProps> = ({ onSelectLanguage, onPressProfile }) => {
  const { currentTheme, handleToggleTheme } = useHeaderLogic();
  const theme = useTheme();

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
        {onSelectLanguage && (
          <IconButton onPress={onSelectLanguage}>
            <Globe color={theme.colors.text} size={24} />
          </IconButton>
        )}
        {onPressProfile && (
          <IconButton onPress={onPressProfile}>
            <UserRound color={theme.colors.text} size={24} />
          </IconButton>
        )}
      </RightIconsContainer>
    </HeaderContainer>
  );
};