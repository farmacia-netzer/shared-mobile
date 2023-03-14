
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ThemeI } from "../../context/theme/theme-context";
import { COLOR_DANGER, COLOR_DANGER_LIGHT, COLOR_PRIMARY_LIGHT, COLOR_SECONDARY_LIGHT } from "../../theme/colors.constant";
import { FONT_SIZE } from "../../theme/typography.constant";

const container: StyleProp<ViewStyle> = {
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1
}

const title: StyleProp<TextStyle> = {
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: "700",
    marginVertical: 5,
    fontFamily: 'Avenir Next'
}

const description: StyleProp<TextStyle> = {
    fontWeight: '600',
    fontFamily: 'Avenir Next',
    marginVertical: 5,
    fontSize: FONT_SIZE.NORMAL
}

export const stylesComponent = (theme: ThemeI) => StyleSheet.create({
    primaryContainer: {
        ...container,
        borderColor: theme.colors.primary,
        backgroundColor: COLOR_PRIMARY_LIGHT
    },
    primaryTitle: {
        ...title,
        color: theme.colors.primary
    },
    primaryDescription: {
        ...description,
        color: theme.colors.primary
    },
    secondaryContainer: {
        ...container,
        borderColor: theme.colors.primary,
        backgroundColor: COLOR_SECONDARY_LIGHT
    },
    secondaryTitle: {
        ...title,
        color: theme.colors.primary
    },
    secondaryDescription: {
        ...description,
        color: theme.colors.primary
    },
    dangerContainer: {
        ...container,
        borderColor: COLOR_DANGER,
        backgroundColor: COLOR_DANGER_LIGHT
    },
    dangerTitle: {
        ...title,
        color: COLOR_DANGER
    },
    dangerDescription: {
        ...description,
        color: COLOR_DANGER
    }
});