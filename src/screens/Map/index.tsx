import React, {useEffect, useMemo, useRef} from 'react';
import {
  Marker,
  AnimatedRegion,
  MarkerAnimated,
  Animated,
} from 'react-native-maps';
import {SafeAreaView} from 'react-native';
import {useGeolocation} from '../../hooks/useGeolocation';

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
              latitude: oldLocation?.location?.latitude - 0.01,
              longitude: oldLocation?.location?.longitude - 0.01,
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
    <SafeAreaView style={{flex: 1}}>
      <Animated ref={mapRef} style={{flex: 1}} loadingEnabled provider="google">
        {userLocationInfo?.location ? (
          <>
            <Marker
              coordinate={{
                latitude: userLocationInfo?.location?.latitude,
                longitude: userLocationInfo?.location?.longitude,
              }}
              identifier="user"
            />
            <MarkerAnimated
              coordinate={winchLocation}
              pinColor="#333"
              identifier="Winch"
            />
          </>
        ) : null}
      </Animated>
    </SafeAreaView>
  );
};

export default Map;
