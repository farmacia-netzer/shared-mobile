import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';

import { FONT_SIZE } from '##theme/typography.constant';
import { StyleSheet } from 'react-native';
import { getTheme } from '##theme/app-theme';
import { NetzerHeader } from '##component/netzer-header';
import { COLOR_PRIMARY } from '##theme/colors.constant';

interface NetzerCardLayoutProps {
  children: Array<React.ReactElement> | React.ReactElement;
  title: string | ReactNode;
  rightSection?: ReactNode;
  showGoBackIcon?: boolean;
  withoutBoxPadding?: boolean
}

export const NetzerCardLayout: FC<NetzerCardLayoutProps> = ({ children, title, rightSection, showGoBackIcon, withoutBoxPadding = false }) => {
  return (
    <View style={NetzerCardLayoutStyles.container}>
      <NetzerHeader title={title} rightSection={rightSection} showGoBackIcon={showGoBackIcon} />
      <View style={{ ...NetzerCardLayoutStyles.boxContainer, ...(withoutBoxPadding ? { paddingHorizontal: 0 } : { paddingHorizontal: '7%' }) }}>{children}</View>
    </View>
  );
};

export const NetzerCardLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY
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
    backgroundColor: 'white',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50
  }
});
