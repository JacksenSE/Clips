// LoginForm.jsx
import React, { useState } from 'react';

const LoginForm = ({ onLogin, loading, onSubmit, loginIdentifier, setLoginIdentifier, loginPassword, setLoginPassword }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://cfc555.ddns.net/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: loginIdentifier, password: loginPassword }),
      });

      if (!response.ok) {
        console.error(`Request failed with status ${response.status}`);
        return;
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Pass the token to the parent component
      onLogin(data.token);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label> Username32:</label>
      <input
        type="text"
        value={loginIdentifier}
        onChange={(e) => setLoginIdentifier(e.target.value)}
        required
        disabled={loading} // Disable input during loading
      />
      <label>Password:</label>
      <input
        type="password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
        required
        disabled={loading} // Disable input during loading
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
