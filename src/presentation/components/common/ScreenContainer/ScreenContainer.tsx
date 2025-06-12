import React from 'react';
import { Container } from './ScreenContainer.styles';
import { ScreenContainerProps } from './ScreenContainer.types';

export const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
}; 