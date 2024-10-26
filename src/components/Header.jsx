// Header.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
  background-color: #007bff;
  padding: 10px 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const Header = () => (
  <Navbar>
    <h1>Start Bootstrap </h1>
    <NavLinks>
      <Link to="/deploy-test/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>Products</Link>
      <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
      <Link to="/todolist" style={{ color: '#fff', textDecoration: 'none' }}>ToDoList</Link>
      <Link to="/choixmultiple" style={{ color: '#fff', textDecoration: 'none' }}>ChoixMultiple</Link>
    </NavLinks>
  </Navbar>
);

export default Header;
