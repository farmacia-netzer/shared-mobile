
import { GRAY_SCALE } from '../../theme/grayscale.constant';
import React from 'react';
import { GestureResponderEvent, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NetzerIcon } from '../netzer-icon/netzer-icon.component';
import { ICON_GLYPH_MAP } from '../netzer-icon/netzer-icon.constant';
import { NetzerText } from '../netzer-text';

interface NetzerInputPhotoProps {
    description: string;
    onPress: (((event: GestureResponderEvent) => void) & (() => void)) | undefined
}

export const NetzerInputPhoto = ({ description, onPress }: NetzerInputPhotoProps) => {
    return (
        <TouchableOpacity style={styles.photoInput} activeOpacity={0.5} onPress={onPress}>
            <NetzerIcon glyph={ICON_GLYPH_MAP.CAMERA_OUTLINE} color={GRAY_SCALE.GRAY_50} size={30} />
            <NetzerText text={description} style={styles.description} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    description: {
        color: GRAY_SCALE.GRAY_50
    },
    photoInput: {
        width: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: GRAY_SCALE.GRAY_50,
        height: 166
    }
});
