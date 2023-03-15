import { GRAY_SCALE } from './grayscale.constant';

export const THEME_COLORS = {
  PRIMARY: GRAY_SCALE.GRAY_10,
  SECONDARY: GRAY_SCALE.GRAY_30,
  ACCENT_1: '#009fc2',
  ACCENT_2: '#ffb100',
  ACCENT_3: '#b4be34',
  INFO: '#000080',
  POSITIVE: '#008000',
  WARNING: '#808000',
  NEGATIVE: '#DA0808',
  SALE_PRICE: '#B82217'
};

export const ICON_COLORS = {
  CONTRAST_10: GRAY_SCALE.BLACK,
  CONTRAST_20: GRAY_SCALE.GRAY_20,
  CONTRAST_30: GRAY_SCALE.GRAY_30,
  CONTRAST_40: GRAY_SCALE.GRAY_40,
  INVERTED_10: GRAY_SCALE.WHITE,
  // PRIMARY: THEME_COLORS.PRIMARY,
  // SECONDARY: THEME_COLORS.SECONDARY,
  // INFO: THEME_COLORS.INFO,
  // POSITIVE: THEME_COLORS.POSITIVE,
  // WARNING:  THEME_COLORS.WARNING,
  // NEGATIVE: THEME_COLORS.NEGATIVE,
  WHITE: GRAY_SCALE.WHITE,
  BLACK: GRAY_SCALE.BLACK
};

export const TEXT_COLORS = {
  CONTRAST_HIGH: GRAY_SCALE.BLACK,
  CONTRAST_MEDIUM: GRAY_SCALE.GRAY_20,
  CONTRAST_LOW: GRAY_SCALE.GRAY_40,
  CONTRAST_MIN: GRAY_SCALE.GRAY_50,
  INVERTED: GRAY_SCALE.WHITE,
  POSITIVE: THEME_COLORS.POSITIVE,
  NEGATIVE: THEME_COLORS.NEGATIVE,
  PRICE: THEME_COLORS.SALE_PRICE,
  PRIMARY: THEME_COLORS.PRIMARY,
  SECONDARY: THEME_COLORS.SECONDARY,
  INFO: THEME_COLORS.INFO,
  WARNING: THEME_COLORS.WARNING
};

export const INFO_BANNER_COLOR = {
  text: GRAY_SCALE.GRAY_20,
  background: '#B0E0EC70'
};

export const COLOR_PRIMARY = '#0077C8';
export const COLOR_PRIMARY_LIGHT = 'rgba(180, 225, 255,.2)';
export const COLOR_SECONDARY = '#82D732';
export const COLOR_SECONDARY_LIGHT = 'rgba(13, 215, 50, .1)';
export const COLOR_DANGER = 'red';
export const COLOR_DANGER_LIGHT = 'rgba(231, 76, 60 ,.1)';
export const LIGHT_CONTAINER = 'white'; //GRAY_SCALE.GRAY_95
