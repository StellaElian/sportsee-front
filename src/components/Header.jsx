import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Logo from '../assets/Logo.svg';

export default function Header() {
    const navigate = useNavigate();
    // On récupère la fonction logout (dans mon AuthContext)
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        if (logout) logout(); // Déchire le faux badge
        navigate('/login');   // Renvoie à l'accueil
    };

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#F2F3FF' }}>
            <header style={{
                width: '1140px',
                backgroundColor: '#F2F3FF',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 0',
                boxSizing: 'border-box',
                borderBottom: 'none'
            }}>

                {/* LE LOGO (Partie Gauche) */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Logo} alt="Logo SportSee" />
                </div>

                {/* LA NAVIGATION (Partie Droite) */}
                <nav style={{ display: 'flex', gap: '40px', paddingLeft: '48px', alignItems: 'center', fontWeight: '400', fontSize: '14px', color: '#111111', backgroundColor: '#FFFFFF', width: '461px', height: '49px', borderRadius: '40px' }}>
                    <span onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>Dashboard</span>
                    <span onClick={() => navigate('/profil')} style={{ cursor: 'pointer' }}>Mon profil</span>
                    <div style={{
                        width: '1.5px',
                        height: '17px',
                        backgroundColor: '#0B23F4',
                        marginLeft: '20px',
                        marginRight: '20px'
                    }}></div>
                    <span onClick={handleLogout} style={{ cursor: 'pointer', color: '#0B23F4', fontWeight: '400', fontSize: '14px' }}>Se déconnecter</span>
                </nav>

            </header>
        </div>
    );
}
