import { StyleSheet } from 'react-native';

// import { theme } from '##themes';
import { GRAY_SCALE } from '##theme/grayscale.constant';
import { FONT_SIZE } from '##theme/typography.constant';
// import { customStyles as WLTEXT_STYLES } from '##component/elements/wl-text';
import { platformSelect } from '##services/device/platform';
import {
  LARGE_PADDING,
  MEDIUM_PADDING,
  NORMAL_MARGIN,
  NORMAL_PADDING,
  SMALL_MARGIN,
  SMALL_PADDING
} from '##theme/dimensions.constant';

export const ICON_SIZE = 20;

export const styles = StyleSheet.create({
  field: {
    width: '100%',
    marginTop: SMALL_MARGIN,
    marginBottom: NORMAL_MARGIN
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  input: {
    // ...WLTEXT_STYLES.INPUT,
    flex: 1,

    ...platformSelect({
      ios: {
        paddingTop: LARGE_PADDING,
        paddingBottom: NORMAL_PADDING
      },
      android: {
        paddingTop: MEDIUM_PADDING,
        paddingBottom: SMALL_PADDING,
        paddingLeft: 0
      }
    })
  },
  inputLarge: {
    paddingVertical: LARGE_PADDING,
    fontSize: FONT_SIZE.LARGE
  },
  inputDisabled: {
    // color: theme.text.CONTRAST_MIN
  },
  underline: {
    width: '100%',
    marginBottom: SMALL_MARGIN,
    borderBottomColor: GRAY_SCALE.GRAY_80,
    borderBottomWidth: 1
  },
  underlineError: {
    // borderBottomColor: theme.text.NEGATIVE
  },
  iconButton: {
    paddingHorizontal: NORMAL_PADDING
  }
});
