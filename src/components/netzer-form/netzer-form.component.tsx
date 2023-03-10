import React, { ReactElement, ReactNode, useCallback, useMemo } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, FormProvider, useForm, UseFormReset } from 'react-hook-form';
import { Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NetzerField } from './netzer-field.component';
import { NetzerTextInputProps } from '../netzer-text-input';
import { shapeYupFormFields } from './wl-field.utils';

interface NetzerFormProps {
  enableScroll?: boolean;
  fields: IFieldsForm;
  extraScrollHeight?: number
  onSubmit(form: any, reset: UseFormReset<FieldValues>): void;
  headerSection?: ReactNode
  footerSection: (onSubmit: Function) => ReactElement;
}
export interface IFieldsForm {
  [key: string]: {
    type: 'text' | 'checkbox';
    configuration: NetzerTextInputProps;
  };
}

export const NetzerForm: React.FC<NetzerFormProps> = ({
  fields: FieldsWithoutConversion,
  extraScrollHeight = 0,
  footerSection,
  onSubmit,
  headerSection
}: NetzerFormProps) => {
  const initialState = {};

  const schema = shapeYupFormFields(FieldsWithoutConversion);
  const methods = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const fields = useMemo(() => {
    return Object.values(FieldsWithoutConversion).map((field) => field.configuration);
  }, [FieldsWithoutConversion]);

  fields.forEach(({ name, value }) => {
    initialState[name] = value;
  });

  const _onSubmit = useCallback(
    (data) => {
      Keyboard.dismiss();
      onSubmit(data, methods.reset);
    },
    [methods.reset, onSubmit]
  );

  return (
    <KeyboardAwareScrollView extraScrollHeight={extraScrollHeight} extraHeight={extraScrollHeight + extraScrollHeight} enableOnAndroid>
      {headerSection}
      <FormProvider {...methods} >
        {fields.map((field: NetzerTextInputProps, index) => (
          <NetzerField
            key={'field-' + index}
            type={FieldsWithoutConversion[field.name]?.type}
            fieldName={field.name}
            fieldConfig={field}
            onFieldSubmit={methods.handleSubmit(_onSubmit)}
            fieldStyle={{}}
            styleName={''}
          />
        ))}
        {footerSection(methods.handleSubmit(_onSubmit))}
      </FormProvider>
    </KeyboardAwareScrollView>

  );
};