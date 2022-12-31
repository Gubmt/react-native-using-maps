import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Map from './screens/Map';
import {LocationProvider} from './hooks/useGeolocation';
import theme from './theme';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.COLORS.WHITE} />
      <LocationProvider>
        <Map />
      </LocationProvider>
    </ThemeProvider>
  );
};

export default App;
