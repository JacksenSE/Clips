
import React, { useState } from 'react';

const SignupForm = ({ onSignup }) => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onSignup({
      email: registerEmail,
      username: registerUsername,
      password: registerPassword,
    });
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <label className="signup-label">Email:</label>
      <input
        className="signup-input"
        type="email"
        value={registerEmail}
        onChange={(e) => setRegisterEmail(e.target.value)}
        required
      />
      <label className="signup-label">Username:</label>
      <input
        className="signup-input"
        type="text"
        value={registerUsername}
        onChange={(e) => setRegisterUsername(e.target.value)}
        required
      />
      <label className="signup-label">Password:</label>
      <input
        className="signup-input"
        type="password"
        value={registerPassword}
        onChange={(e) => setRegisterPassword(e.target.value)}
        required
      />
      <button className="signup-button" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
