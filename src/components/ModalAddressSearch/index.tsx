/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useGeolocation} from '../../hooks/useGeolocation';
import theme from '../../theme';
import {Container, AddressSearchLabel} from './styles';

const ModalAddressSearch = () => {
  const {setUserLocationInfo} = useGeolocation();

  const {GOOGLE_MAPS_APIKEY} = process.env;

  const autoComplete = {
    textInput: {
      backgroundColor: theme.COLORS.GRAY_200,
      height: 50,
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
      fontSize: 15,
      flex: 1,
      borderWidth: 1,
      marginHorizontal: 15,
      color: theme.COLORS.GRAY_1000,
    },
    container: {
      paddingTop: 20,
      flex: 1,
      width: '90%',
      backgroundColor: theme.COLORS.WHITE,
    },
    description: {
      color: theme.COLORS.GRAY_1000,
    },
    textInputContainer: {
      flexDirection: 'row',
    },
    listView: {
      flex: 1,
    },
    predefinedPlacesDescription: {
      color: theme.COLORS.BLUE_500,
    },
  };

  return (
    <Container>
      <AddressSearchLabel>Informe seu endereço</AddressSearchLabel>
      <GooglePlacesAutocomplete
        placeholder="Informe seu endereço"
        listViewDisplayed="auto"
        debounce={400}
        fetchDetails={true}
        minLength={2}
        enableHighAccuracyLocation={true}
        enablePoweredByContainer={false}
        onPress={(_, details) => {
          setUserLocationInfo({
            location: {
              latitude: details?.geometry?.location?.lat,
              longitude: details?.geometry?.location?.lng,
              placeId: details?.place_id,
            },
            address: details?.formatted_address,
          });
        }}
        query={{
          key: `${GOOGLE_MAPS_APIKEY}`,
          language: 'en',
        }}
        styles={autoComplete}
      />
    </Container>
  );
};

export default ModalAddressSearch;
