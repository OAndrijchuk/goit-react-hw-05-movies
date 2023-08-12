import React from 'react';
import { ListItem, ListMovies } from './MoviesList.styled';
import { NavLinkStyled } from 'components/Layout/Layout.styled';
import PropTypes from 'prop-types';
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
MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
