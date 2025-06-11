import styled from 'styled-components/native';
import { TouchableOpacity, Platform, StatusBar } from 'react-native';
import { Theme } from '@/app/styles/theme/types';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ theme }: { theme: Theme }) => theme.spacing.md}px;
  padding-top: ${Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 40}px;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
`;

export const HeaderTitleWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: Theme }) => theme.typography.fontSize.xxl}px;
  font-family: ${({ theme }: { theme: Theme }) => theme.typography.fontFamily.bold};
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
`;

export const RightIconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }: { theme: Theme }) => theme.spacing.sm}px;
`;

export const IconButton = styled(TouchableOpacity)`
  padding: ${({ theme }: { theme: Theme }) => theme.spacing.sm}px;
`; 