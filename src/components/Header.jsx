import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useCart } from './CartContext';

function Header({ toggleCart }) {
    const { cart } = useCart();
  
    return (
      <div style={{ textAlign: 'center' }}>
        <Navbar bg="light" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <div style={{ backgroundColor: 'black', padding: '10px' }}>
                <Nav.Link style={{ color: 'white', padding: '3rem' }} href="#home">HOME</Nav.Link>
                <Nav.Link style={{ color: 'white', padding: '3rem' }} href="#store">STORE</Nav.Link>
                <Nav.Link style={{ color: 'white', padding: '3rem' }} href="#about">ABOUT</Nav.Link>
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

export default Header