import { useEffect, useState } from 'react';

export function useMousePosition() {
  const [mouseCoords, setMouseCoords] = useState({ x: null, y: null });
  const onMove = event => {
    const { clientX, clientY } = event;
    setMouseCoords({ x: clientX, y: clientY });
  };
  useEffect(() => {
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return mouseCoords;
}
