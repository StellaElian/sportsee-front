import React, { createContext, useState } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

//Provider(émetteur)
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get('auth_token') || null);

  const login = (newToken) => {
    Cookies.set('auth_token', newToken); 
    setToken(newToken); 
  };

  const logout = () => {
    Cookies.remove('auth_token'); 
    setToken(null); // On prévient tout le monde 
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};