import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    // Fonction de connexion
    const handleLogin = () => {
        // On stocke le Token dans un cookie
        Cookies.set('auth_token', 'badge-secret-de-test');
        // On part vers le dashboard
        navigate('/dashboard');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Page de Connexion</h1>
            <button onClick={handleLogin}>Se connecter</button>
        </div>
    );
}