import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BASE_MARGIN } from '##theme/dimensions.constant';
import { GRAY_SCALE } from '##theme/grayscale.constant';

export const DIVIDER_HEIGHT = 1;
export const DIVIDER_COLOR_SOLID = GRAY_SCALE.GRAY_80;

export const NetzerListItemDivider = ({ dividerStyles, isDashed = false }) => {
  const dividerStyle = isDashed
    ? {
        ...styles.dashed,
        ...dividerStyles
      }
    : {
        ...styles.divider,
        ...dividerStyles
      };
  if (isDashed) {
    return (
      <View style={styles.dashedContainer}>
        <View style={dividerStyle} />
      </View>
    );
  }
  return <View style={dividerStyle} />;
};

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: DIVIDER_HEIGHT,
    borderColor: DIVIDER_COLOR_SOLID,
    marginBottom: BASE_MARGIN
  },
  dashedContainer: {
    height: 1,
    overflow: 'hidden',
    marginBottom: BASE_MARGIN
  },
  dashed: {
    borderStyle: 'dashed',
    borderColor: GRAY_SCALE.GRAY_70,
    borderWidth: 1,
    height: 0
  }
});
