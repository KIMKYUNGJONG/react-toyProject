import { useEffect, useState } from 'react';

export function useOnline(onChange) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const onNetworkChange = () => {
    setIsOnline(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener('online', onNetworkChange);
    window.addEventListener('offline', onNetworkChange);
    return () => {
      window.removeEventListener('online', onNetworkChange);
      window.removeEventListener('offline', onNetworkChange);
    };
  }, []);
  return isOnline;
}
