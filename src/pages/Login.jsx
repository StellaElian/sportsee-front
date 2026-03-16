//L'AUDITEUR
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; //le moteur (la radio)

// Les images
import logo from '../assets/Logo.svg';
import loginpicture from '../assets/loginpicture.png';

export default function Login() {
    // --- LE MOTEUR (Ton code logique) ---
    const navigate = useNavigate();
    const { login } = useContext(AuthContext); // On récupère la fonction pour donner le badge

    const handleLogin = (e) => {
        e.preventDefault(); // Empêche la page de clignoter quand on clique
        login('badge-secret-de-test'); // On donne le faux badge
        navigate('/dashboard'); // On ouvre la porte vers le Dashboard 
    };

    // --- Le visuel ---
    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F2F3FF' }}>

            {/* COLONNE GAUCHE (Logo + Formulaire) */}
            <div style={{ flex: 1, paddingTop: '55px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

                {/* Le Logo */}
                <img src={logo} alt="Logo SportSee" style={{ height: '23.41px', marginRight: '260px' }} />

                {/* Le bloc du formulaire */}
                <div style={{ marginTop: '151px', width: '398px', backgroundColor: '#FFFFFF', borderRadius: '10px', marginLeft: 'auto', marginRight: 'auto', padding: '40px', boxSizing: 'border-box' }}>
                    <h1 style={{ fontSize: '28px', fontWeight: '600', color: '#0B23F4', marginBottom: '40px', lineHeight: '1.2' }}>
                        Transformez <br /> vos stats en résultats
                    </h1>

                    <form style={{ display: 'flex', flexDirection: 'column' }}>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label style={{ fontSize: '22px', fontWeight: '500', color: '#111111', marginBottom: '24px' }}>Se connecter</label>
                            <label style={{ fontSize: '14px', fontWeight: '400', color: '#707070', marginBottom: '8px' }}>Adresse email</label>
                            <input
                                type="email"
                                style={{ height: '58px', borderRadius: '10px', border: '1px solid #717171',  marginBottom: '24px' }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label style={{ fontSize: '14px', fontWeight: '400', color: '#707070', marginBottom: '8px' }}>Mot de passe</label>
                            <input
                                type="password"
                                style={{ height: '58px', borderRadius: '10px', border: '1px solid #717171' }}
                            />
                        </div>

                        {/* LE BOUTON CONNECTÉ AU MOTEUR ! */}
                        <button
                            onClick={handleLogin} // On déclenche ta fonction ici !
                            style={{
                                marginTop: '40px', height: '51px', backgroundColor: '#0B23F4', color: '#E7E7E7',
                                borderRadius: '10px', border: 'none', fontSize: '16px', fontWeight: '500', cursor: 'pointer'
                            }}
                        >
                            Se connecter
                        </button>

                    </form>

                    <p style={{ marginTop: '40px', fontSize: '14px', fontWeight: '400', color: '#111111', cursor: 'pointer', textDecoration: 'underline' }}>
                        Mot de passe oublié ?
                    </p>
                </div>
            </div>

            {/* COLONNE DROITE (La grande image) */}
            <div style={{ width: '808px', height: '1024px' }}>
                <img
                    src={loginpicture}
                    alt="Course à pied"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

        </div>
    );
}