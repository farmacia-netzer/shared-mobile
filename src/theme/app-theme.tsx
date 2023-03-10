import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { COLOR_PRIMARY, COLOR_SECONDARY } from './colors.constant';
import { GRAY_SCALE } from './grayscale.constant';

// export const BUTTON_COLORS = {
//   PRIMARY: COLOR_SECONDARY,
//   SECONDARY: THEME_COLORS.SECONDARY,
//   INFO: THEME_COLORS.INFO,
//   POSITIVE: THEME_COLORS.POSITIVE,
//   WARNING: THEME_COLORS.WARNING,
//   NEGATIVE: THEME_COLORS.NEGATIVE,

// };

const darkTheme: any = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors
    // text: 'rgb(255, 255, 255)'
  },
  button: {
    PRIMARY: COLOR_PRIMARY,
    SECONDARY: COLOR_SECONDARY,
    CONTRAST: GRAY_SCALE.GRAY_10,
    CONTRAST_30: GRAY_SCALE.GRAY_50,
    CONTRAST_HIGH: GRAY_SCALE.BLACK,
    CONTRAST_MEDIUM: GRAY_SCALE.GRAY_20,
    CONTRAST_LOW: GRAY_SCALE.GRAY_40,
    CONTRAST_MIN: GRAY_SCALE.GRAY_50,
    INVERTED: GRAY_SCALE.GRAY_70
  }
};

const defaultTheme: any = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLOR_PRIMARY
  },
  button: {
    PRIMARY: COLOR_PRIMARY,
    SECONDARY: COLOR_SECONDARY,
    CONTRAST: GRAY_SCALE.GRAY_10,
    CONTRAST_30: GRAY_SCALE.GRAY_50,
    CONTRAST_HIGH: GRAY_SCALE.BLACK,
    CONTRAST_MEDIUM: GRAY_SCALE.GRAY_20,
    CONTRAST_LOW: GRAY_SCALE.GRAY_40,
    CONTRAST_MIN: GRAY_SCALE.GRAY_50,
    INVERTED: GRAY_SCALE.GRAY_70
  }
};

export const getTheme = (isDark: boolean = false): Theme => {
  const theme = isDark ? darkTheme : defaultTheme;
  return theme;
};
