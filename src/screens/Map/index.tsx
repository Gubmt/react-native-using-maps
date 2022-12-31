/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useMemo, useRef} from 'react';
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
import theme from '../../theme';
import {isObjectEmpty} from '../../services/utils';

const Map = () => {
  const {
    userLocationInfo,
    providerLocationInfo,
    setProviderLocationInfo,
    getLocationByAddress,
  } = useGeolocation();
  const mapRef = useRef(null);
  const interval = useRef(0);

  const winchLocation = useMemo(
    () =>
      new AnimatedRegion({
        latitude: providerLocationInfo.location?.latitude,
        longitude: providerLocationInfo.location?.longitude,
      }),
    [providerLocationInfo.location],
  );

  console.log(providerLocationInfo);

  useEffect(() => {
    try {
      getLocationByAddress('Rua Vitorio Brendolan 470');
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    interval.current = setInterval(() => {
      setProviderLocationInfo(oldLocation => {
        if (oldLocation?.location) {
          return {
            ...oldLocation,
            location: {
              latitude: oldLocation?.location?.latitude - 0.001,
              longitude: oldLocation?.location?.longitude - 0.001,
            },
          };
        }
        return {
          ...oldLocation,
        };
      });
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      clearInterval(interval.current);
    }, 10000);
  }, []);

  useEffect(() => {
    if (providerLocationInfo?.location) {
      winchLocation
        .timing({
          latitude: providerLocationInfo.location?.latitude,
          longitude: providerLocationInfo.location?.longitude,
          duration: 150,
          toValue: 0,
          useNativeDriver: false,
          latitudeDelta: 1,
          longitudeDelta: 1,
        })
        .start(() => {
          setTimeout(
            () => mapRef?.current?.fitToSuppliedMarkers(['user', 'Winch']),
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
              identifier="user"
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
      <ModalPanel
        theme={theme}
        userLocationAddress={userLocationInfo.address}
        providerLocationAddress={providerLocationInfo.address}
        distance="0.2 km"
        time="2 min"
        price="$25.00"
      />
    </SafeView>
  );
};

export default Map;
