import { COLOR_PRIMARY_LIGHT, COLOR_PRIMARY, COLOR_SECONDARY, COLOR_SECONDARY_LIGHT, COLOR_DANGER, COLOR_DANGER_LIGHT } from "##theme/colors.constant";
import { FONT_SIZE } from "##theme/typography.constant";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";

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

export const styles = StyleSheet.create({
    primaryContainer: {
        ...container,
        borderColor: COLOR_PRIMARY,
        backgroundColor: COLOR_PRIMARY_LIGHT
    },
    primaryTitle: {
        ...title,
        color: COLOR_PRIMARY
    },
    primaryDescription: {
        ...description,
        color: COLOR_PRIMARY
    },
    secondaryContainer: {
        ...container,
        borderColor: COLOR_SECONDARY,
        backgroundColor: COLOR_SECONDARY_LIGHT
    },
    secondaryTitle: {
        ...title,
        color: COLOR_SECONDARY
    },
    secondaryDescription: {
        ...description,
        color: COLOR_SECONDARY
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