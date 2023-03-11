import React, { FC, useContext, useMemo } from 'react';
import { View } from 'react-native';

import { FONT_SIZE } from '##theme/typography.constant';
import { StyleSheet } from 'react-native';
import { ThemeContext } from "##ui/context/theme-context";

interface NetzerCardLayoutProps {
  children: Array<React.ReactElement> | React.ReactElement;
  withoutBoxPadding?: boolean;
}

export const NetzerCardLayout: FC<NetzerCardLayoutProps> = ({ children, withoutBoxPadding = false }) => {
  const { theme } = useContext(ThemeContext);

  const style = useMemo(() => NetzerCardLayoutStyles(theme), [theme]);

  return (
    <View style={style.container}>
      <View
        style={{
          ...style.boxContainer,
          ...(withoutBoxPadding ? { paddingHorizontal: 0 } : { paddingHorizontal: '4%' })
        }}
      >
        {children}
      </View>
    </View>
  );
};

export const NetzerCardLayoutStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  theme.colors.background,
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
    backgroundColor: theme.colors.background,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40
  }
});
