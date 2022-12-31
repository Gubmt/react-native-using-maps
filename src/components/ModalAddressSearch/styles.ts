import {TouchableOpacityProps, TextInputProps, ColorValue} from 'react-native';
import styled, {DefaultTheme, ThemeProps} from 'styled-components/native';

type InputAddressProps = ThemeProps<DefaultTheme> &
  TextInputProps & {
    placeholderTextColor: ColorValue | string | undefined;
  };
type SearchButtonProps = ThemeProps<DefaultTheme> & TouchableOpacityProps;

export const Container = styled.View`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  padding: 20px 0;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  align-items: center;
  elevation: 5;
  box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const AddressSearchLabel = styled.Text`
  font-family: 'SF UI Display';
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: ${({theme}) => theme.COLORS.GRAY_1000};
`;

export const InputAddressContainer = styled.TextInput.attrs<InputAddressProps>(
  ({theme}) => ({
    placeholderTextColor: theme.COLORS.GRAY_500,
  }),
)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 90%;
  margin-top: 8px;
  padding: 0 10px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${({theme}) => theme.COLORS.GRAY_500};
`;

export const SearchButton = styled.TouchableOpacity<SearchButtonProps>`
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 90%;
  background: ${({theme}) => theme.COLORS.GRAY_1000};
  border-radius: 8px;
  margin-top: 16px;
  opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
`;

export const SearchButtonText = styled.Text`
  font-family: 'SF UI Display Semibold';
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: ${({theme}) => theme.COLORS.WHITE};
`;
