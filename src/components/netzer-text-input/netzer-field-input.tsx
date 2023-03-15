import { isIos, isAndroid } from "../../services/device/platform";
import React, { useCallback, useContext } from "react";
import { NetzerTextInput } from "./netzer-text-input.component";
import { ThemeContext } from "../../context/theme/theme-context";

export const NetzerFieldInput = ({
    name,
    value,
    config,
    onFieldUpdate,
    onFieldBlur,
    onFieldSubmit,
    fieldStyle,
    styleName,
    fieldErrors
}) => {
    const { theme } = useContext(ThemeContext);
    const [iconFocus, setIconFocus] = React.useState(false);
    const [icon, setIcon] = React.useState(config?.iconFocus ?? undefined);
    const [iconAccessibilityLabel, setIconAccessibilityLabel] = React.useState(
        config?.iconAccessibilityLabel ?? undefined
    );
    const [secureTextEntry, setSecureTextEntry] = React.useState(config?.secureTextEntry ?? false);
    const defaultKeyboard = isIos ? 'ascii-capable' : 'default';
    const [keyboard, setKeyboard] = React.useState(config.keyboardType !== '' ? config.keyboardType : defaultKeyboard);

    const isPasswordType = config.name === 'password';

    const onIconPress = useCallback(() => {
        if (!iconFocus && config?.iconAccessibilityLabel) {
            setIcon(config?.icon);
            setIconAccessibilityLabel(config?.iconAccessibilityLabelFocus);
        } else {
            setIconAccessibilityLabel(config?.iconAccessibilityLabel);
            setIcon(config?.iconFocus);
        }

        if (isAndroid && isPasswordType && secureTextEntry) {
            setKeyboard('visible-password');
        } else {
            setKeyboard(defaultKeyboard);
        }

        setIconFocus(!iconFocus);
        if (config?.canUnsecure) {
            setSecureTextEntry(!secureTextEntry);
        }
    }, [config, iconFocus, secureTextEntry, isPasswordType, defaultKeyboard]);

    return (
        <NetzerTextInput
            returnKeyType={config?.returnKeyType}
            name={config.name}
            style={config?.style}
            fieldStyle={fieldStyle}
            styleName={styleName}
            value={value}
            onChange={onFieldUpdate}
            onBlur={onFieldBlur}
            testID={config?.testID ? config?.testID : 'FIELD-INPUT-' + name}
            secureTextEntry={secureTextEntry}
            patternType={config?.pattern}
            placeholder={config?.placeholder}
            placeholderTextColor={theme.colors.text}
            icon={config.icon}
            onIconPress={onIconPress}
            iconAccessibilityLabel={iconAccessibilityLabel}
            iconTestID={config?.iconTestID ? config?.iconTestID : 'FIELD-ICON-' + name}
            editable={!config?.readonly}
            isRequired={config?.require}
            showRequirements={config?.showRequirements}
            onSubmitEditing={onFieldSubmit}
            autoCorrect={config?.autocorrect ? config?.autocorrect : false}
            autoComplete={config?.autoComplete ? config?.autoComplete : 'off'}
            autoCapitalize={config?.autoCapitalize ? config?.autoCapitalize : 'none'}
            keyboardType={keyboard}
            isValid={!fieldErrors[name]}
            message={fieldErrors[name]?.message}
            isFloatingLabel={true}
            mask={''}
            maxLength={config?.maxLength}
            multiline={config.multiline}
        />
    );
};
