import React from "react";
import { ScreenContainer } from "@/app/presentation/components/common/ScreenContainer";
import { useTranslation } from 'react-i18next';
import ScreenTitle from "../../components/common/ScreenTitle/ScreenTitle";

const ReviewScreen = () => {
  const { t } = useTranslation();
  return (
    <ScreenContainer>
      <ScreenTitle title={t('menu.review')} />
    </ScreenContainer>
  );
};

export default ReviewScreen;