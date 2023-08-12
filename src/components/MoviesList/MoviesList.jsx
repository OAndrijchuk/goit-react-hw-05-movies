import React from 'react';
import { ListItem, ListMovies } from './MoviesList.styled';
import { NavLinkStyled } from 'components/Layout/Layout.styled';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ films }) => {
  let location = useLocation();
  return (
    <ListMovies>
      {films.map(film => (
        <ListItem key={film.id}>
          <NavLinkStyled state={{ from: location }} to={`/movies/${film.id}`}>
            {film.title || film.name}
          </NavLinkStyled>
        </ListItem>
      ))}
    </ListMovies>
  );
};
