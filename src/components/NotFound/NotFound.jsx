import React from 'react';
import { NotFoundCont, NotFoundImg, NotFoundLink } from './NotFound.styled';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundCont>
      <NotFoundImg
        src="https://miro.medium.com/v2/resize:fit:4800/0*QOZm9X5er1Y0r5-t"
        alt="eror"
      />
      <NotFoundLink
        onClick={e => {
          e.preventDefault();
          navigate('/', { replace: true });
        }}
      >
        You can go Home
      </NotFoundLink>
    </NotFoundCont>
  );
};
