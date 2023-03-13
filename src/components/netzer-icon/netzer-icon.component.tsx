import React, { Fragment } from 'react';
import { Animated, StyleProp, Text, ViewStyle } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';


import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { DEFAULT_ICON_SIZE, GLYPH } from './netzer-icon.constant';
import { GRAY_SCALE } from '../../theme/grayscale.constant';
import netzerConfig from '../../assets/netzer-icons.json';

interface NetzerIconProps {
  glyph: GLYPH;
  size?: number;
  color?: string;
  testID?: string;
  style?: StyleProp<ViewStyle>;
  isAnimated?: boolean;
}

export const NetzerIcon: React.FC<NetzerIconProps> = ({
  glyph,
  size = DEFAULT_ICON_SIZE,
  color = GRAY_SCALE.BLACK,
  style,
  testID,
  isAnimated,
  ...props
}: NetzerIconProps) => {
  const NetzerIconConfig = createIconSetFromFontello(netzerConfig);

  const componentMap = {
    ionicons: Ionicons,
    feather: Feather,
    foundation: Foundation,
    fontawesome: FontAwesome,
    netzer: NetzerIconConfig
  };

  const Icon = componentMap[glyph.family];
  const AnimatedIcon = Animated.createAnimatedComponent(Icon);

  const iconProps = {
    size,
    color,
    style,
    testID: testID || 'NETZER-ICON-' + (glyph.name || 'home-outline').toUpperCase(),
    name: glyph.name || 'home-outline'
  };

  return (
    <Fragment>
      {isAnimated ? (
        <AnimatedIcon {...iconProps} {...props} />
      ) : (
        <Text {...props}>
          <Icon {...iconProps} />
        </Text>
      )}
    </Fragment>
  );
};
