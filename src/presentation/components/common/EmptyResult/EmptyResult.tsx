import React from 'react';
import { EmptyResultProps } from './EmptyResult.types';
import { useTranslation } from 'react-i18next';
import { icons } from '@/shared/utils/icons';
import { Children, Container, IconWrapper, Title } from './EmptyResult.styles';
import { useTheme } from 'styled-components';

export const EmptyResult: React.FC<EmptyResultProps> = (props) => {
  const { translationKey, defaultText, icon, children } = props;
  const theme = useTheme();
  const { t } = useTranslation();

  const text = t(translationKey, { defaultValue: defaultText || translationKey });

  const Icon = icon && icons[icon] ? icons[icon] : icons["Info"];

  return (
    <Container>
      {Icon && (
        <IconWrapper>
          <Icon color={theme.colors.text} size={48} strokeWidth={1.5} />
        </IconWrapper>
      )}
      <Title>{text}</Title>
      {children && <Children>{children}</Children>}
    </Container>
  );
};