import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { Router } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('4. Teste o componente <NotFound.js />', () => {
  it('Teste se a página contém um heading h2 com o texto Page requested not found;', () => {
    const { history } = renderWithRouter(<App />);
    const teste = '/teste';
    act(() => {
      history.push(teste);
    });
    const notFound = screen.getByRole('heading', {
      name: /page requested not found/i,
      level: 2,
    });
    expect(notFound).toBeInTheDocument();
    const img = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(img.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    expect(notFound).toBeInTheDocument();
  });
});
