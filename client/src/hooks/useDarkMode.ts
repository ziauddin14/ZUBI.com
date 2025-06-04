import { useAppContext } from '@/context/AppContext';

export const useDarkMode = () => {
  const { state, dispatch } = useAppContext();

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  return {
    isDark: state.darkMode,
    toggleDarkMode
  };
};
