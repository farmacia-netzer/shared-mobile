import { COLOR_PRIMARY_LIGHT, COLOR_PRIMARY, COLOR_SECONDARY, COLOR_SECONDARY_LIGHT } from "##theme/colors.constant";
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
    marginBottom: 10,
    fontFamily: 'Avenir Next'
}

const description: StyleProp<TextStyle> = {
    fontWeight: '500',
    fontFamily: 'Avenir Next',
    fontSize: FONT_SIZE.NORMAL
}

export const styles = StyleSheet.create({
    primaryContainer: {
        ...container,
        borderColor: COLOR_PRIMARY,
        backgroundColor: COLOR_PRIMARY_LIGHT
    },
    secondaryContainer: {
        ...container,
        borderColor: COLOR_SECONDARY,
        backgroundColor: COLOR_SECONDARY_LIGHT
    },
    primaryTitle: {
        ...title,
        color: COLOR_PRIMARY
    },
    primaryDescription: {
        ...description,
        color: COLOR_PRIMARY
    },
    secondaryTitle: {
        ...title,
        color: COLOR_SECONDARY
    },
    secondaryDescription: {
        ...description,
        color: COLOR_SECONDARY
    }

});