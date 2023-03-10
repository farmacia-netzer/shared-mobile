import { COLOR_PRIMARY, LIGHT_CONTAINER } from '../../theme/colors.constant';
import { FONT_SIZE } from '../../theme/typography.constant';
import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
interface NetzerCardLayoutProps {
  children: Array<React.ReactElement> | React.ReactElement;
  withoutBoxPadding?: boolean;
}

export const NetzerCardLayout: FC<NetzerCardLayoutProps> = ({ children, withoutBoxPadding = false }) => {
  return (
    <View style={NetzerCardLayoutStyles.container}>
      <View
        style={{
          ...NetzerCardLayoutStyles.boxContainer,
          ...(withoutBoxPadding ? { paddingHorizontal: 0 } : { paddingHorizontal: '4%' })
        }}
      >
        {children}
      </View>
    </View>
  );
};

export const NetzerCardLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY,
    paddingTop: '3%'
  },
  backIcon: {
    width: 20,
    height: 20,
    borderRadius: 5
  },
  headerSection: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  headerSectionContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 30
  },
  titleHeader: {
    fontFamily: 'Avenir Next',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: FONT_SIZE.MEDIUM,
    color: '#FFFFFF'
  },
  boxContainer: {
    flex: 1,
    backgroundColor: LIGHT_CONTAINER,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40
  }
});
