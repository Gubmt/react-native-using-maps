import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 45%;
  left: 5%;
  width: 90%;
  padding: 20px 0;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  align-items: center;
  elevation: 5;
  box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const SearchServiceText = styled.Text`
  font-family: 'SF UI Display Semibold';
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  margin-bottom: 20px;
  color: ${({theme}) => theme.COLORS.GRAY_1000};
`;
