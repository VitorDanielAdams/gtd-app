import styled from 'styled-components/native';
import { Theme } from '@/app/styles/theme/types';

export const TaskContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  margin-bottom: 10px;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.surface};
  border-radius: 8px;
`;

export const TaskText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 16px;
  flex: 1;
`;

export const IconButton = styled.TouchableOpacity`
  margin-left: 10px;
`; 