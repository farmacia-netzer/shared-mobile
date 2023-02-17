import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';

// import { PermissionsContext } from '##context/PermissionsContext';
import { useIsMountedRef } from '##shared/hooks/useIsMountedRef';
import { PermissionsContext } from '##shared/context/PermissionsContext';

export interface LocationPosition {
  latitude: number;
  longitude: number;
}

export const useLocation = () => {
  const watchId = useRef<number>();
  const isMountedRef = useIsMountedRef();
  const [currentLocation, setCurrentLocation] = useState<LocationPosition>({ latitude: 0, longitude: 0 });
  const [hasLocation, setHasLocation] = useState<boolean>(false);

  const permissionContext = useContext(PermissionsContext);

  const getCurrentLocation = useCallback((): Promise<LocationPosition> => {
    if (permissionContext.permission.locationStatus === 'granted') {
      return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
          ({ coords }) => {
            resolve({
              latitude: coords.latitude,
              longitude: coords.longitude
            });
          },
          (err) => reject({ err }),
          { enableHighAccuracy: true }
        );
      });
    } else return Promise.reject('Permission denied');
  }, [permissionContext.permission.locationStatus]);

  const watchPosition = useCallback(() => {
    watchId.current = Geolocation.watchPosition(
      ({ coords: _coords }) => {
        if (!isMountedRef.current) return;

        const location: LocationPosition = { latitude: _coords.latitude, longitude: _coords.longitude };

        setCurrentLocation(location);
      },
      (err) => console.log(err),
      { enableHighAccuracy: true, distanceFilter: 10 }
    );
  }, [isMountedRef]);

  const stopwatchPosition = () => {
    if (watchId.current) Geolocation.clearWatch(watchId.current);
  };

  useEffect(() => {
    getCurrentLocation().then((location) => {
      if (!isMountedRef.current) return;
      setCurrentLocation(location);
      setHasLocation(true);
    });
  }, [getCurrentLocation, isMountedRef]);

  return {
    getCurrentLocation,
    watchPosition,
    stopwatchPosition,
    currentLocation,
    hasLocation,
    requestPermission: permissionContext.askLocationPermission,
    permissionStatus: permissionContext.permission.locationStatus
  };
};
