import { BASE_PADDING, X_MEDIUM_BORDER_RADIUS, X_LARGE_BORDER_RADIUS, BASE_MARGIN } from '../../theme/dimensions.constant';
import { GRAY_SCALE } from '../../theme/grayscale.constant';
import React, { ReactElement, useMemo } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';

interface NetzerCardProps {
  children: ReactElement;
  padding?: number;
  typeRadius?: 'medium' | 'large' | 'none';
  height?: number | string;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined
}


export const NetzerCard = ({ children, padding = BASE_PADDING, typeRadius = 'medium', height, onLayout }: NetzerCardProps) => {
  const cardStyles = useMemo(
    () =>
    ({
      ['none']: { radius: 0, shadowOpacity: 0 },
      ['medium']: { radius: X_MEDIUM_BORDER_RADIUS, shadowOpacity: 0.23 },
      ['large']: { radius: X_LARGE_BORDER_RADIUS, shadowOpacity: 0.23 }
    }?.[typeRadius]),
    [typeRadius]
  );

  const containerStyles = useMemo(
    () => [
      styles.container,
      { padding, borderRadius: cardStyles.radius, shadowOpacity: cardStyles.shadowOpacity, height }
    ],
    [cardStyles.radius, cardStyles.shadowOpacity, height, padding]
  );

  return <View onLayout={onLayout} style={containerStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: BASE_MARGIN,
    backgroundColor: GRAY_SCALE.WHITE,
    shadowColor: '#000',
    marginHorizontal: 2,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2.62,
    elevation: 4
  }
});
