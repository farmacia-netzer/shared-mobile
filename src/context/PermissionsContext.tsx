// import React, { createContext, useCallback, useEffect, useState } from 'react';
// import { AppState, Platform } from 'react-native';
// import { check, PERMISSIONS, PermissionStatus, request, openSettings } from 'react-native-permissions';

// export interface PermissionsState {
//   locationStatus: PermissionStatus;
// }

// export const permissionInitState: PermissionsState = {
//   locationStatus: 'unavailable'
// };

// type PermissionsContextProps = {
//   permission: PermissionsState;
//   askLocationPermission: () => void;
//   checkLocationPermission: () => void;
// };

// export const PermissionsContext = createContext({} as PermissionsContextProps);

// export const PermissionsProvider = ({ children }: any) => {
//   const [permission, setPermission] = useState(permissionInitState);

//   const askLocationPermission = useCallback(async () => {
//     let permissionStatus: PermissionStatus;

//     if (Platform.OS === 'ios') {
//       permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
//     } else {
//       permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//     }

//     if (permissionStatus === 'blocked' || permissionStatus === 'denied') {
//       openSettings();
//     }

//     if (permissionStatus === permission.locationStatus) return;
//     setPermission({
//       ...permission,
//       locationStatus: permissionStatus
//     });
//   }, [permission]);

//   const checkLocationPermission = useCallback(async () => {
//     let permissionStatus: PermissionStatus;

//     if (Platform.OS === 'ios') {
//       permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
//     } else {
//       permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//     }

//     if (permissionStatus === permission.locationStatus) return;
//     setPermission((_permission) => {
//       return {
//         ..._permission,
//         locationStatus: permissionStatus
//       };
//     });
//   }, [permission.locationStatus]);

//   useEffect(() => {
//     checkLocationPermission();

//     AppState.addEventListener('change', (state) => {
//       if (state !== 'active') return;

//       checkLocationPermission();
//     });
//   }, [checkLocationPermission]);

//   return (
//     <PermissionsContext.Provider
//       value={{
//         permission: permission,
//         askLocationPermission,
//         checkLocationPermission
//       }}
//     >
//       {children}
//     </PermissionsContext.Provider>
//   );
// };
