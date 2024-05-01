import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';

const Login = () => {
  const [error, setError] = useState(null);
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[myapi]`, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error.message);
      }

      const data = await response.json();
      login(data.idToken);
      localStorage.setItem('token', data.idToken);
      // Redirect to the products page
      window.location.replace('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="email">
          <Form.Control type="email" placeholder="Email address" style={{ marginBottom: '20px' }} required />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control type="password" placeholder="Password" style={{ marginBottom: '30px' }} required />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: '100%', marginBottom: '10px', background: '#6c63ff', border: 'none' }}>
          Login
        </Button>
        <p style={{ textAlign: 'center', color: '#666' }}>Don't have an account? <a href="/signup" style={{ color: '#6c63ff', textDecoration: 'none' }}>Sign up here</a></p>
      </Form>
    </div>
  );
}

export default Login;
