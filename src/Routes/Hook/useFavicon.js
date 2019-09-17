import { useEffect } from 'react';

export function useFavicon(initialFavicon) {
  const setFavicon = href => {
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement('link');
    link.rel = 'shortcut icon';
    link.href = href;
    const [head] = document.getElementsByTagName('head');
    head.appendChild(link);
  };
  useEffect(() => {
    setFavicon(initialFavicon);
  }, [initialFavicon]);
  return setFavicon;
}
