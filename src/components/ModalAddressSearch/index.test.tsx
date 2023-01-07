import React from 'react';
import {render} from '@testing-library/react-native';
import ModalAddressSearch from './index';
import theme from '../../theme';
import {ThemeProvider} from 'styled-components/native';

describe('ModalAddressSearch Component', () => {
  it('should render', () => {
    const rendered = render(
      <ThemeProvider theme={theme}>
        <ModalAddressSearch />
      </ThemeProvider>,
    );
    expect(rendered).toMatchSnapshot();
  });
});
