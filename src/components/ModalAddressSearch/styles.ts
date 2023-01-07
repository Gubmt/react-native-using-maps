import styled from 'styled-components/native';
import {IS_ANDROID} from '../../constants';

export const Container = styled.View`
  position: absolute;
  top: ${IS_ANDROID ? '2%' : '10%'};
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
