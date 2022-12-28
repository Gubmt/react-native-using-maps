import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Marker,
  AnimatedRegion,
  MarkerAnimated,
  Animated,
} from 'react-native-maps';
import {SafeAreaView} from 'react-native';

const App = () => {
  const [location, setLocation] = useState({
    latitude: -21.1258523,
    longitude: -48.4509079,
  });
  const [userLocation] = useState({
    latitude: -21.2746086,
    longitude: -48.3176839,
  });
  const mapRef = useRef(null);

  const winchLocation = useMemo(
    () =>
      new AnimatedRegion({
        latitude: location.latitude,
        longitude: location.longitude,
      }),
    [location],
  );

  useEffect(() => {
    setInterval(() => {
      setLocation(oldLocation => ({
        latitude:
          oldLocation.latitude +
          (oldLocation.latitude - userLocation.latitude) / 1000,
        longitude:
          oldLocation.longitude +
          (oldLocation.longitude - userLocation.longitude) / 1000,
      }));
    }, 1000);
  }, []);

  console.log('AQUI', location);

  useEffect(() => {
    winchLocation
      .timing({
        latitude: location.latitude,
        longitude: location.longitude,
        duration: 150,
        toValue: 0,
        useNativeDriver: false,
        latitudeDelta: 0,
        longitudeDelta: 0,
      })
      .start(() => {
        setTimeout(
          () => mapRef?.current?.fitToSuppliedMarkers(['user', 'Winch']),
          200,
        );
      });
  }, [winchLocation, location.latitude, location.longitude]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated ref={mapRef} style={{flex: 1}} loadingEnabled>
        <Marker
          coordinate={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          }}
          identifier="user"
        />
        <MarkerAnimated
          coordinate={winchLocation}
          pinColor="#333"
          identifier="Winch"
        />
      </Animated>
    </SafeAreaView>
  );
};

export default App;
