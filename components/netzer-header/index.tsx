import { isIos } from '##common/platform';
import { useNetzerNavigation } from '##hooks/useNetzerNavigation';
import { FONT_SIZE } from '##theme/typography.constant';
import React, { FC, ReactNode, useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NetzerIcon } from '../netzer-icon/netzer-icon.component';
import { ICON_GLYPH_MAP } from '../netzer-icon/netzer-icon.constant';

interface NetzerHeaderProps {
  title: string | ReactNode;
  rightSection?: ReactNode;
  showGoBackIcon?: boolean;
}

export const NetzerHeader: FC<NetzerHeaderProps> = ({ showGoBackIcon = true, title, rightSection }) => {
  const navigation = useNetzerNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView>
      <View style={styles.container} >
        {showGoBackIcon ? (
          <Pressable onPress={goBack}>
            <View style={styles.backIcon}>
              <NetzerIcon color="white" glyph={ICON_GLYPH_MAP.CHEVRON_LEFT} size={15} />
            </View>
          </Pressable>
        ) : (
          <View />
        )}
        <View style={styles.center}>{typeof title === 'string' ? <Text style={styles.title}>{title}</Text> : title}</View>
        <View>{rightSection}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop:  isIos ? 5 : '5%',
    marginBottom: isIos ? 0 : '7%'
  },
  backIcon: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0073bf',
    borderRadius: 10
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'Avenir Next',
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: "center",
    fontSize: FONT_SIZE.MEDIUM,
    color: '#FFFFFF'
  }
});
