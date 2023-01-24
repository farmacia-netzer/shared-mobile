import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TEST_ID } from '##services/test-id';

export const CircleBackground = () => {
  return <View testID={TEST_ID.AUTH_SCREEN.BACKGROUND} style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 470,
    height: 470,
    left: -42,
    top: 44,
    borderRadius: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.10)'
  }
});
