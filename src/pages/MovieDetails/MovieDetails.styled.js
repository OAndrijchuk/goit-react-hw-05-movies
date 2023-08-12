import { NavLinkStyled } from 'components/Layout/Layout.styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DescContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  border-bottom: solid 3px black;
`;
export const ListStyled = styled.ul`
  font-size: large;
  padding: 24px 30px;
  border-bottom: solid 2px black;
  display: flex;
  gap: 30px;
  margin: 0;
`;

export const DetailsLinkStyled = styled(NavLinkStyled)`
  font-weight: 700;
`;
export const GoBackLinkStyled = styled(Link)`
  display: block;
  width: fit-content;
  padding: 10px 20px;
  font-size: x-large;
  font-weight: 600;
  text-decoration: none;
  background-color: lightgray;
  color: black;
  margin: 20px 0 0 20px;
  border-radius: 10px;
  transition: background-color 250ms ease;
  &:hover {
    background-color: gray;
  }
`;
