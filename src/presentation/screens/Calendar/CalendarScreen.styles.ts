import styled from 'styled-components/native';
import { Theme } from '@/shared/styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.text};
`; 