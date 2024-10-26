// Header.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = styled.nav`
  background-color: #007bff;
  padding: 10px 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 4px;
    transition: 0.3s;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar>
      <h1>Start Bootstrap</h1>
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </Hamburger>
      <NavLinks open={menuOpen}>
        <Link to="/deploy-test/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>Products</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
        <Link to="/todolist" style={{ color: '#fff', textDecoration: 'none' }}>ToDoList</Link>
        <Link to="/choixmultiple" style={{ color: '#fff', textDecoration: 'none' }}>ChoixMultiple</Link>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
