import { ScreenTitleWrapper, Title } from "./ScreenTitle.styles";
import { ScreenTitleProps } from "./ScreenTitle.types";

const ScreenTitle = ({ title }: ScreenTitleProps) => {
  return (
    <ScreenTitleWrapper>
      <Title>{title}</Title>
    </ScreenTitleWrapper>
  );
};

export default ScreenTitle;
