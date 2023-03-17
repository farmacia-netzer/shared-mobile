import React, { ReactNode, useCallback, useContext, useMemo } from 'react';
import {
  ActivityIndicator,
  Keyboard, StyleProp, Text, TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native-gesture-handler';
import { GLYPH } from '../netzer-icon/netzer-icon.constant';

import { ThemeContext } from '../../context/theme/theme-context';
import { MEDIUM_PADDING, SMALL_SPACING, X_LARGE_BORDER_RADIUS, X_MEDIUM_BORDER_RADIUS } from '../../theme/dimensions.constant';
import { GRAY_SCALE } from '../../theme/grayscale.constant';
import { NetzerIcon } from '../netzer-icon/netzer-icon.component';
import { stylesComponent } from './netzer-button.styles';

enum EButtonTypes {
  PRIMARY = 'PRIMARY',
  PRIMARY_LIGHT = 'PRIMARY_LIGHT',
  PRIMARY_LIGHT_OUTLINE = 'PRIMARY_LIGHT_OUTLINE',
  PRIMARY_OUTLINE = 'PRIMARY_OUTLINE',
  SECONDARY = 'SECONDARY',
  TRANSPARENT = 'TRANSPARENT',
  WHITE_BLUR = 'WHITE_BLUR',
  WHITE_LIGHT_BLUR = 'WHITE_LIGHT_BLUR',
  GRAY_OUTLINE = 'GRAY_OUTLINE',
  GRAY_TRANSPARENT = 'GRAY_TRANSPARENT',
  DANGER_TRANSPARENT = 'DANGER_TRANSPARENT',
}

enum EButtonSizes {
  SMALL = 'SMALL',
  NORMAL = 'NORMAL',
}

enum EButtonRadius {
  SMALL = 'SMALL',
  NORMAL = 'NORMAL',
}

enum EButtonContainer {
  CONTAINER = 'CONTAINER',
  CONTAINER_REVERSE_BETWEEN = 'CONTAINER_REVERSE_BETWEEN'
}

type TButtonTypes =
  // primary
  | "PRIMARY"
  | "PRIMARY_LIGHT"
  | "PRIMARY_LIGHT_OUTLINE"
  | "PRIMARY_OUTLINE"
  // secondary
  | "SECONDARY"
  // transparent
  | "TRANSPARENT"
  // gray
  | "GRAY_TRANSPARENT"
  | 'GRAY_OUTLINE'
  // white
  | "WHITE_BLUR"
  | "WHITE_LIGHT_BLUR"
  // danger
  | 'DANGER_TRANSPARENT';

type TButtonSizes = 'SMALL' | 'NORMAL'

type TButtonRadius = 'SMALL' | 'NORMAL'

type TButtonContainer = 'CONTAINER' | 'CONTAINER_REVERSE_BETWEEN'

export interface NetzerPrimaryButtonProps {
  text?: string | ReactNode;
  fill?: string;
  testId?: string;
  size?: TButtonSizes;
  container?: TButtonContainer
  width?: number;
  type?: TButtonTypes
  radius?: TButtonRadius
  glyph?: GLYPH;
  disabled?: boolean;
  loading?: boolean;
  fromGestureHandler?: boolean;
  onPress: Function
  style?: StyleProp<ViewStyle>
}
export const NetzerPrimaryButton: React.FC<NetzerPrimaryButtonProps> = ({
  text,
  glyph,
  type = EButtonTypes.PRIMARY,
  onPress,
  size = EButtonSizes.NORMAL,
  radius = EButtonRadius.SMALL,
  container = EButtonContainer.CONTAINER,
  testId,
  width,
  loading = false,
  disabled = false,
  fromGestureHandler = false,
  style,
  ...props
}: NetzerPrimaryButtonProps) => {

  const { theme } = useContext(ThemeContext);
  const styles = useMemo(() => stylesComponent(theme), [theme])

  const onClick = useCallback(() => {
    Keyboard.dismiss();
    onPress();
  }, [onPress]);

  const buttonSize = useMemo(() => {
    return ({
      [EButtonSizes.NORMAL]: { button: MEDIUM_PADDING, icon: { size: 22 } },
      [EButtonSizes.SMALL]: { button: SMALL_SPACING, icon: { size: 20 } }
    }?.[size]);
  }, [size])

  const getButtonType = useCallback(() => {
    return ({
      [EButtonTypes.PRIMARY]: { background: [styles.primary] },
      [EButtonTypes.PRIMARY_LIGHT]: { background: [styles.primaryLight] },
      [EButtonTypes.PRIMARY_OUTLINE]: { background: [styles.primaryOutline] },
      [EButtonTypes.PRIMARY_LIGHT_OUTLINE]: { background: [styles.primaryLightOutline] },
      [EButtonTypes.DANGER_TRANSPARENT]: { background: [styles.dangerTransparent] },
      [EButtonTypes.SECONDARY]: { background: [styles.secondary] },
      [EButtonTypes.TRANSPARENT]: { background: [styles.PrimaryTransparent] },
      [EButtonTypes.WHITE_BLUR]: { background: [styles.whiteBlur] },
      [EButtonTypes.WHITE_LIGHT_BLUR]: { background: [styles.whiteLightBlur] },
      [EButtonTypes.GRAY_OUTLINE]: { background: [styles.grayOutLine] },
      [EButtonTypes.GRAY_TRANSPARENT]: { background: [styles.PrimaryTransparent] }
    }?.[type]);
  }, [type, styles])


  const getButtonColor = () => ({
    [EButtonTypes.PRIMARY]: '#fff',
    [EButtonTypes.SECONDARY]: 'white',
    [EButtonTypes.PRIMARY_LIGHT]: theme.text.primary,
    [EButtonTypes.PRIMARY_OUTLINE]: theme.text.primary,
    [EButtonTypes.PRIMARY_LIGHT_OUTLINE]: theme.text.primary,
    [EButtonTypes.DANGER_TRANSPARENT]: 'red',
    [EButtonTypes.TRANSPARENT]: theme.text.primary,
    [EButtonTypes.WHITE_BLUR]: theme.colors.primary,
    [EButtonTypes.WHITE_LIGHT_BLUR]: 'white',
    [EButtonTypes.GRAY_TRANSPARENT]: GRAY_SCALE.GRAY_70
  }?.[type])

  const getButtonRadius = () => ({
    [EButtonRadius.SMALL]: X_MEDIUM_BORDER_RADIUS,
    [EButtonRadius.NORMAL]: X_LARGE_BORDER_RADIUS
  }?.[radius])

  const getButtonContainer = () => ({
    [EButtonContainer.CONTAINER]: styles.container,
    [EButtonContainer.CONTAINER_REVERSE_BETWEEN]: styles.containerReverseBetween
  }?.[container])


  const containerProps = {
    disabled: disabled || loading,
    style: [
      {
        padding: buttonSize.button,
        width,
        borderRadius: getButtonRadius()
      }, ...getButtonType().background, disabled || loading ? { opacity: 0.7 } : {}, style],
    activeOpacity: 0.5,
    testID: testId,
    ...props
  };

  const renderContent = () => {
    if (loading) return <ActivityIndicator color={'#E4F2E4'} />;
    return (
      <View style={getButtonContainer()}>
        {glyph && <NetzerIcon glyph={glyph} color={getButtonColor()} size={buttonSize.icon.size} />}
        {typeof text === 'string' ? <Text style={{ ...styles.text, color: getButtonColor() }}>{text}</Text> : text}
      </View >
    );
  };

  if (fromGestureHandler) {
    return (
      <RNTouchableOpacity {...containerProps} onPress={onClick} accessibilityRole="button">
        {renderContent()}
      </RNTouchableOpacity>
    );
  }

  return (
    <TouchableOpacity {...containerProps} onPress={onClick} accessibilityRole="button">
      {renderContent()}
    </TouchableOpacity>
  );
};
