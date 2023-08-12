import React from 'react';
import { NotFoundCont, NotFoundImg, NotFoundLink } from './NotFound.styled';

export const NotFound = () => {
  return (
    <NotFoundCont>
      <NotFoundImg
        src="https://miro.medium.com/v2/resize:fit:4800/0*QOZm9X5er1Y0r5-t"
        alt="eror"
      />
      <NotFoundLink to="/">You can go Home</NotFoundLink>
    </NotFoundCont>
  );
};
