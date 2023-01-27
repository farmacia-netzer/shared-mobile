import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';

import { shapeYupFormFields } from '##component/netzer-form/wl-field.utils';
import { NetzerTextInputProps } from '##component/netzer-text-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { NetzerField } from './netzer-field.component';

interface NetzerFormProps {
  enableScroll?: boolean;
  fields: IFieldsForm
  onSubmit(form: any): void;
  footerSection: (onSubmit: Function) => ReactElement
}
export interface IFieldsForm {
  [key: string]: {
    type: 'text',
    configuration: NetzerTextInputProps
  }
}

export const NetzerForm: React.FC<NetzerFormProps> = ({
  fields: FieldsWithoutConversion,
  enableScroll = true,
  footerSection,
  onSubmit
}: NetzerFormProps) => {
  const initialState = {};
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const schema = shapeYupFormFields(FieldsWithoutConversion);
  const methods = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const fields = useMemo(() => {
    return Object.values(FieldsWithoutConversion).map(field => field.configuration)
  }, [FieldsWithoutConversion])

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

  const _onSubmit = useCallback((data) => {
    Keyboard.dismiss();
    onSubmit(data)
  }, [onSubmit]);

  return (
    <FormProvider {...methods} >
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView scrollEnabled={isScrollEnabled()}>
          {fields.map((field: NetzerTextInputProps, index) => (
            <NetzerField
              key={'field-' + index}
              type={field.type}
              fieldName={field.name}
              fieldConfig={field}
              onFieldSubmit={methods.handleSubmit(_onSubmit)}
              fieldStyle={{}}
              styleName={''}
            />
          ))}
          {footerSection(methods.handleSubmit(_onSubmit))}
        </ScrollView>
      </KeyboardAvoidingView>
    </FormProvider>
  );
};
