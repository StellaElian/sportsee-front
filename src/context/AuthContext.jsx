import React, { createContext, useState } from 'react';
import Cookies from 'js-cookie';

//On fabrique la f.r vide 
export const AuthContext = createContext();

//On fabrique le Provider(émetteur)
export const AuthProvider = ({ children }) => {
  // On crée une mémoire (state) pour retenir si on a un badge (token)
  //on fouille dans la poche (cookie) pour voir s'il y en a déjà un.
  const [token, setToken] = useState(Cookies.get('auth_token') || null);

  // robot officiel pour SE CONNECTER
  const login = (newToken) => {
    Cookies.set('auth_token', newToken); // On range dans la poche
    setToken(newToken); // On le crie dans le haut-parleur
  };

  //robot officiel pour SE DÉCONNECTER
  const logout = () => {
    Cookies.remove('auth_token'); // On vide 
    setToken(null); // On prévient tout le monde que c'est fini
  };

  return (
    // Tout ce qui est dans "value" sera entendu par ceux qui ont le context, (comme bouton "ON")
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};