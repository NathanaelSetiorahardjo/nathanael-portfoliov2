// src/context/appContext.js
// Shared app state: colour theme, toast messages and the command palette.
import { createContext } from 'react';

export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });
export const ToastContext = createContext({ showToast: () => {} });
export const PaletteContext = createContext({ open: false, everOpened: false, setOpen: () => {} });
