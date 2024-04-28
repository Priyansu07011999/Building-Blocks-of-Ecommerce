import React from 'react';
import { useCart } from './CartContext';
import { Button } from 'react-bootstrap';

function Cart() {
  const { cart } = useCart();

  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, right: 0, bottom: 0, width: '300px', padding: '20px', color: 'white', overflowY: 'auto', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', marginBottom: '20px' }}>Cart</h2>
      {cart.map((item) => (
        <div key={item.title} style={{ display: 'flex', borderBottom: '1px solid white', marginBottom: '10px' }}>
          <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px' }} />
          <div style={{ flex: 1 }}>
            <div>{item.title}</div>
            <div>Price: ${item.price}</div>
            <div>Quantity: {item.quantity}</div>
            <Button variant="danger" size="sm" style={{backgroundColor: 'red', padding: '5px'}}>Remove</Button>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default Cart;
