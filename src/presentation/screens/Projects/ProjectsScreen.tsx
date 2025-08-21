import React from "react";
import { ScreenContainer } from "@/presentation/components/common/ScreenContainer";
import { useTranslation } from 'react-i18next';
import ScreenTitle from "../../components/common/ScreenTitle/ScreenTitle";
import { useSelector } from "react-redux";
import { RootState } from "@/infrastructure/redux/store";
import { EmptyResult } from "@/presentation/components/common/EmptyResult";

const ProjectsScreen = () => {
  const { t } = useTranslation();
  const projects = useSelector((state: RootState) => state.projects.items);

  return (
    <ScreenContainer>
      <ScreenTitle title={t('menu.projects')} />
      {projects === null || projects.length === 0 && (
        <EmptyResult
          translationKey="project.empty"
          defaultText="You don't have any projects yet"
          icon="folder"
        />
      )}
    </ScreenContainer>
  );
};

export default ProjectsScreen;