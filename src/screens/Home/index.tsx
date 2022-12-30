import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {useGeolocation} from '../../hooks/useGeolocation';

const Home = () => {
  const [address, setAddress] = useState('');

  const {
    userLocationInfo,
    getLocationByDevice,
    getLocationByAddress,
  } = useGeolocation();

  const handleSearchLocationByAddress = () => {
    try {
      getLocationByAddress(address);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchLocationByDevice = () => {
    getLocationByDevice();
  };

  console.log('USER INFO', userLocationInfo);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <TextInput
        style={{
          height: 45,
          width: '90%',
          borderColor: '#000',
          borderWidth: 1,
          paddingLeft: 10,
        }}
        placeholder="Informe seu endereço"
        placeholderTextColor="#ccc"
        onChangeText={setAddress}
        value={address}
      />
      <Text style={{marginTop: 15}} onPress={handleSearchLocationByDevice}>
        Pegar Mina localização
      </Text>
      <Pressable
        style={{
          height: 45,
          width: '90%',
          backgroundColor: '#eee',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
        }}
        onPress={handleSearchLocationByAddress}
      >
        <Text>Buscar</Text>
      </Pressable>

      {userLocationInfo ? (
        <Text style={{width: '90%', marginTop: 15}}>
          {userLocationInfo?.address}
        </Text>
      ) : null}
    </View>
  );
};

export default Home;
