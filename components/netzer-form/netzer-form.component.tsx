import React, { ReactElement, useCallback, useMemo } from 'react';

import { shapeYupFormFields } from '##component/netzer-form/wl-field.utils';
import { NetzerTextInputProps } from '##component/netzer-text-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NetzerField } from './netzer-field.component';

interface NetzerFormProps {
  enableScroll?: boolean;
  fields: IFieldsForm;
  extraScrollHeight?: number
  onSubmit(form: any): void;
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
  onSubmit
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
      onSubmit(data);
    },
    [onSubmit]
  );

  return (
    <KeyboardAwareScrollView extraScrollHeight={extraScrollHeight} extraHeight={extraScrollHeight + extraScrollHeight} enableOnAndroid>
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