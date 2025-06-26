import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/infrastructure/redux/hooks';
import { setLanguage } from '@/infrastructure/redux/slices/languageSlice';
import i18n from '@/infrastructure/i18n/i18n';
import { LANGUAGE_OPTIONS, LanguageOption } from '@/shared/types/language';
import { UseLanguageSelectorHookProps } from './LanguageSelector.types';

export const useLanguageSelector = (props: UseLanguageSelectorHookProps) => {
  const { onClose } = props;
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector((state) => state.language.currentLanguage);

  const availableLanguages: LanguageOption[] = useMemo(() => {
    return LANGUAGE_OPTIONS.filter(lang =>
      Object.keys(i18n.options.resources || {}).includes(lang.code)
    );
  }, []);

  const handleSelectLanguage = useCallback(
    (code: string) => {
      i18n.changeLanguage(code);
      dispatch(setLanguage(code));
      if (onClose) onClose();
    },
    [dispatch, onClose]
  );

  return {
    availableLanguages,
    currentLanguage,
    handleSelectLanguage,
  };
}; 