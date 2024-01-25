// UserContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(() => localStorage.getItem('accessToken'));

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken !== accessToken) {
      setAccessToken(storedToken);
    }
  }, [accessToken]);

  const updateUser = (token) => {
    setAccessToken(token);
    localStorage.setItem('accessToken', token);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem('accessToken');
  };

  return (
    <UserContext.Provider value={{ accessToken, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
