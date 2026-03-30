//L'AUDITEUR
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; //le moteur (la radio)
import './Login.module.css';
// Les images
import logo from '../assets/Logo.svg';
import loginpicture from '../assets/loginpicture.png';


export default function Login() {
    // --- LES VARIABLES QUI LISENT TES CASES ---
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [erreurTexte, setErreurTexte] = useState("");

    // --- LE MOTEUR (Ton code logique) ---
    const navigate = useNavigate();
    const { login } = useContext(AuthContext); // On récupère la fonction pour donner le badge

    // --- LE MOTEUR (La vraie connexion !) ---
    const handleLogin = async (e) => {
        e.preventDefault();
        setErreurTexte("");

        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: usernameInput, // On envoie ce qui es tapé !
                    password: passwordInput  // On envoie ce qui es tapé !
                })
            });

            const data = await response.json();

            if (data.token) {
                login(data.token); // On récupère le bracelet VIP
                navigate('/dashboard'); // On ouvre les portes !
            } else {
                // On affiche la vraie raison du refus 
                setErreurTexte(data.message || "Identifiants incorrects !");
            }
        } catch (err) {
            setErreurTexte("Le serveur est éteint ou inaccessible !");
        }
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
                                value={usernameInput}
                                onChange={(e) => setUsernameInput(e.target.value)}
                                style={{ height: '58px', borderRadius: '10px', border: '1px solid #717171', marginBottom: '24px', fontSize: '14px', fontWeight: '400', color: '#707070' }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label style={{ fontSize: '14px', fontWeight: '400', color: '#707070', marginBottom: '8px' }}>Mot de passe</label>
                            <input
                                type="password"
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
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