import { DefaultTheme } from 'styled-components/native';
import { darkTheme, Theme } from './theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}

export const globalStyles = {
  container: {
    flex: 1,
    backgroundColor: darkTheme.colors.background,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: darkTheme.shadows.md,
} as const; 