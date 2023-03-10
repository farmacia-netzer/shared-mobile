
import { FONT_SIZE } from '../../theme/typography.constant';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface NetzerCounterBadgeProps {
    num: number
}

export const NetzerCounterBadge = ({ num }: NetzerCounterBadgeProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{num}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF5858',
        width: 25,
        height: 25,
        borderRadius: 100,
        justifyContent: 'center',
        position: "absolute",
        top: -10,
        right: -20
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: FONT_SIZE.SMALL,
        fontWeight: '900'
    }
});
