import React, {useState} from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { CartProvider, useCart } from './components/CartContext';
import AppContent from './components/Contents';
import Cart from './components/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <CartProvider>
      <div>
        <Header toggleCart={toggleCart} cartLength = {Cart.length} />
        <AppContent />
        <Footer />
        {showCart && <Cart />}
      </div>
    </CartProvider>
  );
}

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


function Footer() {
  return (
    <footer style={{ backgroundColor: 'cyan', color: 'white', padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 className='text-2xl' style={{ margin: '0' }}>The Generics</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Nav.Link href="https://open.spotify.com" target="_self" style={{ color: 'white', margin: '20px', marginTop: '30px', padding: '20px' }}>
          <img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-spotify.png" alt="Spotify" style={{ width: '24px' }} />
        </Nav.Link>
        <Nav.Link href="https://www.youtube.com" target="_self" style={{ color: 'white', margin: '20px', marginTop: '30px', padding: '20px' }}>
          <img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-youtube.png" alt="YouTube" style={{ width: '24px' }} />
        </Nav.Link>
        <Nav.Link href="https://www.facebook.com" target="_sef" style={{ margin:'20px', marginTop: '30px', color: 'white', padding: '20px' }}>
          <img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook.png" alt="Facebook" style={{ width: '24px' }} />
        </Nav.Link>
      </div>
    </footer>
  );
}

export default App;
