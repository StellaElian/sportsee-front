//L'AUDITEUR
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // On importe la radio

export default function Login() {
    const navigate = useNavigate();

    // On allume pour récupérer juste le bouton Se connecter
    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        // On utilise la fonction du Contexte plus besoin du cookies
        login('badge-secret-de-test');
        navigate('/dashboard');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Page de Connexion</h1>
            <button onClick={handleLogin}>Se connecter</button>
        </div>
    );
}