import styled from 'styled-components/native';
import { Theme } from '@/shared/styles/theme/types';

export const TaskContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  margin-bottom: 10px;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.surface};
  border-radius: 8px;
`;

export const TaskInfo = styled.View`
  flex: 1;
  margin-right: 10px;
`;

export const TaskText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 16px;
  margin-bottom: 4px;
`;

export const TaskDate = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.textSecondary};
  font-size: 12px;
`;

export const IconButton = styled.TouchableOpacity`
  margin-left: 10px;
`; 