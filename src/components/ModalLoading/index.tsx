import React from 'react';
import {ActivityIndicator} from 'react-native';
import theme from '../../theme';
import {Container, SearchServiceText} from './styles';

const ModalLoading = () => {
  return (
    <Container>
      <SearchServiceText>Procurando um prestador de serviço</SearchServiceText>
      <ActivityIndicator size="large" color={theme.COLORS.GRAY_1000} />
    </Container>
  );
};

export default ModalLoading;
