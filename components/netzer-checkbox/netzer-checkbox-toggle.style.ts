import { StyleSheet } from 'react-native';
import { GRAY_SCALE } from '##theme/grayscale.constant';
import { FONT_SIZE } from '##theme/typography.constant';
import { COLOR_PRIMARY } from '##theme/colors.constant';

export const ICON_SIZE = FONT_SIZE.XLARGE;
export const DEFAULT_ICON_CHECKED_COLOR = COLOR_PRIMARY;
export const DEFAULT_ICON_UNCHECKED_COLOR = GRAY_SCALE.GRAY_60;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  }
});
