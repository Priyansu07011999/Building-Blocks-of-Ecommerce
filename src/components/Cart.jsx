import React from 'react';
import {Button} from 'react-bootstrap';

export default function CartItems({ items, onClose }){
    return (
        <div style={{ position: 'fixed', top: '80px', right: '10px', backgroundColor: 'white', padding: '10px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', borderRadius: '5px', height: '90%', width: '500px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h3 style={{fontSize: '32px', textAlign: 'center'}}>Cart</h3>
            <button onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px' }}>&times;</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ width: '20%',  color: 'black'  }}><b>IMAGE</b></div>
            <div style={{ width: '20%', color: 'black'  }}><b>ITEM</b></div>
            <div style={{ width: '20%', color: 'black'  }}><b>PRICE</b></div>
            <div style={{ width: '20%', color: 'black'  }}><b>QUANTITY</b></div>
            <div style={{ width: '20%', color: 'black'  }}></div>
          </div>
          {items.map((item, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ width: '20%', color: 'black' }}><img src={item.imageUrl} alt={item.title} style={{ width: '50px' }} /></div>
              <div style={{ width: '20%', color: 'black'  }}>{item.title}</div>
              <div style={{ width: '20%', color: 'black'  }}>{item.price}</div>
              <div style={{ width: '20%' , color: 'black' }}>{item.quantity}</div>
              <div style={{ width: '20%' }}><Button variant="danger" style={{ backgroundColor: 'red' }}>Remove</Button></div>
              
            </div>
          ))}
        </div>
      );
  }
  

  