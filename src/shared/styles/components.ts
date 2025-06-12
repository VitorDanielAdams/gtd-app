import styled from 'styled-components/native';
import { darkTheme, Theme } from './theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
  padding: ${({ theme }: { theme: Theme }) => theme.spacing.md}px;
`;

export const Card = styled.View`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
  border-radius: ${({ theme }: { theme: Theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }: { theme: Theme }) => theme.spacing.md}px;
  margin-bottom: ${({ theme }: { theme: Theme }) => theme.spacing.md}px;
  ${({ theme }: { theme: Theme }) => theme.shadows.md};
`;

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: Theme }) => theme.typography.fontSize.xl}px;
  font-family: ${({ theme }: { theme: Theme }) => theme.typography.fontFamily.bold};
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  margin-bottom: ${({ theme }: { theme: Theme }) => theme.spacing.sm}px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }: { theme: Theme }) => theme.typography.fontSize.md}px;
  font-family: ${({ theme }: { theme: Theme }) => theme.typography.fontFamily.medium};
  color: ${({ theme }: { theme: Theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }: { theme: Theme }) => theme.spacing.xs}px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  padding: ${({ theme }: { theme: Theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }: { theme: Theme }) => theme.borderRadius.md}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.background};
  font-size: ${({ theme }: { theme: Theme }) => theme.typography.fontSize.md}px;
  font-family: ${({ theme }: { theme: Theme }) => theme.typography.fontFamily.medium};
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
  border-width: 1px;
  border-color: ${({ theme }: { theme: Theme }) => theme.colors.border};
  border-radius: ${({ theme }: { theme: Theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }: { theme: Theme }) => theme.spacing.md}px;
  font-size: ${({ theme }: { theme: Theme }) => theme.typography.fontSize.md}px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  margin-bottom: ${({ theme }: { theme: Theme }) => theme.spacing.md}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Spacer = styled.View<{ size?: keyof typeof darkTheme.spacing }>`
  height: ${({ theme, size = 'md' }: { theme: Theme, size?: keyof typeof darkTheme.spacing }) => theme.spacing[size]}px;
  width: ${({ theme, size = 'md' }: { theme: Theme, size?: keyof typeof darkTheme.spacing }) => theme.spacing[size]}px;
`; 