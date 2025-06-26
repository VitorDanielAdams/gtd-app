import styled from 'styled-components/native';
import { Theme } from '@/shared/styles/theme';
import { LangOptionPropsStyledProps } from './LanguageSelector.types';

export const ModalOverlay = styled.Pressable`
  flex: 1;
  background-color: rgba(0,0,0,0.4);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
  padding: 28px 20px 20px 20px;
  border-radius: 16px;
  min-width: 240px;
  elevation: 8;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 16px;
  shadow-offset: 0px 4px;
`;

export const ModalInnerPressable = styled.Pressable`
  width: 100%;
  align-items: center;
`;

export const LangOption = styled.Pressable<LangOptionPropsStyledProps>`
  flex-direction: row;
  align-items: center;
  padding-vertical: 14px;
  padding-horizontal: 12px;
  border-radius: 8px;
  margin-bottom: 4px;
  background-color: ${(props: LangOptionPropsStyledProps) => props.selected ? props.theme.colors.primary + '22' : 'transparent'};
  opacity: ${(props: LangOptionPropsStyledProps) => props.selected ? 1 : 0.8};
`;

export const LangTitle = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 500;
`;
