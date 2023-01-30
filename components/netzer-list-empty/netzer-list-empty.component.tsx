import { BASE_MARGIN, BASE_PADDING } from '##theme/dimensions.constant';
import { GRAY_SCALE } from '##theme/grayscale.constant';
import { FONT_SIZE } from '##theme/typography.constant';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { NetzerText } from '../netzer-text';

interface NetzerListEmptyProps {
  Image: Function | null;
  text: string;
  description?: string;
}

export const NetzerListEmpty: FC<NetzerListEmptyProps> = ({ Image, text, description }) => {
  return (
    <View style={styles.empty}>
      {Image && <Image />}
      <NetzerText style={styles.emptyText} text={text} fontStyle={'BOLD'} type="TITLE" />
      {description && <NetzerText style={styles.description} text={description} fontStyle={'BOLD'} />}
    </View>
  );
};

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyText: {
    fontSize: FONT_SIZE.LARGE,
    marginTop: 30,
    color: GRAY_SCALE.GRAY_50
  },
  description: {
    marginTop: 10,
    color: GRAY_SCALE.GRAY_50,
    textAlign: "center",
    lineHeight: 25,
  }
});
