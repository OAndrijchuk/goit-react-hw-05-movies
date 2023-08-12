import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  padding: 20px;
  gap: 40px;
  font-size: x-large;
  border-bottom: solid 2px black;
  font-weight: 700;
`;
export const NavLinkStyled = styled(NavLink)`
  color: black;
  position: relative;
  text-decoration: none;
  transition: all 0.2s ease;
  &.active {
    color: gold;
  }
  &:hover:not(.active) {
    transform: scale(1);
    &::after {
      transform: scale(1);
    }
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    transform: scale(0);
    background-color: currentColor;
    transition: all 0.2s ease;
  }
`;
