import { NetzerPrimaryButton } from '##component/netzer-primary-button/netzer-primary-button.component';
import { NetzerText } from '##component/netzer-text';
import { GRAY_SCALE } from '##theme/grayscale.constant';
import { FONT_SIZE } from '##theme/typography.constant';
import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

interface NetzerInfoButtonProps {
    title: string
    description: string
    Icon: Function;
    buttonRightText: string
}

export const NetzerInfoButton = ({ title, description, Icon, buttonRightText }: NetzerInfoButtonProps) => {
    const test = useCallback(() => { }, []);
    return (
        <View style={styles.container}>
            <Icon style={styles.image} width={40} height={15} />
            <View>
                <NetzerText text={title} style={styles.title} />
                <NetzerText text={description} type="SUBTITLE" />
            </View>
            <View>
                <NetzerPrimaryButton onPress={test} type="TRANSPARENT" text={buttonRightText} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderColor: GRAY_SCALE.GRAY_70,
        borderRadius: 20,
        paddingHorizontal: 13,
        paddingVertical: 8,
        marginVertical: 4
    },
    image: {},
    title: {
        fontWeight: '700',
        marginBottom: 4,
        fontSize: FONT_SIZE.NORMAL
    }
});
