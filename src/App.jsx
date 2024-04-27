import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import CartItems from './components/Cart'

function App() {

  const dummyProducts = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    }
  ]

  const [cartItems, setCartItems] = useState(dummyProducts);
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <>
      <div style={{ textAlign: 'center' }} >
        <Navbar bg="light" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <div style={{ backgroundColor: 'black', padding: '10px' }}>
                <Nav.Link style={{ color: 'white', padding: '3rem' }} href="#home">HOME</Nav.Link>
                <Nav.Link style={{ color: 'white', padding: '3rem' }} href="#store">STORE</Nav.Link>
                <Nav.Link style={{ color: 'white', padding: '3rem' }} href="#about">ABOUT</Nav.Link>
                <Button variant="primary" style={{ border: '1px solid blue', margin: 'auto' }} onClick={toggleCart}>Cart ({cartItems.length})</Button>
              </div>
            </Nav>
          </Navbar.Collapse>
          <div style={{ backgroundColor: 'gray', padding: '30px' }}>
            <Navbar.Brand href="#home" style={{ color: 'white', fontSize: '72px' }}>The Generics</Navbar.Brand>
          </div>
        </Navbar>
      </div>

      {cartVisible && <CartItems items={cartItems} onClose={toggleCart} />}

      <section style={{ backgroundColor: 'white', padding: '20px', color: 'black', alignItems: 'center', width: '100vw' }}>
        <div style={{ textAlign: 'center' }}>
          <h3>Music</h3>
          <Container>
            <Row>
              <Col xs={12} md={6} lg={6} style={{ marginBottom: '20px' }}>
                <Card>
                  <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" />
                  <Card.Body>
                    <Card.Title>Colors</Card.Title>
                    <Card.Text>
                      Price: $100
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={6} style={{ marginBottom: '20px' }}>
                <Card>
                  <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" />
                  <Card.Body>
                    <Card.Title>Black and white Colors</Card.Title>
                    <Card.Text>
                      Price: $50
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={6} style={{ marginBottom: '20px' }}>
                <Card>
                  <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" />
                  <Card.Body>
                    <Card.Title>Yellow and Black Colors</Card.Title>
                    <Card.Text>
                      Price: $70
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <footer style={{ backgroundColor: 'cyan', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 className='text-xl'>The Generics</h1>
        <Nav.Link href="https://open.spotify.com" target="_self" style={{ color: 'white', marginRight: '20px', padding: '20px' }}>
          <img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-spotify.png" alt="Spotify" style={{ width: '40px' }} />
        </Nav.Link>
        <Nav.Link href="https://www.youtube.com" target="_self" style={{ color: 'white', marginRight: '20px', padding: '20px' }}>
          <img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-youtube.png" alt="YouTube" style={{ width: '40px' }} />
        </Nav.Link>
        <Nav.Link href="https://www.facebook.com" target="_self" style={{ color: 'white', padding: '20px' }}>
          <img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook.png" alt="Facebook" style={{ width: '40px' }} />
        </Nav.Link>
      </footer>
    </>
  );
}


export default App
