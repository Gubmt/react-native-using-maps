/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useMemo, useRef} from 'react';
import {
  Marker,
  AnimatedRegion,
  MarkerAnimated,
  Animated,
} from 'react-native-maps';

import {useGeolocation} from '../../hooks/useGeolocation';
import Icon from '../../assets/icons';
import {LineIcon} from '../../assets/icons/svg';
import {
  SafeView,
  Container,
  ProviderInfoContainer,
  ProviderInfo,
  ProviderImage,
  ProviderInfoText,
  ProviderName,
  ProviderRate,
  ProviderButtonContainer,
  ProviderMessage,
  ProviderPhone,
  LocationInfo,
  LocationIconContainer,
  BaseIcon,
  LocationAddressContainer,
  LocationAddressTextContainer,
  LocationAddress,
  DistanceInfo,
  DistanceInfoTextContainer,
  DistanceInfoLabelText,
  DistanceInfoText,
  CancelButton,
  CancelButtonText,
} from './styles';

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
              latitude: oldLocation?.location?.latitude - 0.001,
              longitude: oldLocation?.location?.longitude - 0.001,
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
    <SafeView style={{flex: 1}}>
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
      <Container>
        <ProviderInfoContainer>
          <ProviderInfo>
            <ProviderImage
              source={require('../../assets/images/Provider.png')}
            />
            <ProviderInfoText>
              <ProviderName>Gregory Smith</ProviderName>
              <ProviderRate>
                <Icon name="StarIcon" width="16" height="16" fill="#FFCC00" />{' '}
                4.9
              </ProviderRate>
            </ProviderInfoText>
          </ProviderInfo>
          <ProviderButtonContainer>
            <ProviderMessage>
              <Icon name="MessageIcon" width="22" height="22" fill="#fff" />
            </ProviderMessage>
            <ProviderPhone>
              <Icon name="PhoneIcon" width="22" height="22" fill="#fff" />
            </ProviderPhone>
          </ProviderButtonContainer>
        </ProviderInfoContainer>
        <LocationInfo>
          <LocationIconContainer>
            <BaseIcon>
              <Icon name="BaseIcon" width="10" height="10" fill="#4CE5B1" />
            </BaseIcon>
            <LineIcon width="3" height="24" fill="#C8C7CC" />
            <Icon name="PinIcon" width="22" height="22" fill="#F52D56" />
          </LocationIconContainer>
          <LocationAddressContainer>
            <LocationAddressTextContainer firstItem>
              <LocationAddress>7958 Swift Village</LocationAddress>
            </LocationAddressTextContainer>
            <LocationAddressTextContainer>
              <LocationAddress>105 William St, Chicago US </LocationAddress>
            </LocationAddressTextContainer>
          </LocationAddressContainer>
        </LocationInfo>
        <DistanceInfo>
          <Icon name="VehicleIcon" width="50" height="21" fill="#242E42" />
          <DistanceInfoTextContainer>
            <DistanceInfoLabelText>DISTANCE</DistanceInfoLabelText>
            <DistanceInfoText>0.2 km</DistanceInfoText>
          </DistanceInfoTextContainer>
          <DistanceInfoTextContainer>
            <DistanceInfoLabelText>TIME</DistanceInfoLabelText>
            <DistanceInfoText>2 min</DistanceInfoText>
          </DistanceInfoTextContainer>
          <DistanceInfoTextContainer>
            <DistanceInfoLabelText>PRICE</DistanceInfoLabelText>
            <DistanceInfoText>$25.00</DistanceInfoText>
          </DistanceInfoTextContainer>
        </DistanceInfo>
        <CancelButton>
          <CancelButtonText>Cancel Request</CancelButtonText>
        </CancelButton>
      </Container>
    </SafeView>
  );
};

export default Map;
