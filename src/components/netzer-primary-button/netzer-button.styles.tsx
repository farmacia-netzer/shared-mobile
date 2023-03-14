
import { StyleSheet } from "react-native";
import { ThemeI } from "../../context/theme/theme-context";
import { FONT_SIZE } from "../../theme/typography.constant";

export const stylesComponent = (theme: ThemeI) => StyleSheet.create({
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
        backgroundColor: theme.colors.primary
    },
    primaryLight: {
        backgroundColor: "#b4e1ff"
    },
    primaryLightOutline: {
        backgroundColor: "#F1F7FB",
        borderColor: theme.colors.primary,
        borderWidth: 1
    },
    primaryOutline: {
        borderColor: theme.colors.primary,
        borderWidth: 1
    },
    secondary: {
        backgroundColor: theme.secondary
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

