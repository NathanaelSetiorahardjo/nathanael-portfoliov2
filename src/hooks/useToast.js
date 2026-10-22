import { useContext } from 'react';
import { ToastContext } from '../context/appContext';

export function useToast() {
  return useContext(ToastContext);
}
