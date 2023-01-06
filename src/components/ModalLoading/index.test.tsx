import React from 'react';
import {render} from '@testing-library/react-native';
import ModalLoading from './index';
import theme from '../../theme';
import {ThemeProvider} from 'styled-components/native';

describe('ModalLoading Component', () => {
  it('should render', () => {
    const rendered = render(
      <ThemeProvider theme={theme}>
        <ModalLoading />
      </ThemeProvider>,
    );
    expect(rendered).toMatchSnapshot();
  });
});
