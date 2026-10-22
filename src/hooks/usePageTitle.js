import { useEffect } from 'react';
import { profile } from '../data/profile';

// Sets the browser tab title for the current page.
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${profile.name}` : profile.name;
  }, [title]);
}
