import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { NetzerText } from '../netzer-text';

interface NetzerInfo {
  Icon: Function;
  title: string;
  description: string;
}

export const NetzerInfo: FC<NetzerInfo> = ({ Icon, title, description }) => {
  return (
    <View style={styles.boxHeaderSection}>
      <Icon style={styles.image} width={110} height={110} />
      <NetzerText style={styles.title} text={title} type={'TITLE'} />
      <NetzerText text={description} style={styles.description} type="SUBTITLE" />
    </View>
  );
};
const styles = StyleSheet.create({
  boxHeaderSection: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  image: {
    marginTop: 60
  },
  title: {
    paddingTop: 25
  },
  description: {
    textAlign: 'center',
    margin: 'auto',
    marginTop: 10,
    color: '#666666'
  }
});
