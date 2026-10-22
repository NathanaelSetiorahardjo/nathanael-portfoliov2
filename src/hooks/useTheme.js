import { useContext } from 'react';
import { ThemeContext } from '../context/appContext';

export function useTheme() {
  return useContext(ThemeContext);
}
