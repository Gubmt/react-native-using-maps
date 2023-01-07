/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useMemo, useRef} from 'react';
import {Alert} from 'react-native';
import MapView, {
  Marker,
  AnimatedRegion,
  MarkerAnimated,
} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {LocationType, useGeolocation} from '../../hooks/useGeolocation';
import {CarIcon, PinIcon} from '../../assets/icons/svg';
import {SafeView} from './styles';
import ModalPanel from '../../components/ModalPanel';
import ModalAddressSearch from '../../components/ModalAddressSearch';
import theme from '../../theme';
import {getHeadingFromLocation, isObjectEmpty} from '../../services/utils';
import ModalLoading from '../../components/ModalLoading';

const Map = () => {
  const [trip, setTrip] = useState<number>(0);
  const [location, setLocation] = useState<LocationType[]>([]);
  const {
    providerLocationInfo,
    userLocationInfo,
    setUserLocationInfo,
    setProviderLocationInfo,
    error,
    setError,
    loading,
  } = useGeolocation();
  const mapRef = useRef(null);
  const {GOOGLE_MAPS_APIKEY} = process.env;

  const winchLocation = useMemo(
    () =>
      new AnimatedRegion({
        latitude: providerLocationInfo?.location?.latitude || 0,
        longitude: providerLocationInfo?.location?.longitude || 0,
      }),
    [providerLocationInfo],
  );

  const finishService = (interval: number) => {
    setTrip(0);
    clearInterval(interval);
    setUserLocationInfo({});
    setProviderLocationInfo({});
    setLocation([]);
  };

  useEffect(() => {
    if (error) {
      Alert.alert('Erro', 'Erro ao solicitar serviço', [
        {
          text: 'Tentar novamente',
          onPress: () => {
            finishService(trip);
          },
        },
      ]);
    }
  }, [error]);

  useEffect(() => {
    if (
      userLocationInfo.address &&
      providerLocationInfo.distance &&
      location.length > 0
    ) {
      if (!trip) {
        let number = location.length - 1;
        const interval = setInterval(() => {
          if (number >= 0) {
            setProviderLocationInfo(oldService => {
              return {
                ...oldService,
                location: location[number],
                heading: getHeadingFromLocation(
                  location[number],
                  location[number - 1],
                ),
              };
            });

            number = number - 1;
          } else {
            finishService(interval);
          }
        }, 2000);
        setTrip(interval);
      }
    }
  }, [userLocationInfo, providerLocationInfo, location.length]);

  return (
    <SafeView style={{flex: 1}}>
      <MapView ref={mapRef} style={{flex: 1}} loadingEnabled provider="google">
        {userLocationInfo?.location && winchLocation ? (
          <>
            <Marker coordinate={userLocationInfo?.location} identifier="User">
              <PinIcon
                width="32"
                height="41"
                fill={theme.COLORS.RED_400}
                testID="PinIcon"
              />
            </Marker>
            <MarkerAnimated
              coordinate={winchLocation}
              identifier="Winch"
              rotation={145 - (providerLocationInfo.heading || 0)}
            >
              <CarIcon width="32" height="36" />
            </MarkerAnimated>

            <MapViewDirections
              origin={userLocationInfo?.location}
              destination={providerLocationInfo?.location}
              apikey={`${GOOGLE_MAPS_APIKEY}`}
              strokeWidth={4}
              strokeColor={theme.COLORS.PURPLE_400}
              onReady={result => {
                setProviderLocationInfo(oldService => ({
                  ...oldService,
                  distance: `${result.distance.toFixed(1)} km`,
                  duration: `${Math.ceil(result.duration)} min`,
                  price: '$ 25.00',
                  location: result.coordinates[result.coordinates.length - 1],
                }));
                setLocation(result.coordinates);
                mapRef?.current?.fitToCoordinates(result.coordinates, {
                  animated: true,
                  edgePadding: {
                    top: 50,
                    right: 50,
                    bottom: 400,
                    left: 50,
                  },
                });
              }}
              onError={errorMessage => {
                setError(errorMessage);
              }}
            />
          </>
        ) : null}
      </MapView>
      {isObjectEmpty(userLocationInfo) ? <ModalAddressSearch /> : null}
      {loading ? <ModalLoading /> : null}
      {!isObjectEmpty(userLocationInfo) &&
      !isObjectEmpty(providerLocationInfo) ? (
        <ModalPanel
          userLocationAddress={userLocationInfo.address}
          providerLocationAddress={providerLocationInfo.address}
          distance={providerLocationInfo.distance}
          time={providerLocationInfo.duration}
          price={providerLocationInfo.price}
          finishService={() => finishService(trip)}
        />
      ) : null}
    </SafeView>
  );
};

export default Map;
