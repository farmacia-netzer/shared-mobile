import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React from 'react';

export const NetzerLoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
