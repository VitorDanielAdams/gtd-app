import React from 'react';
import { Modal } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import { LangOption, LangTitle, ModalContent, ModalOverlay, ModalInnerPressable } from './LanguageSelector.styles';
import { LanguageSelectorProps } from './LanguageSelector.types';
import { useLanguageSelector } from './LanguageSelector.hook';
import { useTranslation } from 'react-i18next';
import type { GestureResponderEvent } from 'react-native';

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ visible, onClose }) => {
  const { availableLanguages, currentLanguage, handleSelectLanguage } = useLanguageSelector({ onClose });
  const { t } = useTranslation();

  return (
    <Modal
      onRequestClose={onClose}
      transparent
      animationType="fade"
      visible={visible}
      statusBarTranslucent
    >
      <ModalOverlay onPress={onClose}>
        <ModalInnerPressable onPress={(e: GestureResponderEvent) => e.stopPropagation()}>
          <ModalContent>
            {availableLanguages.map(lang => (
              <LangOption
                key={lang.code}
                onPress={() => handleSelectLanguage(lang.code)}
                selected={currentLanguage === lang.code}
              >
                <CountryFlag isoCode={lang.countryCode} size={24} style={{ marginRight: 8 }} />
                <LangTitle>{t(`languages.${lang.code}`)}</LangTitle>
              </LangOption>
            ))}
          </ModalContent>
        </ModalInnerPressable>
      </ModalOverlay>
    </Modal>
  );
};

export default LanguageSelector; 