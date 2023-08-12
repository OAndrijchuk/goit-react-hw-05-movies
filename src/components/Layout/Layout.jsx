import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderStyled, NavLinkStyled } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <HeaderStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </HeaderStyled>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
