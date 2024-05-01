import React, { useState } from 'react';
import { CartProvider } from './components/CartContext';
import AppContent from './components/Contents';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About/About';
import ContactMe from './components/Contact/ContactMe';
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail'; // Import the ProductDetail component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import { AuthProvider } from './components/Login/AuthContext'; // Import the AuthProvider

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
      <AuthProvider> {/* Wrap your entire application with AuthProvider */}
        <CartProvider>
          <div>
            <Header toggleCart={toggleCart} cartLength={Cart.length} />
            <Routes>
              <Route path="/" element={<AppContent />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<ContactMe />} />
              <Route path="/product/:productId" element={<ProductDetail />} /> 
            </Routes>
            <Footer />
            {showCart && <Cart closeCart={closeCart} />}
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
