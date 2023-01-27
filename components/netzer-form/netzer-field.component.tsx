
import { NetzerFieldInput } from '##component/netzer-text-input/netzer-field-input';
import React, { useCallback } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const NetzerField = ({ type, fieldName, fieldConfig, onFieldSubmit, fieldStyle, styleName }) => {
    const { control, formState } = useFormContext();
    const { errors } = formState;

    const getFormRenderer = useCallback(
        ({ field: { onChange, onBlur, value } }) => {
            switch (type) {
                default:
                    return (
                        <NetzerFieldInput
                            name={fieldName}
                            fieldErrors={errors}
                            value={value}
                            config={fieldConfig}
                            onFieldUpdate={onChange}
                            onFieldBlur={onBlur}
                            onFieldSubmit={onFieldSubmit}
                            fieldStyle={fieldStyle}
                            styleName={styleName}
                        />
                    );
            }
        },
        [errors, fieldConfig, fieldName, fieldStyle, onFieldSubmit, styleName, type]
    );

    return <Controller control={control} render={getFormRenderer} name={fieldName} shouldUnregister />;
};