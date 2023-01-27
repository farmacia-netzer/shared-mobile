import React, { ReactNode, useCallback, useMemo } from 'react';
import {
  ActivityIndicator,
  Keyboard, StyleSheet,
  Text, TouchableOpacity,
  View
} from 'react-native';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native-gesture-handler';
import { GLYPH } from '../netzer-icon/netzer-icon.constant';

import { COLOR_PRIMARY, COLOR_SECONDARY } from '##theme/colors.constant';
import { MEDIUM_PADDING, SMALL_SPACING, X_MEDIUM_BORDER_RADIUS } from '##theme/dimensions.constant';
import { FONT_SIZE } from '##theme/typography.constant';
import { NetzerIcon } from '../netzer-icon/netzer-icon.component';
import { GRAY_SCALE } from '##theme/grayscale.constant';


enum EButtonTypes {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  PRIMARY_LIGHT = 'PRIMARY_LIGHT',
  PRIMARY_OUTLINE = 'PRIMARY_OUTLINE',
  TRANSPARENT = 'TRANSPARENT',
  WHITE_BLUR = 'WHITE_BLUR',
  GRAY_OUTLINE = 'GRAY_OUTLINE',
  GRAY_TRANSPARENT = 'GRAY_TRANSPARENT',
}

enum EButtonSizes {
  SMALL = 'SMALL',
  NORMAL = 'NORMAL',
}

type TButtonTypes = | "PRIMARY" | "SECONDARY" | "PRIMARY_LIGHT" | "PRIMARY_OUTLINE" | "TRANSPARENT" | "GRAY_TRANSPARENT" | "WHITE_BLUR" | 'GRAY_OUTLINE';

type TButtonSizes = 'SMALL' | 'NORMAL'

export interface NetzerPrimaryButtonProps {
  text?: string | ReactNode;
  fill?: string;
  testId?: string;
  size?: TButtonSizes;
  width?: number;
  type?: TButtonTypes
  glyph?: GLYPH;
  disabled?: boolean;
  loading?: boolean;
  fromGestureHandler?: boolean;
  onPress: Function
}
export const NetzerPrimaryButton: React.FC<NetzerPrimaryButtonProps> = ({
  text,
  glyph,
  type = EButtonTypes.PRIMARY,
  onPress,
  size = EButtonSizes.NORMAL,
  testId,
  width,
  loading = false,
  disabled = false,
  fromGestureHandler = false,
  ...props
}: NetzerPrimaryButtonProps) => {

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
      [EButtonTypes.SECONDARY]: { background: [styles.secondary] },
      [EButtonTypes.PRIMARY_LIGHT]: { background: [styles.primaryLight] },
      [EButtonTypes.PRIMARY_OUTLINE]: { background: [styles.primaryOutline] },
      [EButtonTypes.TRANSPARENT]: { background: [styles.PrimaryTransparent] },
      [EButtonTypes.WHITE_BLUR]: { background: [styles.whiteBlur] },
      [EButtonTypes.GRAY_OUTLINE]: { background: [styles.grayOutLine] },
      [EButtonTypes.GRAY_TRANSPARENT]: { background: [styles.PrimaryTransparent] }
    }?.[type]);
  }, [type])


  const getButtonColor = () => ({
    [EButtonTypes.PRIMARY]: '#fff',
    [EButtonTypes.SECONDARY]: 'white',
    [EButtonTypes.PRIMARY_LIGHT]: COLOR_PRIMARY,
    [EButtonTypes.PRIMARY_OUTLINE]: COLOR_PRIMARY,
    [EButtonTypes.TRANSPARENT]: COLOR_PRIMARY,
    [EButtonTypes.WHITE_BLUR]: COLOR_PRIMARY,
    [EButtonTypes.GRAY_TRANSPARENT]: GRAY_SCALE.GRAY_70

  }?.[type])

  const containerProps = {
    disabled: disabled || loading,
    style: [{ ...styles.button, padding: buttonSize.button, width }, ...getButtonType().background, disabled || loading ? { opacity: 0.7 } : {}],
    activeOpacity: 0.5,
    testID: testId,
    ...props
  };

  const renderContent = () => {
    if (loading) return <ActivityIndicator color={'#E4F2E4'} />;
    return (
      <View style={styles.container}>
        {glyph && <NetzerIcon glyph={glyph} color={getButtonColor()} size={buttonSize.icon.size} />}
        <Text style={{ ...styles.text, color: getButtonColor() }}>{text}</Text>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderRadius: X_MEDIUM_BORDER_RADIUS
  },
  primary: {
    backgroundColor: COLOR_PRIMARY
  },
  primaryLight: {
    backgroundColor: "#b4e1ff"
  },
  primaryOutline: {
    borderColor: COLOR_PRIMARY,
    borderWidth: 1
  },
  secondary: {
    backgroundColor: COLOR_SECONDARY
  },
  PrimaryTransparent: {
    backgroundColor: "transparent"
  },
  whiteBlur: {
    backgroundColor: "white"
  },
  grayOutLine: {
    borderColor: '#E7E7E7',
    borderWidth: 1
  },
  text: {
    fontWeight: "600",
    textAlign: 'center',
    fontSize: FONT_SIZE.NORMAL
  }
});

