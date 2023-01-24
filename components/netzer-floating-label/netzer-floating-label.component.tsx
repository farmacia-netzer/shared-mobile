import React, { useEffect, Fragment } from 'react';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

import { isEmpty } from '##services/util/utils';
import { styles } from './netzer-floating-label.style';
import { FONT_SIZE } from '##theme/typography.constant';

interface NetzerFloatingLabelProp {
  isVisible?: boolean;
  isFocused?: boolean;
  value?: string | null;
  testID?: string;
  placeholder: string;
  placeholderTextColor?: string;
  inputStyle?:
    | {
        paddingTop?: number;
        paddingVertical?: number;
        fontSize?: number;
      }
    | {
        paddingTop?: number;
        paddingVertical?: number;
        fontSize?: number;
      };
}

export const NetzerFloatingLabel: React.FC<NetzerFloatingLabelProp> = ({
  isVisible = true,
  isFocused = false,
  placeholder = '',
  placeholderTextColor = '',
  value = '',
  inputStyle,
  testID
}: NetzerFloatingLabelProp) => {
  const DEFAULT_DURATION = 150;

  const DEFAULT_FONT_SIZE = inputStyle?.fontSize || FONT_SIZE.NORMAL;
  const DEFAULT_FONT_SHIRINK_SIZE = Math.floor(DEFAULT_FONT_SIZE * 0.86);
  const DEFAULT_LABEL_POSITION = inputStyle?.paddingTop || inputStyle?.paddingVertical || 0;

  const floatingLabelPosition = useSharedValue(DEFAULT_LABEL_POSITION);
  const floatingLabelFontSize = useSharedValue(DEFAULT_FONT_SIZE);

  useEffect(() => {
    if (isFocused) {
      floatingLabelPosition.value = 0;
      floatingLabelFontSize.value = DEFAULT_FONT_SHIRINK_SIZE;
    } else {
      if (isEmpty(value)) {
        floatingLabelPosition.value = DEFAULT_LABEL_POSITION;
        floatingLabelFontSize.value = DEFAULT_FONT_SIZE;
      } else {
        floatingLabelPosition.value = 0;
        floatingLabelFontSize.value = DEFAULT_FONT_SHIRINK_SIZE;
      }
    }
  }, [
    isFocused,
    value,
    floatingLabelPosition,
    floatingLabelFontSize,
    DEFAULT_LABEL_POSITION,
    DEFAULT_FONT_SIZE,
    DEFAULT_FONT_SHIRINK_SIZE
  ]);

  const floatingLabelStyle = useAnimatedStyle(() => {
    return {
      top: withTiming(floatingLabelPosition.value, { duration: DEFAULT_DURATION })
    };
  });

  const floatingLabelTextStyle = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(floatingLabelFontSize.value, { duration: DEFAULT_DURATION }),
      color: placeholderTextColor
    };
  });

  return (
    <Fragment>
      {isVisible ? (
        <Animated.View
          accessibilityElementsHidden={true}
          importantForAccessibility="no-hide-descendants"
          animation-config={{ useNativeDriver: true }}
          style={[styles.floatingLabel, floatingLabelStyle]}
          testID={testID + '-CONTAINER'}
        >
          <Animated.Text
            animation-config={{ useNativeDriver: true }}
            testID={testID + '-TEXT'}
            style={floatingLabelTextStyle}
          >
            {placeholder}
          </Animated.Text>
        </Animated.View>
      ) : null}
    </Fragment>
  );
};
