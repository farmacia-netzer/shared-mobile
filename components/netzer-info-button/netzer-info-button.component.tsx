import { NetzerText } from '##component/netzer-text';
import { textShorter } from '##shared/helpers/text.helpers';
import { GRAY_SCALE } from '##theme/grayscale.constant';
import { FONT_SIZE } from '##theme/typography.constant';
import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface NetzerInfoButtonProps {
    title: string
    description: string
    Icon: Function;
    rightSection?: ReactNode
    containerStyles?: StyleProp<ViewStyle> | any
}

export const NetzerInfoButton = ({ title, description, Icon, rightSection, containerStyles }: NetzerInfoButtonProps) => {
    return (
        <View style={{ ...styles.container, ...(containerStyles && containerStyles) }}>
            <Icon style={styles.image} width={40} height={20} />
            <View style={styles.content}>
                <NetzerText text={textShorter(title, 29)} style={styles.title} />
                <NetzerText text={textShorter(description, rightSection ? 50 : 70)} type="SUBTITLE" />
            </View>
            <View>
                {rightSection}
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
        height: 75,
        paddingHorizontal: 13,
        paddingVertical: 8,
        marginVertical: 4
    },
    image: {},
    content: { flex: 1 },
    title: {
        fontWeight: '700',
        marginBottom: 4,
        fontSize: FONT_SIZE.NORMAL
    }
});
