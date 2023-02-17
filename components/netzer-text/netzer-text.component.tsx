import { FONT_SIZE } from '##theme/typography.constant';
import React, { ReactNode, useCallback, useMemo } from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { brandStyles, coreStyles, customStyles } from './netzer-text.style';

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

  return (
    <Text style={styleProps} {...props}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FONT_SIZE.LARGE,
    fontWeight: 'bold',
    fontFamily: 'Avenir Next',
    paddingVertical: 3
  },
  subtitle: {
    fontSize: FONT_SIZE.NORMAL
  },
  text: {}
});
