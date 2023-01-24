import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('7. Teste o componente <PokemonDetails.js />', () => {
  it('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela:', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);
    expect(screen.getByRole('heading', { name: /pikachu details/i, level: 2 })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /more details/i })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /summary/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByText(/this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i)).toBeInTheDocument();
  });
  it('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon:', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);
    expect(screen.getByRole('heading', { name: /game locations of pikachu/i })).toBeInTheDocument();
    expect(screen.getAllByRole('img', { alt: /Pikachu location/i }).length).toBe(3);
    expect(screen.queryAllByRole('img', { alt: /Pikachu location/i })[1].alt).toBe('Pikachu location');
    expect(screen.queryAllByRole('img', { alt: /Pikachu location/i })[1].src).toBe('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');

    expect(screen.getByText(/kanto viridian forest/i)).toBeInTheDocument();
    expect(screen.getByText(/kanto power plant/i)).toBeInTheDocument();
  });
  it('Teste se o usuário pode favoritar um Pokémon através da página de detalhes:', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);
    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    expect(checkbox).toBeInTheDocument();
    userEvent.click(checkbox);
    expect(screen.getByRole('img', { name: /pikachu is marked as favorite/i })).toBeInTheDocument();
    userEvent.click(checkbox);
    expect(screen.queryByRole('img', { name: /pikachu is marked as favorite/i })).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Pokémon favoritado?')).toBeInTheDocument();
  });
});
