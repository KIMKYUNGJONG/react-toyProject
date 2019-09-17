import { useEffect, useState } from 'react';

export function useGeolocation() {
  const [coords, setCoords] = useState({ lat: 'null', long: '' });
  const [error, setError] = useState('');
  const onSucces = event => {
    const {
      coords: { latitude: lat, longitude: long }
    } = event;
    setCoords({ lat, long });
  };
  const onFailure = event => setError(event);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSucces, onFailure);
  }, []);
  return { coords, error };
}
