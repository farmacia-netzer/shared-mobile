import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NetzerText } from '../netzer-text';
import { FONT_SIZE, LINE_HEIGHT } from '##theme/typography.constant';
import { MEDIUM_MARGIN, SMALL_MARGIN } from '##theme/dimensions.constant';

interface NetzerKeyValueTextProp {
  header: string;
  value: string;
}

export const NetzerKeyValueText: React.FC<NetzerKeyValueTextProp> = ({ header, value }: NetzerKeyValueTextProp) => {
  return (
    <View>
      <NetzerText text={header} fontStyle={FONT_SIZE.SMALL} style={styles.key} />
      <NetzerText text={value ?? 'N/A'} fontStyle={FONT_SIZE.SMALL} style={styles.value} />
    </View>
  );
};
const styles = StyleSheet.create({
  key: {
    fontSize: FONT_SIZE.NORMAL,
    marginTop: MEDIUM_MARGIN,
    marginBottom: SMALL_MARGIN
  },
  value: {
    fontWeight: '400',
    fontSize: FONT_SIZE.XLARGE,
    lineHeight: LINE_HEIGHT.LARGE_MULTILINE
  }
});
