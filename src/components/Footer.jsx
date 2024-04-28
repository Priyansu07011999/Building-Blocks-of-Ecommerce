import {Nav} from 'react-bootstrap';
import React from 'react';

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

export default Footer;