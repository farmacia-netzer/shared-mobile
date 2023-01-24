/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-perf/jsx-no-new-function-as-prop */
import React, { useCallback, useEffect, useState } from 'react';

import { useForm } from '##hooks/useForm';
import {
  NetzerPrimaryButton,
  NetzerPrimaryButtonProps
} from '##component/netzer-primary-button/netzer-primary-button.component';
import { NetzerTextInput, NetzerTextInputProps } from '##component/netzer-text-input';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

interface NetzerFormProps {
  enableScroll?: boolean;
  fields: NetzerTextInputProps[];
  buttons: NetzerPrimaryButtonProps[];
  onSubmit(form: any): void;
}

export const NetzerForm: React.FC<NetzerFormProps> = ({
  fields,
  buttons,
  enableScroll = true,
  onSubmit
}: NetzerFormProps) => {
  const initialState = {};
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const { form, onChange } = useForm(initialState);

  useEffect(() => {
    const kds = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardShown(true));
    const kdh = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardShown(false));

    return () => {
      kds.remove();
      kdh.remove();
    };
  }, [setIsKeyboardShown]);

  fields.forEach(({ name, value }) => {
    initialState[name] = value;
  });

  const isScrollEnabled = () => {
    return isKeyboardShown && enableScroll;
  };

  const _onSubmit = useCallback(() => {
    Keyboard.dismiss();
    onSubmit(form);
  }, [form, onSubmit]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView scrollEnabled={isScrollEnabled()}>
        {fields.map((field: NetzerTextInputProps) => (
          <NetzerTextInput
            key={field.name}
            {...field}
            value={form[field.name]}
            onChange={(text) => {
              onChange(text, field.name);
            }}
            onSubmitEditing={_onSubmit}
          />
        ))}
        {buttons?.map((button: NetzerPrimaryButtonProps) => (
          <NetzerPrimaryButton
            key={button.text}
            {...button}
            onPress={() => {
              Keyboard.dismiss();
              button.onPress(form);
            }}
          />
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
