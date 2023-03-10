import { TEXT_COLORS } from '../../theme/colors.constant';
import { SPECIAL_FONT_SIZE, LINE_HEIGHT, FONT_SIZE } from '../../theme/typography.constant';
import { StyleSheet } from 'react-native';


const lineHeightAspectRatio = 1.3;

// export const getFontFamily = (styleName, fontStyle) => {
//   if (brandStyles[styleName] || customStyles[styleName]) {
//     return null;
//   }
//   return CORE_FONT[fontStyle] || CORE_FONT.REGULAR;
// };

export const brandStyles = StyleSheet.create({
  BRAND_XXLARGE: {
    // fontFamily: theme.brandFont.family.MEDIUM,
    fontSize: SPECIAL_FONT_SIZE.BRAND_XXLARGE,
    lineHeight: LINE_HEIGHT.XXLARGE
    // ...theme.brandFont.style.XXLARGE
  },
  BRAND_XLARGE: {
    // fontFamily: theme.brandFont.family.LIGHT,
    fontSize: SPECIAL_FONT_SIZE.BRAND_XLARGE,
    lineHeight: LINE_HEIGHT.XLARGE
    // ...theme.brandFont.style.XLARGE
  },
  BRAND_MEDIUM: {
    // fontFamily: theme.brandFont.family.LIGHT,
    fontSize: FONT_SIZE.MEDIUM,
    lineHeight: LINE_HEIGHT.MEDIUM
    // ...theme.brandFont.style.MEDIUM
  },
  BRAND_MEDIUM_BOLD: {
    // fontFamily: theme.brandFont.family.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    lineHeight: LINE_HEIGHT.MEDIUM
    // ...theme.brandFont.style.MEDIUM_BOLD
  },
  // Used only for header page title
  BRAND_HEADER_TITLE: {
    color: TEXT_COLORS.PRIMARY,
    // fontFamily: theme.brandFont.family.BOLD,
    fontSize: FONT_SIZE.MEDIUM
    // ...theme.brandFont.style.HEADER_TITLE
  }
});

export const coreStyles = StyleSheet.create({
  XXSMALL: {
    marginVertical: -2,
    fontSize: FONT_SIZE.XXSMALL,
    lineHeight: FONT_SIZE.XXSMALL + 4
  },
  XSMALL: {
    fontSize: FONT_SIZE.XSMALL,
    lineHeight: LINE_HEIGHT.XSMALL + 4
  },
  XSMALL_MULTILINE: {
    fontSize: FONT_SIZE.XSMALL,
    lineHeight: LINE_HEIGHT.XSMALL * lineHeightAspectRatio
  },
  SMALL: {
    fontSize: FONT_SIZE.SMALL,
    lineHeight: FONT_SIZE.SMALL + 4
  },
  SMALL_MULTILINE: {
    fontSize: FONT_SIZE.SMALL,
    lineHeight: LINE_HEIGHT.SMALL
  },
  SUBTEXT: {
    fontSize: FONT_SIZE.SUBTEXT,
    lineHeight: FONT_SIZE.SUBTEXT + 4
  },
  SUBTEXT_MULTILINE: {
    fontSize: FONT_SIZE.SUBTEXT,
    lineHeight: LINE_HEIGHT.SUBTEXT
  },
  NORMAL: {
    fontSize: FONT_SIZE.NORMAL,
    lineHeight: FONT_SIZE.NORMAL + 4
  },
  NORMAL_MULTILINE: {
    fontSize: FONT_SIZE.NORMAL,
    lineHeight: LINE_HEIGHT.NORMAL
  },
  MEDIUM: {
    fontSize: FONT_SIZE.MEDIUM,
    lineHeight: FONT_SIZE.MEDIUM + 4
  },
  MEDIUM_MULTILINE: {
    fontSize: FONT_SIZE.MEDIUM,
    lineHeight: LINE_HEIGHT.MEDIUM
  },
  LARGE: {
    fontSize: FONT_SIZE.LARGE,
    lineHeight: LINE_HEIGHT.LARGE
  },
  LARGE_MULTILINE: {
    fontSize: FONT_SIZE.LARGE,
    lineHeight: LINE_HEIGHT.LARGE_MULTILINE
  },
  XLARGE: {
    fontSize: FONT_SIZE.XLARGE,
    lineHeight: LINE_HEIGHT.XLARGE
  },
  XXLARGE: {
    fontSize: FONT_SIZE.XXLARGE,
    lineHeight: LINE_HEIGHT.XXLARGE
  }
});

export const customStyles = StyleSheet.create({
  ERROR: {
    // fontFamily: CORE_FONT.REGULAR,
    fontSize: 16,
    color: TEXT_COLORS.NEGATIVE
  },
  INPUT: {
    color: TEXT_COLORS.CONTRAST_HIGH,
    // fontFamily: CORE_FONT.REGULAR,
    fontSize: FONT_SIZE.NORMAL
  },
  INPUT_ERROR: {
    // fontFamily: CORE_FONT.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    lineHeight: 16,
    color: TEXT_COLORS.NEGATIVE
  },
  SECTION_HEADER: {
    // fontFamily: CORE_FONT.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    textTransform: 'uppercase',
    color: TEXT_COLORS.CONTRAST_MIN
  },
  LIST_SEPARATOR: {
    // fontFamily: CORE_FONT.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    textTransform: 'uppercase',
    color: TEXT_COLORS.CONTRAST_MIN
  },
  UPPERCASE_DATE: {
    // fontFamily: CORE_FONT.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    textTransform: 'uppercase',
    color: TEXT_COLORS.CONTRAST_LOW
  },
  ICON_CAPTION: {
    color: TEXT_COLORS.CONTRAST_LOW,
    // fontFamily: CORE_FONT.REGULAR,
    fontSize: FONT_SIZE.SUBTEXT,
    lineHeight: FONT_SIZE.SUBTEXT + 4
  },
  TAB_BAR_ICON_CAPTION: {
    // fontFamily: CORE_FONT.REGULAR,
    fontSize: FONT_SIZE.XSMALL,
    letterSpacing: -0.2,
    lineHeight: 13,
    textTransform: 'uppercase'
  },
  SMALL_BUTTON_LIST_TITLE_TEXT: {
    // fontFamily: CORE_FONT.REGULAR,
    fontSize: FONT_SIZE.XSMALL,
    lineHeight: 10 * lineHeightAspectRatio,
    textTransform: 'uppercase',
    color: TEXT_COLORS.CONTRAST_LOW
  },
  CALORIES_TITLE: {
    // fontFamily: CORE_FONT.EXTRABOLD,
    fontSize: SPECIAL_FONT_SIZE.CALORIES_TITLE,
    lineHeight: SPECIAL_FONT_SIZE.CALORIES_TITLE + 4
  },
  CALORIES_VALUE: {
    // fontFamily: CORE_FONT.EXTRABOLD,
    fontSize: SPECIAL_FONT_SIZE.CALORIES_VALUE,
    lineHeight: SPECIAL_FONT_SIZE.CALORIES_VALUE + 4
  }
});
