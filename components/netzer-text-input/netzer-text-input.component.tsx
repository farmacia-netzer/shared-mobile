import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';

// TODO: me quede completando este componente

import { styles, ICON_SIZE } from './netzer-text-input.style';
import { INPUT_STYLE_NAMES } from './netzer-text-input.constant';

// import { TEST_ID } from '##services/test-id';

import { maskedInputText } from '##services/mask';
import { NetzerTextInputMask } from '##component/netzer-text-input-mask';
import { ICON_GLYPH_MAP } from '##component/netzer-icon/netzer-icon.constant';
import { NetzerIconButton } from '##component/netzer-icon-button';
import { NetzerFloatingLabel } from '##component/netzer-floating-label';

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
  onIconPress,
  iconTestID,
  blurOnSubmit = false,
  editable = true,
  isRequired = false,
  isValid = true,
  message = '',
  isFloatingLabel = false,
  mask = '',
  isUnderlined = true,
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
        <NetzerFloatingLabel
          inputStyle={inputStyle}
          isFocused={isInputFocused}
          isVisible={isFloatingLabel}
          testID={testID + '-FLOATING-LABEL'}
          placeholder={inputPlaceHolder || ''}
          placeholderTextColor={placeholderTextColor}
          value={maskedInputText(value || '', mask).unmasked}
        />
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
          placeholderTextColor={isFloatingLabel ? 'transparent' : placeholderTextColor}
          {...rest}
        />
        {icon ? (
          <NetzerIconButton
            size={ICON_SIZE}
            testID={iconTestID || ''}
            color={'CONTRAST_40'}
            onPress={onIconPress}
            glyph={ICON_GLYPH_MAP[icon]}
            buttonStyle={styles.iconButton}
          />
        ) : null}
      </View>
      {isUnderlined && <View style={underlineStyle} />}
      {/* {!isValid && message && name !== 'password' && !showRequirements ? <ValidationText message={message} /> : null} */}
    </View>
  );
};

// WLTextInput.propTypes = {
//   autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
//   autoComplete: PropTypes.oneOf([
//     'off',
//     'username',
//     'password',
//     'email',
//     'name',
//     'tel',
//     'street-address',
//     'postal-code',
//     'cc-number',
//     'cc-csc',
//     'cc-exp',
//     'cc-exp-month',
//     'cc-exp-year'
//   ]),
//   autoCorrect: PropTypes.bool,
//   blurOnSubmit: PropTypes.bool,
//   editable: PropTypes.bool,
//   icon: PropTypes.string,
//   keyboardType: PropTypes.oneOf([
//     'default',
//     'ascii-capable',
//     'number-pad',
//     'decimal-pad',
//     'numeric',
//     'email-address',
//     'cellphone-pad',
//     'visible-password'
//   ]),
//   onIconPress: function (props, propName) {
//     if (props.icon && (props[propName] === undefined || typeof props[propName] !== 'function')) {
//       return new Error('Please provide a onIconPress function!');
//     }
//   },
//   iconAccessibilityLabel: function (props, propName) {
//     if (props.icon && (props[propName] === undefined || typeof props[propName] !== 'string')) {
//       return new Error('Please provide a iconAccessibilityLabel string!');
//     }
//   },
//   iconTestID: function (props, propName) {
//     if (props.icon && (props[propName] === undefined || typeof props[propName] !== 'string')) {
//       return new Error('Please provide a iconTestID string!');
//     }
//   },
//   onChange: PropTypes.func,
//   onSubmitEditing: PropTypes.func,
//   placeholder: PropTypes.string,
//   value: PropTypes.string,
//   isValid: PropTypes.bool,
//   message: PropTypes.string,
//   placeholderTextColor: PropTypes.string,
//   secureTextEntry: PropTypes.bool,
//   textContentType: PropTypes.oneOf([
//     'none',
//     'URL',
//     'addressCity',
//     'addressCityAndState',
//     'addressState',
//     'countryName',
//     'creditCardNumber',
//     'emailAddress',
//     'familyName',
//     'fullStreetAddress',
//     'givenName',
//     'jobTitle',
//     'location',
//     'middleName',
//     'name',
//     'namePrefix',
//     'nameSuffix',
//     'nickname',
//     'organizationName',
//     'postalCode',
//     'streetAddressLine1',
//     'streetAddressLine2',
//     'sublocality',
//     'telephoneNumber',
//     'username',
//     'password'
//   ]),
//   styleName: PropTypes.oneOf(Object.values(INPUT_STYLE_NAMES)),
//   onBlur: PropTypes.func,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   fieldStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   mask: PropTypes.string,
//   isUnderlined: PropTypes.bool
// };
