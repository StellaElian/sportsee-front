import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Error404 from './pages/Error404';

// LE VIGILE
function ProtectedRoute({ children }) {
    const {token} = useContext(AuthContext); // Vérifie le cookie, badge présent ? 
    if (!token) {
        return <Navigate to="/login" />; // Pas de badge = dehors 
    }
    return children; // A un badge = entre 
}

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />

            {/*On enferme le Dashboard derrière le Vigile */}
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}