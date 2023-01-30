import RadioCheck from '##assets/svg/radio-check.svg';
import RadioUnCheck from '##assets/svg/radio-uncheck.svg';

import { NORMAL_MARGIN, SMALL_MARGIN, XX_LARGE_SPACING } from "##theme/dimensions.constant";
import React, { useCallback, useMemo } from "react";
import { Pressable, StyleSheet } from "react-native";

export const WLRadioButton = ({ selected, onChange, value, children }) => {
    const Icon = selected ? RadioCheck : RadioUnCheck

    const onPress = useCallback(() => {
        onChange(value);
    }, [onChange, value]);

    const getAccessibilityState = useMemo(() => {
        return { selected };
    }, [selected]);

    return (
        <Pressable
            style={styles.item}
            accessibilityRole="radio"
            onPress={onPress}
            accessibilityState={getAccessibilityState}
        >
            <Icon style={styles.icon} width={22} height={22} />
            {children}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    group: {
        width: '100%',
        flex: 1,
        flexDirection: 'column'
    },

    item: {
        paddingVertical: NORMAL_MARGIN,
        flexDirection: 'row',
        alignContent: 'flex-start',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlignVertical: 'center',
        textAlign: 'flex-start',
        alignSelf: 'flex-start'
    },
    textRight: {
        maxWidth: XX_LARGE_SPACING * 2
    },
    icon: {
        marginRight: SMALL_MARGIN + 3,
        flex: 1
    }
});
