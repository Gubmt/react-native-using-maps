import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ModalPanel from './index';
import theme from '../../theme';
import {ThemeProvider} from 'styled-components/native';

const finishService = jest.fn();

describe('ModalPanel Component', () => {
  it('should render with props', () => {
    const rendered = render(
      <ThemeProvider theme={theme}>
        <ModalPanel
          userLocationAddress="Teste endereço usuario"
          providerLocationAddress="Teste endereço provider"
          distance="10 Km"
          time="5 min"
          price="US$25"
          finishService={finishService}
        />
      </ThemeProvider>,
    );
    expect(rendered).toMatchSnapshot();
  });

  it('should execute finishService when click on cancel button', () => {
    const rendered = render(
      <ThemeProvider theme={theme}>
        <ModalPanel
          userLocationAddress="Teste endereço usuario"
          providerLocationAddress="Teste endereço provider"
          distance="10 Km"
          time="5 min"
          price="US$25"
          finishService={finishService}
        />
      </ThemeProvider>,
    );
    expect(rendered).toMatchSnapshot();

    const CancelButton = rendered.getByTestId('cancelButton');

    fireEvent.press(CancelButton);

    expect(finishService).toBeCalled();
  });
});
