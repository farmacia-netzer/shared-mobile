
import React, { useCallback, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useLocation } from '../../hooks/useLocation';
import { isIos } from '../../services';
import { COLOR_PRIMARY } from '../../theme/colors.constant';
import { NetzerCardLayout } from '../netzer-card/netzer-card-layout.component';
import { NetzerLoading } from '../netzer-loading/netzert-loading.component';

export const NetzerMap = ({ route, appConfig }) => {
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
                        apikey={appConfig.MAP_KEY as string}
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
                    {/* <NetzerFabButton SvgIcon={CurrentPositionIcon} onPress={getCenterPosition} /> */}
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
