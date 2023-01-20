import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { Router } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
// import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('3. Teste o componente <FavoritePokemon.js />', () => {
  it('deve renderizar o componente favorites', () => {
    renderWithRouter(<App />);
    const favoritePoke = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });
    userEvent.click(favoritePoke);
    const noFavorite = screen.getByText(/no favorite pokémon found/i);
    expect(noFavorite).toBeInTheDocument();
  });
  it('Teste se apenas são exibidos os Pokémon favoritados.', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(moreDetails);
    const favorites = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    userEvent.click(favorites);
    const favoritePoke = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });
    userEvent.click(favoritePoke);
    const fotinhoPikachu = screen.getByText(/pikachu/i);
    expect(fotinhoPikachu).toBeInTheDocument();
  });
});
