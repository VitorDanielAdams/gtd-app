import React from "react";
import { ScreenContainer } from "@/presentation/components/common/ScreenContainer";
import { useTranslation } from 'react-i18next';
import ScreenTitle from "../../components/common/ScreenTitle/ScreenTitle";

const CalendarScreen = () => {
  const { t } = useTranslation();
  return (
    <ScreenContainer>
      <ScreenTitle title={t('menu.calendar')} />
    </ScreenContainer>
  );
};

export default CalendarScreen;