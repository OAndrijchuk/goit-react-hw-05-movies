import { fethBestMovies } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { HomeCont } from './Home.styled';

const Home = () => {
  const [bestFilms, setBestFilms] = useState([]);

  useEffect(() => {
    const fethFilms = async () => {
      const { results } = await fethBestMovies();
      setBestFilms(results);
    };
    fethFilms();
  }, []);

  return (
    <HomeCont>
      <h1>Trending today</h1>
      <MoviesList films={bestFilms} />
    </HomeCont>
  );
};
export default Home;
