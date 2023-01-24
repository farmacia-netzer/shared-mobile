import React, { ReactElement, useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { BASE_MARGIN, BASE_PADDING, XLARGE_BORDER_RADIUS, X_MEDIUM_BORDER_RADIUS } from '##theme/dimensions.constant';
import { GRAY_SCALE } from '##theme/grayscale.constant';

interface NetzerCardProps {
  children: ReactElement,
  padding?: number
  typeRadius?: 'medium' | 'large'
  height?: number | string
}
export const NetzerCard = ({ children, padding = BASE_PADDING, typeRadius = 'medium', height }: NetzerCardProps) => {

  const getRadiusBorder = useCallback(() => ({
    ['medium']: X_MEDIUM_BORDER_RADIUS,
    ['large']: XLARGE_BORDER_RADIUS
  }?.[typeRadius]), [typeRadius])

  const containerStyles = useMemo(() => [styles.container, { padding, borderRadius: getRadiusBorder(), height }], [getRadiusBorder, height, padding])

  return <View style={containerStyles}>{children}</View>;

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
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  }
});
