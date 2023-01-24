import { StyleSheet } from 'react-native';
import { GRAY_SCALE } from '##theme/grayscale.constant';
import { MEDIUM_PADDING, NORMAL_MARGIN } from '##theme/dimensions.constant';

export const FAB_DIMENSIONS = 50;
const FAB_BORDER_RADIUS = FAB_DIMENSIONS / 2;
const MINI_FAB_DIMENSIONS = 32;
const MINI_FAB_BORDER_RADIUS = MINI_FAB_DIMENSIONS / 2;

const MINI_FAB_EXT_IMG_HEIGHT = 12;
const MINI_FAB_EXT_HEIGHT = MINI_FAB_DIMENSIONS;
const MINI_FAB_EXT_BORDER_RADIUS = MINI_FAB_EXT_HEIGHT / 2;
const OUTLINE_ICON_DIAMETER = 50;
export const DEFAULT_ICON_COLOR = GRAY_SCALE.GRAY_20;

const commonStyles = StyleSheet.create({
  FABShadow: {
    backgroundColor: GRAY_SCALE.WHITE,
    shadowColor: GRAY_SCALE.BLACK,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4
  }
});

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  defaultIconStyle: {
    justifyContent: 'center'
  },
  defaultTextStyle: {
    color: DEFAULT_ICON_COLOR,
    justifyContent: 'center',
    textAlign: 'center'
  },
  iconOutline: {
    borderWidth: 2,
    borderColor: DEFAULT_ICON_COLOR,
    height: OUTLINE_ICON_DIAMETER,
    width: OUTLINE_ICON_DIAMETER,
    borderRadius: OUTLINE_ICON_DIAMETER / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  outlineText: {
    marginTop: NORMAL_MARGIN,
    color: DEFAULT_ICON_COLOR
  },
  FAB: {
    width: FAB_DIMENSIONS,
    height: FAB_DIMENSIONS,
    borderRadius: FAB_BORDER_RADIUS,
    ...commonStyles.FABShadow
  },
  miniFAB: {
    width: MINI_FAB_DIMENSIONS,
    height: MINI_FAB_DIMENSIONS,
    borderRadius: MINI_FAB_BORDER_RADIUS,
    ...commonStyles.FABShadow
  },
  miniFABext: {
    borderRadius: MINI_FAB_EXT_BORDER_RADIUS,
    paddingHorizontal: MEDIUM_PADDING,
    height: MINI_FAB_EXT_HEIGHT,
    ...commonStyles.FABShadow
  },
  miniFABextImage: {
    height: MINI_FAB_EXT_IMG_HEIGHT,
    resizeMode: 'contain'
  }
});
