import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Logo from '../../assets/Logo.svg';
import styles from './Header.module.css';

export default function Header() {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        if (logout) logout(); 
        navigate('/login');   
    };

    return (
        <div className={styles.headerWrapper}>
            <header className={styles.headerInner}>

                {/* LE LOGO (Partie Gauche) */}
                <div className={styles.logoContainer}>
                    <img src={Logo} alt="Logo SportSee" />
                </div>

                {/* LA NAVIGATION (Partie Droite) */}
                <nav className={styles.navigation}>
                    <span onClick={() => navigate('/dashboard')} className={styles.navLink}>Dashboard</span>
                    <span onClick={() => navigate('/profil')} className={styles.navLink}>Mon profil</span>
                    <div className={styles.separator}></div>
                    <span onClick={handleLogout} className={styles.logoutLink}>Se déconnecter</span>
                </nav>

            </header>
        </div>
    );
}
