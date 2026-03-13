import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router';
import { AuthProvider } from './context/AuthContext'; // On importe le Haut-parleur

function App() {
  return (
    <BrowserRouter>
      {/* On englobe tout le site avec le Haut-parleur */}
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;