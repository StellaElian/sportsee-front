import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
//j'importe notre radio (le Contexte) pour que le Vigile puisse l'entendre !
import { AuthContext } from './context/AuthContext';

import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Profil from './pages/Profile/Profile';
import Error404 from './pages/Error404/Error404';


function ProtectedRoute({ children }) {
    const { token } = useContext(AuthContext); // Vérifie le cookie, badge présent ? 
    if (!token) {
        return <Navigate to="/login" />;  
    }
    return children; 
}

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/profil"
                element={
                    <ProtectedRoute>
                        <Profil />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}