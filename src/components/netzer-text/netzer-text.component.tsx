
import React, { ReactNode, useCallback, useMemo } from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { brandStyles, coreStyles, customStyles } from './netzer-text.style';
import { SharedElement } from 'react-navigation-shared-element';
import { FONT_SIZE } from '../../theme/typography.constant';

type TBrandStyles = typeof brandStyles;
type TCoreStyles = typeof coreStyles;
type TCustomStyles = typeof customStyles;
type TStyleNames = TBrandStyles & TCoreStyles & TCustomStyles;

interface NetzerTextProps extends TextProps {
  text: string | ReactNode;
  styleName?: keyof TStyleNames;
  textColor?: any;
  ellipsizeAtLine?: number;
  fontStyle?: any;
  type?: TTitleSizes;
  sharedElement?: boolean;
  sharedElementId?: string;
}

enum ETitleSizes {
  TITLE = 'TITLE',
  SUBTITLE = 'SUBTITLE',
  TEXT = 'TEXT'
}

type TTitleSizes = 'TITLE' | 'SUBTITLE' | 'TEXT';

export const NetzerText: React.FC<NetzerTextProps> = ({
  text,
  styleName = 'NORMAL',
  ellipsizeAtLine = 0,
  type = 'TEXT',
  sharedElement,
  sharedElementId,
  ...rest
}: NetzerTextProps) => {
  const { style, ...otherTextProps } = rest;

  const textStyle: TextStyle =
    coreStyles[styleName] || customStyles[styleName] || brandStyles[styleName] || coreStyles.NORMAL;

  // const fontFamily = getFontFamily(styleName, fontStyle);

  // const styleProps: StyleProp<TextStyle> = useMemo(
  //   () => [textStyle, fontFamily ? { fontFamily } : undefined, style],
  //   [fontFamily, style, textStyle]
  // );

  const getTitleSize = useCallback(() => {
    return {
      [ETitleSizes.TITLE]: styles.title,
      [ETitleSizes.SUBTITLE]: styles.subtitle,
      [ETitleSizes.TEXT]: styles.text
    }?.[type];
  }, [type]);

  const styleProps: StyleProp<TextStyle> = useMemo(
    () => [textStyle, undefined, style, getTitleSize()],
    [getTitleSize, style, textStyle]
  );

  const props = {
    ...(ellipsizeAtLine > 0 && {
      numberOfLines: ellipsizeAtLine
    }),
    ...otherTextProps
  };

  const TextComponent = (
    <Text style={styleProps} {...props}>
      {text}
    </Text>
  );

  const Content = sharedElement ? <SharedElement id={sharedElementId!}>{TextComponent}</SharedElement> : TextComponent;
  return Content;
};

const textStyles = {
  fontFamily: 'Avenir Next'
}
const styles = StyleSheet.create({
  title: {
    ...textStyles,
    fontSize: FONT_SIZE.LARGE,
    fontWeight: 'bold',
    fontFamily: 'Avenir Next',
    paddingVertical: 3
  },
  subtitle: {
    ...textStyles,
    fontSize: FONT_SIZE.NORMAL
  },
  text: {
    ...textStyles
  }
});
