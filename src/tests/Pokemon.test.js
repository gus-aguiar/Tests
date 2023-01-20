import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { Router } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
// import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('6. Teste o componente <Pokemon.js />', () => {
  it('Teste se é renderizado um card com as informações de determinado Pokémon:', () => {
    const { history } = renderWithRouter(<App />);
    expect(screen.getByTestId('pokemon-name')).toHaveTextContent(/pikachu/i);
    expect(screen.getByTestId('pokemon-type')).toHaveTextContent(/electric/i);
    expect(screen.getByTestId('pokemon-weight')).toHaveTextContent(/Average weight: 6.0 kg/i);
    expect(screen.getByRole('img', { name: /pikachu sprite/i }).alt).toBe('Pikachu sprite');
    expect(screen.getByRole('img', { name: /pikachu sprite/i }).src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(screen.getByRole('link', { name: /more details/i }).href).toBe('http://localhost/pokemon/25');
    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');
    userEvent.click(screen.getByRole('checkbox', { name: /pokémon favoritado\?/i }));
    expect(screen.getByRole('img', { name: /pikachu is marked as favorite/i }).src).toBe('http://localhost/star-icon.svg');
    expect(screen.getByRole('img', { name: /pikachu is marked as favorite/i }).alt).toBe('Pikachu is marked as favorite');
  });
});
