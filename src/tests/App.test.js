import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { Router } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('requisito 1', () => {
  it('Teste se o topo da aplicação contém um conjunto fixo de links de navegação e renderiza o home', () => {
    const { history } = renderWithRouter(<App />);
    const { pathname } = history.location;
    const home = screen.getByRole('link', {
      name: /home/i,
    });

    const favoritePoke = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });
    const about = screen.getByRole('link', {
      name: /about/i,
    });
    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favoritePoke).toBeInTheDocument();
    userEvent.click(home);
    expect(pathname).toBe('/');
  });
  it('deve renderizar o componente about', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutLink);
    console.log(history);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });
  it('deve renderizar o componente favorites', () => {
    const { history } = renderWithRouter(<App />);
    const favoritePoke = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });
    userEvent.click(favoritePoke);
    console.log(history);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
  it('Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.', () => {
    const { history } = renderWithRouter(<App />);
    const teste = '/teste';
    act(() => {
      history.push(teste);
    });
    const notFound = screen.getByRole('heading', {
      name: /page requested not found/i,
    });
    expect(notFound).toBeInTheDocument();
  });
});
//
//
