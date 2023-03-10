import { PermissionsContext } from '../../context/PermissionsContext';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';

import MapView, { Camera } from 'react-native-maps';
import { useIsMountedRef } from './useIsMountedRef';

export interface LocationPosition {
  latitude: number;
  longitude: number;
}

export const useLocation = (mapRef?: React.MutableRefObject<MapView | undefined>) => {
  const watchId = useRef<number>();
  const isMountedRef = useIsMountedRef();
  const [currentLocation, setCurrentLocation] = useState<LocationPosition>({ latitude: 18.5194095, longitude: -69.8279453 });
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
    getCurrentLocation()
      .then((location) => {
        if (!isMountedRef.current) return;
        setCurrentLocation(location);
        setHasLocation(true);
      });
  }, [getCurrentLocation, isMountedRef]);

  const centerPosition = useCallback((position: LocationPosition) => {
    mapRef?.current?.getCamera()
      .then((cam: Camera) => {
        if (cam?.zoom) cam.zoom = 20;
        mapRef?.current?.animateCamera({
          ...cam,
          center: position
        });
      });
  }, [mapRef]);

  return {
    getCurrentLocation,
    watchPosition,
    stopwatchPosition,
    currentLocation,
    hasLocation,
    centerPosition,
    requestPermission: permissionContext.askLocationPermission,
    permissionStatus: permissionContext.permission.locationStatus
  };
};
