import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useCart } from './CartContext';
import { NavLink } from 'react-router-dom';

function Header({ toggleCart }) {
  const { cart } = useCart();

  return (
    <div style={{ textAlign: 'center' }}>
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div style={{ backgroundColor: 'black', padding: '10px' }}>
              <NavLink to="/home" style={{ color: 'white', padding: '3rem' }}>HOME</NavLink>
              <NavLink to="/" style={{ color: 'white', padding: '3rem' }}>STORE</NavLink>
              <NavLink to="/about" style={{ color: 'white', padding: '3rem' }}>ABOUT</NavLink>
              <NavLink to="/login" style={{ color: 'white', padding: '3rem' }}>LOGIN</NavLink>
              <NavLink to="/contact" style={{ color: 'white', padding: '3rem' }}>Contact Us</NavLink>
              <Button style={{ color: 'white', marginLeft: '30px' }} onClick={toggleCart}>CART ({cart.length})</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
        <div style={{ backgroundColor: 'gray', padding: '30px' }}>
          <Navbar.Brand href="#home" style={{ color: 'white', fontSize: '72px' }}>The Generics</Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
