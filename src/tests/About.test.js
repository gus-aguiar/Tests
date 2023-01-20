import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { Router } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
// import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('2. Teste o componente <About.js />.', () => {
  it('Teste se a página contém um heading h2 com o texto About Pokédex;', () => {
    renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutLink);
    const agaDois = screen.getByRole('heading', {
      name: /about pokédex/i,
      level: 2,
    });
    expect(agaDois).toBeInTheDocument();
  });
  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
    renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutLink);
    const parUm = screen.getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all pokémon/i,
    );
    expect(parUm).toBeInTheDocument();
    const parDois = screen.getByText(
      /one can filter pokémon by type, and see more details for each one of them/i,
    );
    expect(parDois).toBeInTheDocument();
  });
  it('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
    renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutLink);
    const img = screen.getByRole('img', {
      name: /pokédex/i,
    });
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
