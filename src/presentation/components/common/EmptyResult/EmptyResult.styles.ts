import styled from 'styled-components/native';
import { Theme } from '@/shared/styles/theme/types';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }: { theme: Theme }) => theme.spacing.lg}px;
`;

export const IconWrapper = styled.View`
  margin-bottom: ${({ theme }: { theme: Theme }) => theme.spacing.md}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: Theme }) => theme.typography.fontSize.md}px;
  font-family: ${({ theme }: { theme: Theme }) => theme.typography.fontFamily.medium};
  color: ${({ theme }: { theme: Theme }) => theme.colors.textSecondary};
  text-align: center;
`;

export const Children = styled.View`
  margin-top: ${({ theme }: { theme: Theme }) => theme.spacing.md}px;
  width: 100%;
`;