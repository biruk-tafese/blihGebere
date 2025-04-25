// filepath: /home/biruktafese/Documents/Evonext/Tutor/blihgebere/src/context/AuthContext.jsx
import React, { useState } from 'react';
import { AuthContext } from './AuthContextInstance'; // Correct import

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = (userData) => {
    // Simulate registration logic
    setUser(userData);
    console.log('User registered:', userData);
  };

  return (
    <AuthContext.Provider value={{ user, register }}>
      {children}
    </AuthContext.Provider>
  );
};