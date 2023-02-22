import { COLOR_PRIMARY, COLOR_SECONDARY } from "##theme/colors.constant";
import { FONT_SIZE } from "##theme/typography.constant";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerReverseBetween: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    primary: {
        backgroundColor: COLOR_PRIMARY
    },
    primaryLight: {
        backgroundColor: "#b4e1ff"
    },
    primaryLightOutline: {
        backgroundColor: "#F1F7FB",
        borderColor: COLOR_PRIMARY,
        borderWidth: 1
    },
    primaryOutline: {
        borderColor: COLOR_PRIMARY,
        borderWidth: 1
    },
    secondary: {
        backgroundColor: COLOR_SECONDARY
    },
    PrimaryTransparent: {
        backgroundColor: "transparent"
    },
    whiteBlur: {
        backgroundColor: "white"
    },
    whiteLightBlur: {
        backgroundColor: '#0083d9'
    },
    grayOutLine: {
        borderColor: '#E7E7E7',
        borderWidth: 1
    },
    dangerTransparent: {
        backgroundColor: "transparent"
    },
    text: {
        fontWeight: "600",
        textAlign: 'center',
        fontSize: FONT_SIZE.NORMAL
    }
});

