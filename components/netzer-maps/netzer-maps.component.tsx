// import CurrentPositionIcon from '##assets/
import { NetzerCardLayout } from '##component/netzer-card/netzer-card-layout.component';
import { NetzerLoading } from '##component/netzer-loading/netzert-loading.component';

import { isIos } from '##common/platform';
import { NetzerFabButton } from '##component/netzer-primary-button/fab/netzer-fab-button.component';
import CurrentPositionIcon from '##shared/assets/current-position.svg';
import { useLocation } from '##shared/hooks/useLocation';
// import { useLocation } from '##hooks/useLocation';
import { COLOR_PRIMARY } from '##theme/colors.constant';
import React, { useCallback, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const MAP_KEY = 'AIzaSyC9E7-i8ULBWrV6gjO7USfdHaDSbHcPUCA';

export const NetzerMap = ({ route }) => {
    const mapRef = useRef<MapView>();
    const { getCurrentLocation, stopwatchPosition, watchPosition, currentLocation, hasLocation } = useLocation();
    const following = useRef<boolean>(true);

    const destination = {
        latitude: parseFloat(route?.params.latitude),
        longitude: parseFloat(route?.params.longitude)
    };

    const centerPosition = useCallback((position) => {
        mapRef.current!.animateCamera({
            center: position
        });
    }, []);

    const getCenterPosition = useCallback(() => {
        getCurrentLocation().then((currentPosition) => {
            following.current = true;
            centerPosition(currentPosition);
        });
    }, [centerPosition, getCurrentLocation]);

    useEffect(() => {
        if (!following.current) return;

        const { latitude, longitude } = currentLocation;
        mapRef.current?.animateCamera({
            center: { latitude, longitude }
        });
    }, [currentLocation]);

    useEffect(() => {
        watchPosition();
        return () => {
            stopwatchPosition();
        };
    }, [stopwatchPosition, watchPosition]);

    const setMapRef = useCallback((ref: MapView) => {
        mapRef.current = ref;
    }, []);

    const onTouchStart = useCallback(() => {
        following.current = false;
    }, []);

    return (
        <NetzerCardLayout >
            {!hasLocation ? (
                <NetzerLoading />
            ) : (
                <MapView
                    ref={setMapRef}
                    style={styles.mapContainer}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation
                    initialRegion={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    onTouchStart={onTouchStart}
                >
                    <MapViewDirections
                        apikey={MAP_KEY}
                        origin={currentLocation}
                        destination={destination}
                        strokeColor={COLOR_PRIMARY}
                        strokeWidth={4}
                    />

                    <Marker draggable={false} coordinate={destination} title="Punto entrega" />
                </MapView>
            )}
            {
                <View style={styles.buttonPosition}>
                    <NetzerFabButton SvgIcon={CurrentPositionIcon} onPress={getCenterPosition} />
                </View>
            }
        </NetzerCardLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mapContainer: {
        flex: 1,
        borderRadius: 50
    },
    buttonPosition: {
        position: 'absolute',
        display: isIos ? 'flex' : 'none',
        right: 20,
        bottom: 20
    }
});
