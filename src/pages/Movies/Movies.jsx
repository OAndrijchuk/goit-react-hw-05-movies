import { fethMoviesByQuery } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  MoviesCont,
} from './Movies.styled';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [value, setValue] = useState(query || '');
  useEffect(() => {
    const fethMovies = async () => {
      try {
        const { results } = await fethMoviesByQuery(query);
        setMovies(results);
      } catch (error) {
        console.log(error.masseg);
      }
    };
    fethMovies();
  }, [query]);
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: value });
  };

  return (
    <MoviesCont>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          name="query"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <ButtonStyled type="submit">Search</ButtonStyled>
      </FormStyled>
      <MoviesList films={movies} />
    </MoviesCont>
  );
};
export default Movies;
