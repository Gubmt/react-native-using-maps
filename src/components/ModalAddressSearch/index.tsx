/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useGeolocation} from '../../hooks/useGeolocation';
import {isObjectEmpty} from '../../services/utils';
import {
  Container,
  AddressSearchLabel,
  InputAddressContainer,
  SearchButton,
  SearchButtonText,
} from './styles';

const ModalAddressSearch = () => {
  const [address, setAddress] = useState('');

  const {
    userLocationInfo,
    providerLocationInfo,
    getLocationByAddress,
  } = useGeolocation();

  const handleSearchLocationByAddress = () => {
    if (address !== '') {
      try {
        getLocationByAddress(address);
      } catch (error) {
        Alert.alert('Erro', 'Erro ao buscar endereço. Tente novamente.');
      }
    }
  };

  console.log('AQUI', userLocationInfo, providerLocationInfo);

  return (
    <Container>
      <AddressSearchLabel>Informe seu endereço</AddressSearchLabel>
      <InputAddressContainer
        value={address}
        onChangeText={setAddress}
        autoCapitalize="words"
        placeholder="Informe seu endereço"
      />
      <SearchButton
        disabled={address.length === 0}
        onPress={handleSearchLocationByAddress}
      >
        <SearchButtonText>Buscar</SearchButtonText>
      </SearchButton>
    </Container>
  );
};

export default ModalAddressSearch;
