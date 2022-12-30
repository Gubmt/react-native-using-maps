import React from 'react';
import Map from './src/screens/Map';
import {LocationProvider} from './src/hooks/useGeolocation';

const App = () => {
  return (
    <LocationProvider>
      <Map />
    </LocationProvider>
  );
};

export default App;
