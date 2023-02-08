import { ICON_GLYPH_MAP } from '##component/netzer-icon/netzer-icon.constant';
import { NetzerPrimaryButton } from '##component/netzer-primary-button/netzer-primary-button.component';
import { NetzerText } from '##component/netzer-text';
import { useNetzerNavigation } from '##hooks/useNetzerNavigation';
import { actions } from '##redux/slices/app/app.slice';
import { COLOR_PRIMARY } from '##theme/colors.constant';
import { FONT_SIZE } from '##theme/typography.constant';
import React, { ReactNode, useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';


interface NetzerModalProps {
  title: string
  onClose?: Function
  children: ReactNode
  withoutBoxPadding?: boolean;
  position?: number
}

export const NetzerModal = ({ title, children, onClose, withoutBoxPadding = false, position = 1 }: NetzerModalProps) => {
  const { goBack, navigation } = useNetzerNavigation()
  const { bottom } = useSafeAreaInsets()
  const dispatch = useDispatch()

  const onCloseModal = useCallback(() => {
    onClose ? onClose() : goBack()
  }, [goBack, onClose])

  const titleSection = useCallback(() => {
    return <NetzerText style={styles.title} text={title} />
  }, [title])

  const closeButton = useCallback(() => {
    return <NetzerPrimaryButton onPress={onCloseModal} glyph={ICON_GLYPH_MAP.CLOSE_OUTLINE} type="WHITE_LIGHT_BLUR" size='SMALL' style={styles.closeButton} />
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
        backgroundColor: COLOR_PRIMARY
      }
    })

  }, [closeButton, navigation, onCloseModal, title, titleSection]);

  useEffect(() => {
    dispatch(actions.setAppState({ hideTabBar: true }))
    return () => {
      if (position === 1) { dispatch(actions.setAppState({ hideTabBar: false })) }
    }
  }, [dispatch, position]);

  return (
    <View style={{ ...styles.container }}>
      <View style={{
        ...styles.boxContainer,
        paddingBottom: bottom,
        ...(withoutBoxPadding ? { paddingHorizontal: 0 } : { paddingHorizontal: '4%' })
      }}>
        {children}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY
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
    backgroundColor: 'white',
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
