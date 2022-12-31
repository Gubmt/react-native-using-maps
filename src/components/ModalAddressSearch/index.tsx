import React, {useState} from 'react';
import {useGeolocation} from '../../hooks/useGeolocation';
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
    setProviderLocationInfo,
    getLocationByAddress,
  } = useGeolocation();

  const handleSearchLocationByAddress = () => {
    if (address !== '') {
      getLocationByAddress(address);
    }
  };

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
