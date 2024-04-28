import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useCart } from './CartContext';

function AppContent() {
  const { addToCart } = useCart();

  const productsArr = [
    {
      id: 1,
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      id: 2,
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      id: 3,
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      id: 4,
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];

  return (
    <>
      <section style={{ backgroundColor: 'white', padding: '20px', color: 'black', alignItems: 'center' }}>
        <Container>
          <h3 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Music</h3>
          <Row style={{ justifyContent: 'center' }}>
            {productsArr.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={6} lg={6} xl={6} style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <ProductCard product={product} addToCart={addToCart} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

function ProductCard({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Text style={{text: 'bold', textAlign: 'center', marginTop: '1rem',marginBottom: '10px'  ,fontFamily: 'Arial, sans-serif', fontWeight: 'bold'}}> {product.title}</Card.Text>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Card.Text>${product.price}</Card.Text>
        </div>
        <Button onClick={handleAddToCart} style={{ border: '1px solid blue', backgroundColor: 'blue', color: 'white', borderRadius: '0px', padding: '0px 10px', marginTop: '10px' }} variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default AppContent;
