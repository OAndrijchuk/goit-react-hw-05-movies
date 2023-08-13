import { fethCast } from 'api';
import { NotFound } from 'components/NotFound/NotFound';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from './Card/Card';
import { ListStyled } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams('movieId');

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await fethCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCast();
  }, [movieId]);

  return cast.length ? (
    <ListStyled>
      {cast.map((person, index) => (
        <Card person={person} key={index} />
      ))}
    </ListStyled>
  ) : (
    <NotFound />
  );
};
export default Cast;
