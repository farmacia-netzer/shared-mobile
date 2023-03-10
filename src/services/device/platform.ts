import { Platform } from 'react-native';
import { isTablet, getUniqueId, getFontScale } from 'react-native-device-info';

export enum PlatformOSKind {
  unknown = 'unknown',
  ios = 'ios',
  android = 'android'
}

export const isIos = Platform.OS === PlatformOSKind.ios;
export const isIosPlatformVersionLowerThan = (apiVersion) => {
  return isIos && +Platform.Version < apiVersion;
};
export const isAndroid = Platform.OS === PlatformOSKind.android;

export const isTabletDevice = isTablet();

export const isAndroidPlatformVersionLowerThan = (apiVersion) => {
  return isAndroid && Platform.Version < apiVersion;
};

export const platformSelect = Platform.select;

export const getUuid = getUniqueId();

export const getDeviceFontSize = getFontScale;
