import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContextInstance';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Retrieve user from localStorage if it exists and is not expired
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const expiration = localStorage.getItem('userExpiration');
    if (storedUser && expiration && new Date() < new Date(expiration)) {
      return storedUser;
    }
    return null;
  });

  const register = (userData) => {
    // Simulate registration logic
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 1); // Set expiration to 1 hour from now
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('userExpiration', expirationDate.toISOString());
    setUser(userData);
    console.log('User registered:', userData);
  };

  const logout = () => {
    // Clear user from state and localStorage
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('userExpiration');
  };

  useEffect(() => {
    // Automatically log out the user if the expiration date is reached
    const interval = setInterval(() => {
      const expiration = localStorage.getItem('userExpiration');
      if (expiration && new Date() > new Date(expiration)) {
        logout();
      }
    }, 1000); // Check every second
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthContext.Provider value={{ user, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};