import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { Router } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
// import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('5. Teste o componente <Pokedex.js />', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered Pokémon;', () => {
    renderWithRouter(<App />);
    const paragrafo = screen.getByRole('heading', {
      name: /encountered pokémon/i,
      level: 2,
    });
    expect(paragrafo).toBeInTheDocument();
  });
  it('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWithRouter(<App />);
    const nextPoke = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });
    userEvent.click(nextPoke);
    expect(screen.getByTestId('pokemon-name')).toHaveTextContent('Charmander');
    userEvent.click(nextPoke);
    const caterpie = screen.getByText(/caterpie/i);
    expect(caterpie).toBeInTheDocument();
    userEvent.click(nextPoke);
    const ekans = screen.getByText(/ekans/i);
    expect(ekans).toBeInTheDocument();
    userEvent.click(nextPoke);
    const alakazam = screen.getByText(/alakazam/i);
    expect(alakazam).toBeInTheDocument();
    userEvent.click(nextPoke);
    const mew = screen.getByText(/mew/i);
    expect(mew).toBeInTheDocument();
    userEvent.click(nextPoke);
    expect(screen.getByTestId('pokemon-name')).toHaveTextContent('Rapidash');
    userEvent.click(nextPoke);
    const snorlax = screen.getByText(/snorlax/i);
    expect(snorlax).toBeInTheDocument();
    userEvent.click(nextPoke);
    const dragonair = screen.getByText(/dragonair/i);
    expect(dragonair).toBeInTheDocument();
    userEvent.click(nextPoke);
    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();
    const dragonaira = screen.queryByText(/dragonair/i);
    expect(dragonaira).not.toBeInTheDocument();
  });
  it('Teste se a Pokédex tem os botões de filtro:', () => {
    renderWithRouter(<App />);
    const testid = 'pokemon-type-button';
    const all = screen.getByRole('button', {
      name: /all/i,
      testid: 'pokemon-type-button',
    });
    expect(all).toBeInTheDocument();
    const eletric = screen.getByRole('button', {
      name: /electric/i,
      testid,

    });
    expect(eletric).toBeInTheDocument();
    const fire = screen.getByRole('button', {
      name: /fire/i,
      testid,

    });
    expect(fire).toBeInTheDocument();
    const bug = screen.getByRole('button', {
      name: /bug/i,
      testid,

    });
    expect(bug).toBeInTheDocument();
    const poison = screen.getByRole('button', {
      name: /poison/i,
      testid,

    });
    expect(poison).toBeInTheDocument();
    const psychic = screen.getByRole('button', {
      name: /psychic/i,
      testid,

    });
    expect(psychic).toBeInTheDocument();
    const normal = screen.getByRole('button', {
      name: /normal/i,
      testid,

    });
    expect(normal).toBeInTheDocument();
    const dragon = screen.getByRole('button', {
      name: /dragon/i,
      testid,

    });
    expect(dragon).toBeInTheDocument();
    userEvent.click(screen.getByText(/fire/i));
    expect(screen.getByText(/Charmander/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/all/i));
    expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
    expect(screen.getAllByTestId(testid).length).toBe(7);
    userEvent.click(normal);
    expect(screen.getByText(/snorlax/i)).toBeInTheDocument();
    expect(screen.getByText(/all/i).type)
  });
});
