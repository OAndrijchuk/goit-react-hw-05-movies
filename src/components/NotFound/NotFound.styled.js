import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
export const NotFoundCont = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
`;
export const NotFoundLink = styled(Link)`
  z-index: 3;
  top: calc((1vw + 1vh) * 2);
  left: 50%;
  text-decoration: underline;
  position: absolute;
  transform: translateX(-50%);
  color: white;
  font-size: calc((1vw + 1vh) * 2);
  transition: all 0.25s ease;
  &:hover {
    color: blueviolet;
  }
`;
