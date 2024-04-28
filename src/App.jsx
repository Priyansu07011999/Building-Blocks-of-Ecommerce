import React, {useState} from 'react';
import { CartProvider } from './components/CartContext';
import AppContent from './components/Contents';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

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

export default App;
