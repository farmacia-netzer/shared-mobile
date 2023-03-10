import { GRAY_SCALE } from '../../theme/grayscale.constant';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { NetzerIconButton } from '../netzer-icon-button';
import { ICON_GLYPH_MAP } from '../netzer-icon/netzer-icon.constant';
import { NetzerTextInputMask } from '../netzer-text-input-mask';
import { NetzerText } from '../netzer-text/netzer-text.component';
// TODO: me quede completando este componente

import { INPUT_STYLE_NAMES } from './netzer-text-input.constant';
import { ICON_SIZE, styles } from './netzer-text-input.style';

// import { TEST_ID } from '##services/test-id';



export interface NetzerTextInputProps {
  style?: any;
  icon?: string;
  name: string;
  mask?: string;
  value: string;
  testID?: string;
  fieldStyle?: any;
  message?: string;
  isValid?: boolean;
  styleName?: string;
  editable?: boolean;
  iconTestID?: string;
  placeholder?: string;
  isRequired?: boolean;
  autoCorrect?: boolean;
  blurOnSubmit?: boolean;
  allowSpaces?: boolean;
  isUnderlined?: boolean;
  autoCapitalize?: string;
  isFloatingLabel?: boolean;
  showRequirements?: boolean;
  textContentType?: string;
  secureTextEntry?: boolean;
  autoCompleteType?: string;
  placeholderTextColor?: string;
  keyboardType?:
  | 'default'
  | 'ascii-capable'
  | 'number-pad'
  | 'decimal-pad'
  | 'numeric'
  | 'email-address'
  | 'phone-pad'
  | 'visible-password';
  onBlur?: () => void;
  onChange?: (text: string) => void;
  onSubmitEditing?: (_?: any) => void;
  onIconPress?: () => void;
  [any: string | number]: unknown;
}

export const NetzerTextInput: React.FC<NetzerTextInputProps> = ({
  style,
  styleName = INPUT_STYLE_NAMES.NORMAL,
  fieldStyle,
  onChange,
  onBlur,
  name,
  onSubmitEditing,
  placeholder,
  value,
  allowSpaces = true,
  placeholderTextColor = 'black',
  textContentType = 'none',
  secureTextEntry = false,
  autoComplete = 'off',
  autoCorrect = false,
  autoCapitalize = 'none',
  keyboardType = 'ascii-capable',
  testID,
  icon,
  // onIconPress,
  iconTestID,
  blurOnSubmit = false,
  editable = true,
  isRequired = false,
  isValid = true,
  message = '',
  isFloatingLabel = false,
  mask = '',
  isUnderlined = false,
  showRequirements = false,
  ...rest
}: NetzerTextInputProps) => {
  const [inputStyle, setInputStyle] = useState([styles.input, style]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  let inputPlaceHolder = placeholder;

  if (isRequired) {
    inputPlaceHolder += ' (' + 'requerido' + ')';
  }

  const underlineStyle = {
    ...styles.underline,
    ...(editable && !isValid && message && styles.underlineError)
  };

  const onTextInputBlur = useCallback(() => {
    if (isInputFocused !== false) {
      setIsInputFocused(false);
    }

    return onBlur?.();
  }, [isInputFocused, onBlur]);

  const onFocus = useCallback(() => {
    setIsInputFocused(true);
  }, []);

  const onTextInputSubmitEditing = useCallback(() => {
    return onSubmitEditing?.();
  }, [onSubmitEditing]);

  useEffect(() => {
    setInputStyle({
      ...styles.input,
      ...(styleName === INPUT_STYLE_NAMES.LARGE && styles.inputLarge),
      ...(editable ? style : styles.inputDisabled)
    });

    return () => {
      setInputStyle({
        ...styles.input,
        ...(styleName === INPUT_STYLE_NAMES.LARGE && styles.inputLarge),
        ...style
      });
    };
  }, [isValid, style, editable, styleName]);

  const handleOnTextChage = useCallback(
    (masked, unmasked) => {
      return onChange && onChange(unmasked);
    },
    [onChange]
  );

  return (
    <View style={[styles.field, fieldStyle]}>
      <View style={styles.inputContainer}>
        {icon ? (
          <NetzerIconButton
            size={ICON_SIZE}
            testID={iconTestID || ''}
            color={GRAY_SCALE.GRAY_50}
            // onPress={onIconPress}
            glyph={ICON_GLYPH_MAP?.[icon]}
            buttonStyle={styles.iconButton}
          />
        ) : null}
        <NetzerTextInputMask
          mask={mask}
          value={value}
          testID={testID}
          onFocus={onFocus}
          style={inputStyle}
          editable={editable}
          onBlur={onTextInputBlur}
          autoCorrect={autoCorrect}
          allowSpaces={allowSpaces}
          blurOnSubmit={blurOnSubmit}
          autoComplete={autoComplete}
          keyboardType={keyboardType}
          onChange={handleOnTextChage}
          placeholder={inputPlaceHolder}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          textContentType={textContentType}
          onSubmitEditing={onTextInputSubmitEditing}
          placeholderTextColor={placeholderTextColor}
          {...rest}
        />
        {/* {false ? (
          <NetzerIconButton
            size={ICON_SIZE}
            testID={iconTestID || ''}
            color={'CONTRAST_40'}
            // onPress={onIconPress}
            glyph={ICON_GLYPH_MAP['CART_OUTLINE']}
            buttonStyle={styles.iconButton}
          />
        ) : null} */}
      </View>
      {isUnderlined && <View style={underlineStyle} />}

      {!isValid && message && !showRequirements ? <NetzerText text={message} styleName={'INPUT_ERROR'} /> : null}
    </View>
  );
};


