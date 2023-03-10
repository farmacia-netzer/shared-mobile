import GoogleMapIcon from '../../assets/svg/google-maps.svg';
import { PermissionsContext } from '../../context/PermissionsContext';
import { FONT_SIZE } from '##theme/typography.constant';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NetzerInfo } from '../netzer-info';
import { NetzerPrimaryButton } from '../netzer-primary-button/netzer-primary-button.component';
import { NetzerText } from '../netzer-text';

export const NetzerPermissions = () => {
    const { askLocationPermission, permission } = useContext(PermissionsContext);
    const { goBack } = useNetzerNavigation();


    if (permission?.locationStatus === 'unavailable') {
        return (
            <View>
                <NetzerText text="Servicio no disponible" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <NetzerInfo
                Icon={GoogleMapIcon}
                title={'Permisos del mapa'}
                description={'Farmacia Netzer - recoge datos de tu ubicación para ayudar a crear tu dirección de entrega de forma fácil y precisa.'}
            />
            <View style={styles.buttonContainer}>
                <NetzerPrimaryButton type="PRIMARY_OUTLINE" text={'Habilitar permisos'} onPress={askLocationPermission} />
            </View>
            <NetzerPrimaryButton type="TRANSPARENT" text={'Volver atrás'} onPress={goBack} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    title: {
        fontSize: FONT_SIZE.MEDIUM,
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: 20
    },
    description: {
        fontSize: FONT_SIZE.NORMAL,
        textAlign: 'center',
        fontWeight: '500',
        color: 'gray'
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    buttonContainer: {
        marginTop: 40,
        marginBottom: 5,
        width: '100%'
    }
});
