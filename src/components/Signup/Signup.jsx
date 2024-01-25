// Signup.jsx
import React from 'react';
import SignupForm from './SignUpForm';

const Signup = () => {
  const handleSignup = async (signupData) => {
    try {
     
      const response = await fetch('https://cfc555.ddns.net/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (!response.ok) {
        console.error(`Request failed with status ${response.status}`);
        
        return;
      }

      const data = await response.json();
      console.log('Signup successful:', data);

      
    } catch (error) {
      console.error('Error during signup:', error);
      
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <SignupForm onSignup={handleSignup} />
    </div>
  );
};

export default Signup;
