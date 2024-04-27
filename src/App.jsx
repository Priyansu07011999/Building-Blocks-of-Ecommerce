import React from 'react';
import { Card, Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function App() {
  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];

  return (
    <>
      <div style={{textAlign: 'center'}} >
        <Navbar bg="light" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav className="mr-auto">
              <div style={{backgroundColor: 'black', padding:'10px'}}>
                 <Nav.Link style={{color: 'white', padding: '3rem'}} href="#home">HOME</Nav.Link>
                 <Nav.Link style={{color: 'white', padding: '3rem'}} href="#store">STORE</Nav.Link>
                 <Nav.Link style={{color: 'white', padding: '3rem'}} href="#about">ABOUT</Nav.Link>
                 <Button variant="primary" style={{ border: '1px solid blue', margin: 'auto' }}>Cart</Button>
              </div>
            </Nav>  
          </Navbar.Collapse>
          <div style={{backgroundColor: 'gray', padding: '30px'}}>
            <Navbar.Brand href="#home" style={{ color: 'white', fontSize: '72px'}}>The Generics</Navbar.Brand>
          </div>
        </Navbar>
      </div>
      <section style={{ backgroundColor: 'white', padding: '20px', width: '100vw',color: 'black', alignItems: 'center' }}>
        <div style={{alignContent: 'center'}}>
        <h3>Music</h3>
        <Container fluid>
          <Row>
            {productsArr.map((product, index) => (
              <Col key={index} xs={12} sm={6} md={6} lg={6} xl={6} style={{ marginBottom: '20px' }}>
                <Card>
                  <Card.Img variant="top" src={product.imageUrl} />
                  <Card.Body>
                    <div style={{display: 'flex', flexWrap: 'nowrap'}}>
                    <Card.Text>
                      Price: ${product.price}
                    </Card.Text>
                    <Button style={{margin: '10px', border: '1px solid blue', backgroundColor: 'blue', color: 'white', borderRadius: '0px', padding: '0px 10px'}} variant="primary">Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        </div>
      </section>
      <footer style={{ backgroundColor: 'cyan', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h2>The Generics</h2>
        <Nav.Link href="https://open.spotify.com" target="_self" style={{ color: 'white', marginRight: '20px', padding: '20px' }}>
          <img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-spotify.png" alt="Spotify" style={{ width: '24px' }} />
        </Nav.Link>
        <Nav.Link href="https://www.youtube.com" target="_self" style={{ color: 'white', marginRight: '20px', padding: '20px' }}>
          <img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-youtube.png" alt="YouTube" style={{ width: '24px' }} />
        </Nav.Link>
        <Nav.Link href="https://www.facebook.com" target="_sef" style={{ color: 'white', padding: '20px' }}>
          <img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook.png" alt="Facebook" style={{ width: '24px' }} />
        </Nav.Link>
      </footer>
    </>
  );
}

export default App;
