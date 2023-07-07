import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 50px);
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  color: white;
`;

export const Link = styled(NavLink)`
  margin-top: 25px;
  padding: 10px;
  border: 0px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: #ff4500;
  box-shadow: gray;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    opacity: 0.8;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
