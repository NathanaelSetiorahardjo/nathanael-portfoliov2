import { useCallback } from 'react';
import { profile } from '../data/profile';
import { useToast } from './useToast';

// Copies the email address and confirms it with a toast.
export function useCopyEmail() {
  const { showToast } = useToast();
  return useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      showToast('Email copied to clipboard');
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }, [showToast]);
}
