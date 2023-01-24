import { TextInput } from 'react-native';
import React, { useMemo, useCallback } from 'react';

import { maskedInputText } from '##services/mask';

export const NetzerTextInputMask = (props) => {
  const { mask, value, onChange, style, allowSpaces, ...rest } = props;

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

  return <TextInput {...rest} style={style} value={maskedResult.masked} onChangeText={handleChangeText} />;
};
