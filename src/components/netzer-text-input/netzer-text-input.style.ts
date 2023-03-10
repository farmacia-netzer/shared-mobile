import { platformSelect } from '../../services/device/platform';
import { SMALL_MARGIN, NORMAL_MARGIN, MEDIUM_PADDING, LARGE_PADDING, NORMAL_PADDING } from '../../theme/dimensions.constant';
import { GRAY_SCALE } from '../../theme/grayscale.constant';
import { FONT_SIZE } from '../../theme/typography.constant';
import { StyleSheet } from 'react-native';

// import { theme } from '##themes';


export const ICON_SIZE = 20;

export const styles = StyleSheet.create({
  field: {
    width: '100%',
    marginTop: SMALL_MARGIN,
    marginBottom: NORMAL_MARGIN
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderColor: GRAY_SCALE.GRAY_70,
    borderRadius: 10
  },
  input: {
    alignItems: "center",
    flex: 1,
    fontSize: FONT_SIZE.NORMAL,
    color: GRAY_SCALE.GRAY_30,
    fontWeight: "400",
    fontFamily: 'Avenir Next',
    paddingVertical: MEDIUM_PADDING,
    ...platformSelect({
      ios: {

      },
      android: {

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
    paddingHorizontal: NORMAL_PADDING,
    fontWeight: "500"
  }
});
