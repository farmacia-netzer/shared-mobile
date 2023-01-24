import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { GLYPH } from '../netzer-icon/netzer-icon.constant';
import { NetzerIcon } from '../netzer-icon/netzer-icon.component';
import { ICONBUTTON_STYLES } from './netzer-icon-button.constant';
import { styles, DEFAULT_ICON_COLOR } from './netzer-icon-button.style';

export interface NetzerIconButtonProps {
  glyph: GLYPH;
  labelKey?: any;
  testID: string;
  size?: number;
  color?: string;
  styleName?: any;
  isFAB?: boolean;
  iconStyle?: any;
  iconContainerStyle?: any;
  textStyle?: any;
  textStyleName?: string;
  buttonStyle?: any;
}

export const NetzerIconButton: React.FC<NetzerIconButtonProps> = ({
  glyph,
  testID,
  size = 20,
  color = DEFAULT_ICON_COLOR,
  styleName = ICONBUTTON_STYLES.TRANSPARENT,
  iconStyle,
  iconContainerStyle,
  buttonStyle
}: NetzerIconButtonProps) => {
  const elementStyle = {
    ...styles.container,
    ...(styleName === ICONBUTTON_STYLES.FAB && styles.FAB),
    ...buttonStyle
  };

  const elementIconStyle = {
    ...styles.defaultIconStyle,
    ...iconStyle
  };

  const activeOpacity = 0.9;
  const iconTestID = testID + '-ICON';

  const elementIconContainerStyle = {
    ...iconContainerStyle,
    ...(styleName === ICONBUTTON_STYLES.OUTLINE && styles.iconOutline)
  };

  return (
    <TouchableOpacity testID={testID} style={elementStyle} activeOpacity={activeOpacity} accessibilityRole={'button'}>
      <View style={styles.contentContainer}>
        <View style={elementIconContainerStyle}>
          <NetzerIcon testID={iconTestID} glyph={glyph} size={size} color={color} style={elementIconStyle} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
