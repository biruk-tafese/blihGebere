// AuthProvider.js
import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContextInstance';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (token, fullName) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('fullName', fullName);
    setUser({ token, fullName });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('fullName');
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const fullName = localStorage.getItem('fullName');
    if (token && fullName) {
      setUser({ token, fullName });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};