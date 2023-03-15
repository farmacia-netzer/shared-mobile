import React, { FC, ReactNode, useContext, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext, ThemeI } from '../../context/theme/theme-context';
import { NetzerText } from '../netzer-text';

interface NetzerInfo {
  Icon: Function;
  title: string;
  description: string | ReactNode;
}

export const NetzerInfo: FC<NetzerInfo> = ({ Icon, title, description }) => {
  const { theme } = useContext(ThemeContext);
  const styles = useMemo(() => stylesComponent(theme), [theme])

  return (
    <View style={styles.boxHeaderSection}>
      <Icon style={styles.image} width={110} height={110} />
      <NetzerText style={styles.title} text={title} type={'TITLE'} />
      {typeof description === 'string' ?
        <NetzerText text={description} style={styles.description} type="SUBTITLE" />
        :
        description
      }
    </View>
  );
};
const stylesComponent = (theme: ThemeI) => StyleSheet.create({
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
    paddingTop: 25,
    color: theme.colors.text
  },
  description: {
    textAlign: 'center',
    margin: 'auto',
    marginTop: 10,
    color: '#666666'
  }
});
