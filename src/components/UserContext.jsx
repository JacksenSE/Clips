import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const storedData = localStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : null;
  });
  const [accessToken, setAccessToken] = useState(() => localStorage.getItem('accessToken'));
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(() => localStorage.getItem('userId')); 

  useEffect(() => {
    const initializeUserData = async () => {
      setLoading(true);
      try {
        if (accessToken) {
          
          const userData = await fetchUserData(accessToken);
          setUserData(userData);
          localStorage.setItem('userData', JSON.stringify(userData));
        } else {
         
          setUserData(null);
          localStorage.removeItem('userData');
        }
      } catch (error) {
        console.error('Error initializing user data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    initializeUserData();
  }, [accessToken]);

  const updateUser = async (token) => {
    setLoading(true);
    try {
      setAccessToken(token);
      localStorage.setItem('accessToken', token);
  
      const userData = await fetchUserData(token);
      setUserData(userData);
      localStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.error('Error updating user:', error);
    } finally {
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

      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem('accessToken');
    setUserData(null);
    localStorage.removeItem('userData');
    setUserId(null); 
    localStorage.removeItem('userId');
  };

  return (
    <UserContext.Provider value={{ accessToken, userData, updateUser, logout, loading, userId, setUserId }}>
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
