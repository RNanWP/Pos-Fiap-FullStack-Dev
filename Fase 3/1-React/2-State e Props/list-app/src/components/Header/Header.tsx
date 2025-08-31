import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  background-color: #616161;
  color: white;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #f8d0de;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    transition: width 0.3s ease;
  }

  &.active {
    color: white;
    &::after {
      width: 100%;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <StyledNavLink to="/" end>Home</StyledNavLink>
        <StyledNavLink to="/completed">Tarefas Concluídas</StyledNavLink>
        <StyledNavLink to="/pending">Tarefas Pendentes</StyledNavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;