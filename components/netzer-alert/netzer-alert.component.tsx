import { NetzerText } from '##component/netzer-text'
import React, { useMemo } from 'react'
import { View } from 'react-native'
import { styles } from './netzer-alert.styles'

interface NetzerAlertProps {
    title: string
    description: string
    type: 'PRIMARY' | 'SECONDARY'
}
enum ENetzerAlert {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY"
}


export const NetzerAlert = ({ title, description, type }: NetzerAlertProps) => {

    const alertStyles = useMemo(() => {
        return ({
            [ENetzerAlert.PRIMARY]: {
                container: styles.primaryContainer,
                title: styles.primaryTitle,
                description: styles.primaryDescription
            },
            [ENetzerAlert.SECONDARY]: {
                container: styles.secondaryContainer,
                title: styles.secondaryTitle,
                description: styles.secondaryDescription
            }
        }?.[type]);
    }, [type])

    return (
        <View style={alertStyles.container}>
            <NetzerText text={title} style={alertStyles.title} />
            {typeof description === "string" ?
                <NetzerText text={description} style={alertStyles.description} /> : description
            }
        </View>
    )
}
