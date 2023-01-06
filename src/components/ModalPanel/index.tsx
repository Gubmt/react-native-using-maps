import React from 'react';
import {
  StarIcon,
  MessageIcon,
  PhoneIcon,
  VehicleIcon,
  PinIcon,
  BaseIcon,
} from '../../assets/icons/svg';
import {LineIcon} from '../../assets/icons/svg';
import {useTheme} from 'styled-components/native';
import {
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
  BaseIconContainer,
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

type ModalPanelProps = {
  userLocationAddress: string | undefined;
  providerLocationAddress: string | undefined;
  distance: string | undefined;
  time: string | undefined;
  price: string | undefined;
  finishService(): void;
};

const ModalPanel = ({
  userLocationAddress,
  providerLocationAddress,
  distance,
  time,
  price,
  finishService,
}: ModalPanelProps) => {
  const theme = useTheme();
  return (
    <Container>
      <ProviderInfoContainer>
        <ProviderInfo>
          <ProviderImage source={require('../../assets/images/Provider.png')} />
          <ProviderInfoText>
            <ProviderName>Gregory Smith</ProviderName>
            <ProviderRate>
              <StarIcon width="16" height="16" fill={theme.COLORS.YELLOW_400} />{' '}
              4.9
            </ProviderRate>
          </ProviderInfoText>
        </ProviderInfo>
        <ProviderButtonContainer>
          <ProviderMessage>
            <MessageIcon width="28" height="28" fill={theme.COLORS.WHITE} />
          </ProviderMessage>
          <ProviderPhone>
            <PhoneIcon width="22" height="22" fill={theme.COLORS.WHITE} />
          </ProviderPhone>
        </ProviderButtonContainer>
      </ProviderInfoContainer>
      <LocationInfo>
        <LocationIconContainer>
          <BaseIconContainer>
            <BaseIcon width="10" height="10" fill={theme.COLORS.GREEN_400} />
          </BaseIconContainer>
          <LineIcon width="3" height="24" fill={theme.COLORS.GRAY_500} />
          <PinIcon width="22" height="22" fill={theme.COLORS.RED_400} />
        </LocationIconContainer>
        <LocationAddressContainer>
          <LocationAddressTextContainer firstItem>
            <LocationAddress numberOfLines={1}>
              {providerLocationAddress}
            </LocationAddress>
          </LocationAddressTextContainer>
          <LocationAddressTextContainer>
            <LocationAddress numberOfLines={1}>
              {userLocationAddress}
            </LocationAddress>
          </LocationAddressTextContainer>
        </LocationAddressContainer>
      </LocationInfo>
      <DistanceInfo>
        <VehicleIcon width="50" height="21" fill={theme.COLORS.GRAY_1000} />
        <DistanceInfoTextContainer>
          <DistanceInfoLabelText>DISTANCE</DistanceInfoLabelText>
          <DistanceInfoText>{distance}</DistanceInfoText>
        </DistanceInfoTextContainer>
        <DistanceInfoTextContainer>
          <DistanceInfoLabelText>TIME</DistanceInfoLabelText>
          <DistanceInfoText>{time}</DistanceInfoText>
        </DistanceInfoTextContainer>
        <DistanceInfoTextContainer>
          <DistanceInfoLabelText>PRICE</DistanceInfoLabelText>
          <DistanceInfoText>{price}</DistanceInfoText>
        </DistanceInfoTextContainer>
      </DistanceInfo>
      <CancelButton testID="cancelButton" onPress={() => finishService()}>
        <CancelButtonText>Cancel Request</CancelButtonText>
      </CancelButton>
    </Container>
  );
};

export default ModalPanel;
