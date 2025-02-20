import { useContext } from 'react';
import { IThemeContext } from '../interfaces/interfaces';
import { ThemeContext } from '../components/ThemeProvider/ThemeProvider';

const useThemeContext = (): IThemeContext => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default useThemeContext;
