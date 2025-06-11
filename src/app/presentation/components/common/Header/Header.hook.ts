import { useAppSelector, useAppDispatch } from '@/app/infra/redux/hooks';
import { toggleTheme } from '@/app/infra/redux/slices/themeSlice';

export const useHeaderLogic = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return { currentTheme, handleToggleTheme };
}; 