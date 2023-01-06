import {ViewProps} from 'react-native';
import styled, {DefaultTheme, ThemeProps} from 'styled-components/native';
import {IS_ANDROID} from '../../constants';

type AddressContainerProps = ThemeProps<DefaultTheme> &
  ViewProps & {
    firstItem?: boolean | undefined;
  };

export const Container = styled.View`
  position: absolute;
  bottom: ${IS_ANDROID ? '2%' : '8%'};
  left: 5%;
  width: 90%;
  padding-bottom: 20px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  align-items: center;
  elevation: 5;
  box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const ProviderInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 16px 9px 16px;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const ProviderInfo = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
`;

export const ProviderImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: ${({theme}) => theme.COLORS.GRAY_1000};
`;

export const ProviderInfoText = styled.View`
  width: 100%;
  margin-left: 14px;
`;

export const ProviderName = styled.Text`
  font-family: 'SF UI Display Semibold';
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  color: ${({theme}) => theme.COLORS.GRAY_1000};
`;

export const ProviderRate = styled.Text`
  width: 100%;
  font-family: 'SF UI Display';
  font-size: 15px;
  line-height: 18px;
  color: ${({theme}) => theme.COLORS.GRAY_500};
`;

export const ProviderButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  padding: 10px 0px;
`;

export const ProviderMessage = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.COLORS.BLUE_400};
`;

export const ProviderPhone = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.COLORS.GREEN_400};
`;

export const LocationInfo = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 8px 0 8px 6px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const LocationIconContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  height: 64px;
  width: 48px;
`;

export const BaseIconContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border-color: ${({theme}) => theme.COLORS.GREEN_400};
  border-width: 2px;
`;

export const LocationIcon = styled.View`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.GRAY_1000};
`;

export const LocationLine = styled.View`
  position: absolute;
  left: 23;
  top: 20;
  height: 30px;
  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const LocationAddressContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

export const LocationAddressTextContainer = styled.View<AddressContainerProps>`
  width: 100%;
  padding: 12px 0;
  border-bottom-width: ${({firstItem}) => (firstItem ? 1 : 0)}px;
  border-bottom-color: ${({firstItem, theme}) =>
    firstItem && theme.COLORS.GRAY_200};
`;

export const LocationAddress = styled.Text`
  font-family: 'SF UI Display';
  font-size: 17px;
  line-height: 20px;
  color: ${({theme}) => theme.COLORS.GRAY_1000};
`;

export const DistanceInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 20px 24px 20px;
`;

export const DistanceInfoIcon = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.COLORS.GRAY_1000};
`;

export const DistanceInfoTextContainer = styled.View`
  height: 38px;
  justify-content: space-between;
  align-items: center;
`;

export const DistanceInfoLabelText = styled.Text`
  font-family: 'SF UI Display';
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: ${({theme}) => theme.COLORS.GRAY_500};
`;

export const DistanceInfoText = styled.Text`
  font-family: 'SF UI Display Semibold';
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: ${({theme}) => theme.COLORS.GRAY_1000};
`;

export const CancelButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 90%;
  background: ${({theme}) => theme.COLORS.GRAY_1000};
  border-radius: 8px;
`;

export const CancelButtonText = styled.Text`
  font-family: 'SF UI Display Semibold';
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: ${({theme}) => theme.COLORS.WHITE};
`;
