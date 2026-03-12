import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function AppRouter() {
    return (
        <Routes>
            {/* Si on arrive sur la page principale /, on va vers le login.
            Ne le laisses pas dans le vide, envoies le de suite vers login */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}
