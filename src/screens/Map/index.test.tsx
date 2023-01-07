import React from 'react';
import {render} from '@testing-library/react-native';
import Map from './index';
import theme from '../../theme';
import * as utils from '../../services/utils';
import * as geolocation from '../../hooks/useGeolocation';
import {ThemeProvider} from 'styled-components/native';

describe('Map Component', () => {
  it('should render with no props', () => {
    jest.spyOn(utils, 'isObjectEmpty').mockImplementation(() => false);
    jest.spyOn(geolocation, 'useGeolocation').mockImplementation(() => ({
      providerLocationInfo: {},
      userLocationInfo: {},
      setUserLocationInfo: () => null,
      setProviderLocationInfo: () => null,
      error: '',
      setError: () => null,
      loading: false,
    }));
    const rendered = render(
      <ThemeProvider theme={theme}>
        <Map />
      </ThemeProvider>,
    );
    expect(rendered).toMatchSnapshot();
  });

  it('should render with props', () => {
    jest.spyOn(geolocation, 'useGeolocation').mockImplementation(() => ({
      providerLocationInfo: {
        location: {
          latitude: 10,
          longitude: 20,
        },
        address: 'Rua Teste',
        price: 'US$25',
        duration: '5 min',
        distance: '20 Km',
        heading: 200,
      },
      userLocationInfo: {
        location: {
          latitude: 30,
          longitude: 40,
        },
        address: 'Rua Teste 2',
      },
      setUserLocationInfo: () => null,
      setProviderLocationInfo: () => null,
      error: '',
      setError: () => null,
      loading: false,
    }));
    const rendered = render(
      <ThemeProvider theme={theme}>
        <Map />
      </ThemeProvider>,
    );
    expect(rendered).toMatchSnapshot();

    const PinIcon = rendered.getByTestId('PinIcon');
    expect(PinIcon).toBeDefined();
  });
});
