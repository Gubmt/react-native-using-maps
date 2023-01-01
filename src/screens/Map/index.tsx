/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useMemo, useRef} from 'react';
import {Alert} from 'react-native';
import {
  Marker,
  AnimatedRegion,
  MarkerAnimated,
  Animated,
} from 'react-native-maps';
import {useGeolocation} from '../../hooks/useGeolocation';
import Icon from '../../assets/icons';
import {CarIcon} from '../../assets/icons/svg';
import {SafeView} from './styles';
import ModalPanel from '../../components/ModalPanel';
import ModalAddressSearch from '../../components/ModalAddressSearch';
import theme from '../../theme';
import {isObjectEmpty} from '../../services/utils';

const Map = () => {
  const [trip, setTrip] = useState(0);
  const {
    userLocationInfo,
    providerLocationInfo,
    setUserLocationInfo,
    setProviderLocationInfo,
  } = useGeolocation();
  const mapRef = useRef(null);

  const winchLocation = useMemo(
    () =>
      new AnimatedRegion({
        latitude: providerLocationInfo.location?.latitude,
        longitude: providerLocationInfo.location?.longitude,
      }),
    [providerLocationInfo.location],
  );

  const finishService = () => {
    clearInterval(trip);
    setUserLocationInfo({});
    setProviderLocationInfo({});
  };

  useEffect(() => {
    if (userLocationInfo.error) {
      Alert.alert('Erro', 'Nenhum endereço encontrado', [
        {
          text: 'Tentar novamente',
          onPress: () => {
            setUserLocationInfo({});
            setProviderLocationInfo({});
          },
        },
      ]);
    }
    if (providerLocationInfo.error) {
      Alert.alert('Erro', 'Nenhum guincho encontrado');
    }
  }, [userLocationInfo.error, providerLocationInfo.error]);

  useEffect(() => {
    if (
      !isObjectEmpty(userLocationInfo) &&
      !isObjectEmpty(providerLocationInfo)
    ) {
      const interval = setInterval(() => {
        setProviderLocationInfo(oldLocation => {
          if (oldLocation?.location) {
            return {
              ...oldLocation,
              location: {
                latitude: oldLocation?.location?.latitude - 0.0001,
                longitude: oldLocation?.location?.longitude - 0.0001,
              },
            };
          }
          return {
            ...oldLocation,
          };
        });
      }, 1000);
      setTrip(interval);
    }
  }, [userLocationInfo.address, providerLocationInfo.address]);

  useEffect(() => {
    if (trip !== 0) {
      setTimeout(() => finishService(), 11000);
    }
  }, [trip]);

  useEffect(() => {
    if (providerLocationInfo?.location) {
      winchLocation
        .timing({
          latitude: providerLocationInfo.location?.latitude || 0,
          longitude: providerLocationInfo.location?.longitude || 0,
          duration: 150,
          toValue: 0,
          useNativeDriver: false,
          latitudeDelta: 1,
          longitudeDelta: 1,
        })
        .start(() => {
          setTimeout(
            () =>
              mapRef?.current?.fitToSuppliedMarkers(['User', 'Winch'], {
                animated: true,
                edgePadding: {
                  top: 0,
                  right: 100,
                  bottom: 350,
                  left: 50,
                },
              }),
            200,
          );
        });
    }
  }, [providerLocationInfo.location, winchLocation]);

  return (
    <SafeView style={{flex: 1}}>
      <Animated ref={mapRef} style={{flex: 1}} loadingEnabled provider="google">
        {!isObjectEmpty(userLocationInfo) &&
        !isObjectEmpty(providerLocationInfo) ? (
          <>
            <Marker
              coordinate={{
                latitude: userLocationInfo?.location?.latitude,
                longitude: userLocationInfo?.location?.longitude,
              }}
              identifier="User"
            >
              <Icon
                name="PinIcon"
                width="32"
                height="41"
                fill={theme.COLORS.RED_400}
              />
            </Marker>
            <MarkerAnimated
              coordinate={winchLocation}
              pinColor="#333"
              identifier="Winch"
            >
              <CarIcon width="32" height="36" />
            </MarkerAnimated>
          </>
        ) : null}
      </Animated>
      {isObjectEmpty(userLocationInfo) &&
      isObjectEmpty(providerLocationInfo) ? (
        <ModalAddressSearch />
      ) : null}

      {!isObjectEmpty(userLocationInfo) &&
      !isObjectEmpty(providerLocationInfo) ? (
        <ModalPanel
          theme={theme}
          userLocationAddress={userLocationInfo.address}
          providerLocationAddress={providerLocationInfo.address}
          distance="0.2 km"
          time="2 min"
          price="$25.00"
          finishService={finishService}
        />
      ) : null}
    </SafeView>
  );
};

export default Map;
