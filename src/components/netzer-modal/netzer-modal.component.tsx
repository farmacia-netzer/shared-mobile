
import React, { ReactNode, useCallback, useContext, useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/theme/theme-context';
import { FONT_SIZE } from '../../theme/typography.constant';
import { ICON_GLYPH_MAP } from '../netzer-icon/netzer-icon.constant';
import { NetzerPrimaryButton } from '../netzer-primary-button/netzer-primary-button.component';
import { NetzerText } from '../netzer-text';


interface NetzerModalProps {
  title: string
  onClose?: Function
  children: ReactNode
  withoutBoxPadding?: boolean;
  withSafeAreaBottom?: boolean;
  position?: number
  navigationActions: Function
}

export const NetzerModal = ({ title, children, onClose, withoutBoxPadding = false, position = 1, withSafeAreaBottom = true, navigationActions }: NetzerModalProps) => {
  const { goBack, navigation } = navigationActions()
  const { bottom } = useSafeAreaInsets()
  const { theme } = useContext(ThemeContext);

  const onCloseModal = useCallback(() => {
    onClose ? onClose() : goBack()
  }, [goBack, onClose])

  const titleSection = useCallback(() => {
    return <NetzerText style={styles.title} text={title} />
  }, [title])

  const closeButton = useCallback(() => {
    return <NetzerPrimaryButton onPress={onCloseModal} glyph={ICON_GLYPH_MAP.CLOSE_OUTLINE} type="PRIMARY_LIGHT" size='SMALL' style={styles.closeButton} />
  }, [onCloseModal])

  useEffect(() => {
    navigation.setOptions({
      headerRight: closeButton,
      headerTitle: titleSection,
      headerLeft: null,
      presentation: 'modal',
      headerStyle: {
        height: 100,
        shadowOpacity: 0,
        backgroundColor: theme.colors.primary
      }
    })

  }, [closeButton, navigation, onCloseModal, title, titleSection]);


  const containerStyles = useMemo(() => ({
    ...styles.boxContainer,
    backgroundColor: theme.colors.background,
    paddingBottom: withSafeAreaBottom ? bottom : 0,
    ...(withoutBoxPadding ? { paddingHorizontal: 0 } : { paddingHorizontal: '4%' })
  }), [bottom, withSafeAreaBottom, withoutBoxPadding])

  return (
    <View style={{ ...styles.container, backgroundColor: theme.colors.primary }}>
      <View style={containerStyles}>
        {children}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    fontFamily: 'Avenir Next',
    fontSize: FONT_SIZE.MEDIUM,
    textAlign: "center",
    fontWeight: "700",
    color: "white"
  },
  closeButton: {
    width: 40,
    marginRight: 20
  },
  boxContainer: {
    flex: 1,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    shadowColor: '#0064a6',
    shadowOffset: {
      width: 10,
      height: 1
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10
  }
});
