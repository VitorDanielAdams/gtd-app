import { useAppSelector, useAppDispatch } from '@/infrastructure/redux/hooks';
import { toggleTheme } from '@/infrastructure/redux/slices/themeSlice';

export const useHeaderLogic = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return { currentTheme, handleToggleTheme };
}; 