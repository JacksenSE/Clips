// Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../components/UserContext';

const Login = () => {
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { updateUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (token) => {
    try {
      updateUser(token);
      console.log('Login successful:', token);

      const userDataArray = await fetchUserData(token);

      if (!userDataArray) {
        // Handle the case when user data retrieval fails
        setLoading(false);
        return;
      }

      // Find the user whose email matches the loginIdentifier
      const loggedInUser = userDataArray.find((user) => user.email === loginIdentifier);

      if (!loggedInUser) {
        console.error('Logged-in user not found in the response');
        setLoading(false);
        return;
      }

      const username = loggedInUser.username;
      navigate(`/profile/${username}`);
    } catch (error) {
      console.error('Error during login:', error);
      setLoading(false);
    }
  };

  const fetchUserData = async (token) => {
    try {
      const response = await fetch('https://cfc555.ddns.net/api/login', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error(`Request failed with status ${response.status}`);
        setLoading(false);
        return null;
      }

      const userDataArray = await response.json();
      return userDataArray;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

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

      await handleLogin(data.token);
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleLoginSubmit}>
        <label className="login-label">Email:</label>
        <input
          type="text"
          value={loginIdentifier}
          onChange={(e) => setLoginIdentifier(e.target.value)}
          required
          disabled={loading}
          className="login-input"
        />
        <label className="login-label">Password:</label>
        <input
          type="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          required
          disabled={loading}
          className="login-input"
        />
        <button type="submit" disabled={loading} className="login-button">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
  
};

export default Login;
