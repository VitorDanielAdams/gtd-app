import { Theme } from '@/shared/styles/theme';

export interface LanguageSelectorProps {
  onClose?: () => void
  visible?: boolean;
}

export interface UseLanguageSelectorHookProps {
  onClose?: () => void
}

export interface LangOptionPropsStyledProps {
  selected?: boolean;
  theme: Theme;
}