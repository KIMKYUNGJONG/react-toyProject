import { useEffect, useState } from 'react';

export function useDeviceOrientation(onOrientationChange) {
  const [coords, setCoords] = useState({
    alpha: 'null',
    beta: 'null',
    gamma: 'null'
  });
  const onMovement = event => {
    const { alpha, beta, gamma } = event;
    setCoords({ alpha, beta, gamma });
    //onOrientationChange(event);
  };
  useEffect(() => {
    window.addEventListener('deviceorientation', onMovement);
    return () => window.removeEventListener('deviceorientation', onMovement);
  });
  return coords;
}