import { TextInput } from 'react-native';
import React, { useMemo, useCallback, useContext } from 'react';
import { maskedInputText } from '../../services/mask';
import { ThemeContext } from '../../context/theme/theme-context';



export const NetzerTextInputMask = (props) => {
  const { mask, value, onChange, style, allowSpaces, ...rest } = props;
  const { theme } = useContext(ThemeContext)

  const maskedResult = useMemo(() => {
    return maskedInputText(value || '', mask);
  }, [mask, value]);

  const handleChangeText = useCallback(
    (text: string) => {
      if (!allowSpaces) if (text.charAt(text.length - 1) === ' ') return;
      const result = maskedInputText(text, mask);
      onChange && onChange(result.masked, result.unmasked);
    },
    [mask, allowSpaces, onChange]
  );

  return <TextInput style={{
    ...style,
    color: theme.colors.text,
    ...(props.multiline && { minHeight: 70, paddingTop: 10 })
  }}
    {...rest}
    value={maskedResult.masked}
    onChangeText={handleChangeText}
  />;
};
