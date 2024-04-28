import React, { useState } from 'react';
import { CartProvider } from './components/CartContext';
import AppContent from './components/Contents';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  const closeCart = () => {
    setShowCart(false);
  };
  return (
    <Router>
      <CartProvider>
        <div>
          <Header toggleCart={toggleCart} cartLength={Cart.length} />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<AppContent />} />
            <Route path="/home" element={<Home />} /> {/* Fixed the typo here */}
          </Routes>
          <Footer />
          {showCart && <Cart closeCart={closeCart} />}
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
