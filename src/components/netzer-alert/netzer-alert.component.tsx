
import React, { useContext, useMemo } from 'react'
import { View } from 'react-native'
import { ThemeContext } from '../../context/theme/theme-context'
import { NetzerText } from '../netzer-text'
import { stylesComponent } from './netzer-alert.styles'

interface NetzerAlertProps {
    title?: string
    description?: string
    type?: 'PRIMARY' | 'SECONDARY' | "DANGER"
    borderType?: "SOLID" | "DASHED"
}
enum ENetzerAlert {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY",
    DANGER = "DANGER",
}
enum EAlertBorder {
    SOLID = "SOLID",
    DASHED = "DASHED"
}


export const NetzerAlert = ({ title, description, type = "PRIMARY", borderType = "SOLID" }: NetzerAlertProps) => {
    const { theme } = useContext(ThemeContext);
    const styles = useMemo(() => stylesComponent(theme), [theme, stylesComponent])

    const border = useMemo(() => {
        return {
            [EAlertBorder.SOLID]: {
                borderStyle: "solid"
            },
            [EAlertBorder.DASHED]: {
                borderStyle: "dashed"
            }
        }?.[borderType]
    }, [borderType])


    const alertStyles = useMemo(() => {
        return ({
            [ENetzerAlert.PRIMARY]: {
                container: { ...styles.primaryContainer, ...border },
                title: styles.primaryTitle,
                description: styles.primaryDescription
            },
            [ENetzerAlert.SECONDARY]: {
                container: { ...styles.secondaryContainer, ...border },
                title: styles.secondaryTitle,
                description: styles.secondaryDescription
            },
            [ENetzerAlert.DANGER]: {
                container: { ...styles.dangerContainer, ...border },
                title: styles.dangerTitle,
                description: styles.dangerDescription
            }
        }?.[type]);
    }, [border, type])

    return (
        <View style={alertStyles.container}>
            {title && <NetzerText text={title} style={alertStyles.title} />}
            {typeof description === "string" ?
                <NetzerText text={description} style={alertStyles.description} /> : description
            }
        </View>
    )
}


