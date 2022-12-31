import React from 'react';
import Icon from '../../assets/icons';
import {LineIcon} from '../../assets/icons/svg';
import {DefaultTheme, ThemeProps} from 'styled-components/native';
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

type ModalPanelProps = ThemeProps<DefaultTheme> & {
  userLocationAddress: string | undefined;
  providerLocationAddress: string | undefined;
  distance: string | undefined;
  time: string | undefined;
  price: string | undefined;
};

const ModalPanel = ({
  userLocationAddress,
  providerLocationAddress,
  distance,
  time,
  price,
  theme,
}: ModalPanelProps) => {
  return (
    <Container>
      <ProviderInfoContainer>
        <ProviderInfo>
          <ProviderImage source={require('../../assets/images/Provider.png')} />
          <ProviderInfoText>
            <ProviderName>Gregory Smith</ProviderName>
            <ProviderRate>
              <Icon name="StarIcon" width="16" height="16" fill="#FFCC00" /> 4.9
            </ProviderRate>
          </ProviderInfoText>
        </ProviderInfo>
        <ProviderButtonContainer>
          <ProviderMessage>
            <Icon
              name="MessageIcon"
              width="22"
              height="22"
              fill={theme.COLORS.WHITE}
            />
          </ProviderMessage>
          <ProviderPhone>
            <Icon
              name="PhoneIcon"
              width="22"
              height="22"
              fill={theme.COLORS.WHITE}
            />
          </ProviderPhone>
        </ProviderButtonContainer>
      </ProviderInfoContainer>
      <LocationInfo>
        <LocationIconContainer>
          <BaseIcon>
            <Icon
              name="BaseIcon"
              width="10"
              height="10"
              fill={theme.COLORS.GREEN_400}
            />
          </BaseIcon>
          <LineIcon width="3" height="24" fill={theme.COLORS.GRAY_500} />
          <Icon
            name="PinIcon"
            width="22"
            height="22"
            fill={theme.COLORS.RED_400}
          />
        </LocationIconContainer>
        <LocationAddressContainer>
          <LocationAddressTextContainer firstItem>
            <LocationAddress numberOfLines={1}>
              {userLocationAddress}
            </LocationAddress>
          </LocationAddressTextContainer>
          <LocationAddressTextContainer>
            <LocationAddress numberOfLines={1}>
              {providerLocationAddress}
            </LocationAddress>
          </LocationAddressTextContainer>
        </LocationAddressContainer>
      </LocationInfo>
      <DistanceInfo>
        <Icon
          name="VehicleIcon"
          width="50"
          height="21"
          fill={theme.COLORS.GRAY_1000}
        />
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
      <CancelButton>
        <CancelButtonText>Cancel Request</CancelButtonText>
      </CancelButton>
    </Container>
  );
};

export default ModalPanel;
