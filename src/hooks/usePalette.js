import { useContext } from 'react';
import { PaletteContext } from '../context/appContext';

export function usePalette() {
  return useContext(PaletteContext);
}
