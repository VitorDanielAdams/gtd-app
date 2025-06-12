import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';
import { Theme } from '@/shared/styles/theme/types';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const InputContainer = styled.View`
  padding: ${({ theme }: { theme: Theme }) => theme.spacing.md}px;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
`;

export const TaskInput = styled.TextInput`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.surface};
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  padding: ${({ theme }: { theme: Theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }: { theme: Theme }) => theme.borderRadius.md}px;
  font-size: ${({ theme }: { theme: Theme }) => theme.typography.fontSize.md}px;
`;

export const TaskList = styled.FlatList`
  flex: 1;
  padding: ${({ theme }: { theme: Theme }) => theme.spacing.md}px;
`;

export const AddButton = styled.TouchableOpacity`
  position: absolute;
  bottom: ${({ theme }: { theme: Theme }) => theme.spacing.xl}px;
  right: ${({ theme }: { theme: Theme }) => theme.spacing.xl}px;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  border-radius: ${({ theme }: { theme: Theme }) => theme.borderRadius.round}px;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  ${({ theme }: { theme: Theme }) => theme.shadows.lg};
`;

export const EmptyStateText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`; 