import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { NotFound } from '../../components/NotFound/NotFound';
import {
  DescContainer,
  DetailsLinkStyled,
  GoBackLinkStyled,
  ListStyled,
} from './MovieDetails.styled';
import { fethMovieInfo } from 'api';

const MovieDetails = () => {
  const [film, setfilm] = useState({});
  let location = useLocation();
  const newLoc = useRef(location.state?.from);
  const { movieId } = useParams('movieId');

  useEffect(() => {
    const fethDetails = async () => {
      try {
        const data = await fethMovieInfo(movieId);
        setfilm(data);
      } catch (error) {
        console.log(error.masege);
      }
    };
    fethDetails();
  }, [movieId]);
  return !film ? (
    <NotFound />
  ) : (
    <section>
      <GoBackLinkStyled to={newLoc.current}>&#11148; Go baсk</GoBackLinkStyled>
      <DescContainer>
        <img
          width="300"
          src={
            film.poster_path
              ? `https://image.tmdb.org/t/p/w300/${film.poster_path}`
              : 'https://www.drupal.org/files/project-images/broken-image.jpg'
          }
          alt={film.title}
        />
        <div>
          <h1>
            {film.title || film.name}{' '}
            {`(${new Date(film.release_date).getFullYear()})`}
          </h1>
          <h3>User score: {film.vote_average}</h3>
          <h3>Overview</h3>
          <p>{film.overview}</p>
          <h3>Genres</h3>
          {film.genres && (
            <p>
              {film.genres.map(el => (
                <span key={el.id}>{el.name} </span>
              ))}
            </p>
          )}
        </div>
      </DescContainer>
      <ListStyled>
        <li>
          <DetailsLinkStyled to="cast">Cast</DetailsLinkStyled>
        </li>
        <li>
          <DetailsLinkStyled to="reviews">Reviews</DetailsLinkStyled>
        </li>
      </ListStyled>
      <Suspense>
        <Outlet />
      </Suspense>
    </section>
  );
};
export default MovieDetails;
