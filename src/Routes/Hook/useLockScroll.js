import { useState } from 'react';

export function useLockScroll() {
  const [initialScroll] = useState(document.body.style.overflow);
  const [isLocked, setIsLocked] = useState(false);
  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
    setIsLocked(true);
  };
  const unlockScroll = () => {
    document.body.style.overflow = initialScroll;
    setIsLocked(false);
  };
  return [isLocked, { lockScroll, unlockScroll }];
}
