import { THEME_COLORS } from '##theme/colors.constant';
import { NORMAL_MARGIN } from '##theme/dimensions.constant';
import { GRAY_SCALE } from '##theme/grayscale.constant';
import { FONT_SIZE } from '##theme/typography.constant';
import React, { useCallback, useState } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { NetzerCheckboxToggle } from './netzer-checkbox-toggle.component';

interface NetzerCheckbox {
  style?: StyleProp<ViewStyle>;
  boxStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  labelContainerStyle?: StyleProp<ViewStyle>;
  readOnly?: boolean;
  value: boolean;
  isValid?: boolean;
  relyExternalState?: boolean;
  label: string;
  onChange(status: boolean): void;
}

export const NetzerCheckbox: React.FC<NetzerCheckbox> = ({
  readOnly = false,
  onChange,
  value = false,
  relyExternalState = true,
  label,
  labelContainerStyle
}: NetzerCheckbox) => {
  const [isChecked, setIsChecked] = useState(value);

  const onPress = useCallback(() => {
    const nowChecked = relyExternalState ? !value : !isChecked;
    setIsChecked(nowChecked);
    onChange?.(nowChecked);
  }, [isChecked, onChange, relyExternalState, value]);

  return (
    <View style={styles.container}>
      <NetzerCheckboxToggle
        accessibilityRole={'checkbox'}
        accessibilityState={{ checked: isChecked }}
        value={value}
        uncheckedColor={GRAY_SCALE.GRAY_10}
        checkedColor={THEME_COLORS.POSITIVE}
        onToggle={onPress}
        relyExternalState={relyExternalState}
        readOnly={readOnly}
        iconSize={26}
      />
      <View style={labelContainerStyle}>
        <Text style={styles.checkboxLabel}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginVertical: NORMAL_MARGIN,
    justifyContent: 'flex-start',
    alignItems:"center",
    flexDirection: 'row'
  },

  checkboxLabel: {
    color: GRAY_SCALE.BLACK,
    marginHorizontal: NORMAL_MARGIN,
    fontSize: FONT_SIZE.NORMAL
  }
});
