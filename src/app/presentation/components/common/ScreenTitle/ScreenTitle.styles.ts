import styled from 'styled-components/native';
import { Theme } from '@/app/styles/theme/types';

export const ScreenTitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: Theme }) => theme.typography.fontSize.xxl}px;
  font-family: ${({ theme }: { theme: Theme }) => theme.typography.fontFamily.bold};
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
`;