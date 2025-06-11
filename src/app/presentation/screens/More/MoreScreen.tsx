import React from "react";
import { ScreenContainer } from "@/app/presentation/components/common/ScreenContainer";
import { useTranslation } from 'react-i18next';
import ScreenTitle from "../../components/common/ScreenTitle/ScreenTitle";

const MoreScreen = () => {
  const { t } = useTranslation();
  return (
    <ScreenContainer>
      <ScreenTitle title={t('menu.more')} />
    </ScreenContainer>
  );
};

export default MoreScreen;