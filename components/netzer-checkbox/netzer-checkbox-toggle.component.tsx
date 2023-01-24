import React, { useCallback, useState } from 'react';
import { Pressable } from 'react-native';
import { DEFAULT_ICON_CHECKED_COLOR, DEFAULT_ICON_UNCHECKED_COLOR, styles } from './netzer-checkbox-toggle.style';
import { NetzerIcon } from '../netzer-icon/netzer-icon.component';
import { ICON_GLYPH_MAP } from '../netzer-icon/netzer-icon.constant';

export const NetzerCheckboxToggle = ({
  value = false,
  onToggle,
  relyExternalState = false,
  readOnly = false,
  iconSize = 22,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(value);
  const onPress = useCallback(() => {
    const nowChecked = relyExternalState ? !value : !isChecked;
    setIsChecked(nowChecked);
    onToggle?.(nowChecked);
  }, [isChecked, onToggle, relyExternalState, value]);

  const isCheckVisible = !relyExternalState ? isChecked : value;

  return (
    <Pressable
      onPress={onPress}
      hitSlop={20}
      style={styles.container}
      disabled={readOnly}
      accessibilityRole={'checkbox'}
      accessibilityState={{ checked: isCheckVisible }}
      {...rest}
    >
      {!isCheckVisible ? (
        <NetzerIcon
          glyph={ICON_GLYPH_MAP.CHECKBOX_BLANK_OUTLINE}
          color={DEFAULT_ICON_UNCHECKED_COLOR}
          size={iconSize}
        />
      ) : (
        <NetzerIcon
          glyph={ICON_GLYPH_MAP.CHECKBOX_CHECKED_OUTLINE}
          color={DEFAULT_ICON_CHECKED_COLOR}
          size={iconSize}
        />
      )}
    </Pressable>
  );
};
