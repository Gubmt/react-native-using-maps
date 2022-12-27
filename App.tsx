import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        provider={'google'}
        userInterfaceStyle={'light'}
        initialRegion={{
          latitude: -21.2738054,
          longitude: -48.3090628,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
};

export default App;
