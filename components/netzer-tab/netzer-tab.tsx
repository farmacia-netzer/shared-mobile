/* eslint-disable react-perf/jsx-no-new-function-as-prop */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-perf/jsx-no-new-array-as-prop */
import React, { FC, useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { GRAY_SCALE } from '##theme/grayscale.constant';
import { LARGE_BORDER_RADIUS, SMALL_PADDING, NORMAL_PADDING } from '##theme/dimensions.constant';

interface NetzerTabProps {
  tab: number;
  titles: string[];
  setTab: (number) => void;
}

export const NetzerTab: FC<NetzerTabProps> = ({ titles, setTab, tab }: NetzerTabProps) => {
  const handleTab = useCallback(
    (_index: number) => {
      setTab(_index);
    },
    [setTab]
  );

  return (
    <View>
      <View style={styles.tabsSection}>
        {titles.map((title, index) => (
          <Pressable
            key={title}
            style={[styles.button, index === tab && styles.buttonActive]}
            onPress={() => handleTab(index)}
          >
            <Text style={[styles.buttonText, index === tab && styles.buttonTextActive]}>{title}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: NORMAL_PADDING,
    borderRadius: LARGE_BORDER_RADIUS
  },
  buttonText: {
    color: GRAY_SCALE.GRAY_50,
    textAlign: 'center',
    fontWeight: '700'
  },
  buttonTextActive: {
    color: 'white'
  },
  tabsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SMALL_PADDING,
    borderRadius: LARGE_BORDER_RADIUS,
    borderWidth: 0.8
  },
  buttonActive: {
    backgroundColor: '#4961DC'
  }
});
