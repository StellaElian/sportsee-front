import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // On importe la radio

export default function Dashboard() {
    // On allume la radio pour entendre le Token et le bouton de déconnexion
    const { token, logout } = useContext(AuthContext);

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Tableau de Bord 📊</h1>
            {/* On affiche fièrement ce qu'on entend du context*/}
            <p>Votre badge secret est : <strong>{token}</strong></p>

            <button onClick={logout}>Se déconnecter</button>
        </div>
    );
}