import { useEffect, useState } from 'react';

export function useKeyPress(targetKey) {
  const [pressedKey, setPressedKey] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onDown = event => {
    const { key } = event;
    if (key === targetKey) {
      setPressedKey(true);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onUp = event => {
    const { key } = event;
    if (key === targetKey) {
      setPressedKey(false);
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
    };
  }, [onDown, onUp]);
  return pressedKey;
}
