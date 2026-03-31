//L'AUDITEUR
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; //le moteur (la radio)
import styles from './Login.module.css';
// Les images
import logo from '../../assets/Logo.svg';
import loginpicture from '../../assets/loginpicture.png';


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
        <div className={styles.loginWrapper}>

            {/* COLONNE GAUCHE (Logo + Formulaire) */}
            <div className={styles.leftColumn}>

                {/* Le Logo */}
                <img src={logo} alt="Logo SportSee" className={styles.logo} />

                {/* Le bloc du formulaire */}
                <div className={styles.formContainer}>
                    <h1 className={styles.mainTitle}>
                        Transformez <br /> vos stats en résultats
                    </h1>

                    <form className={styles.formWrapper}>

                        <div className={styles.inputGroup}>
                            <label className={styles.loginLabelTitle}>Se connecter</label>
                            <label className={styles.inputLabel}>Adresse email</label>
                            <input
                                type="email"
                                value={usernameInput}
                                onChange={(e) => setUsernameInput(e.target.value)}
                                className={styles.emailInput}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Mot de passe</label>
                            <input
                                type="password"
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                className={styles.passwordInput}
                            />
                        </div>

                        {/* LE BOUTON CONNECTÉ AU MOTEUR ! */}
                        <button
                            onClick={handleLogin} // On déclenche la fonction ici !
                            className={styles.submitButton}
                        >
                            Se connecter
                        </button>

                    </form>

                    <p className={styles.forgotPassword}>
                        Mot de passe oublié ?
                    </p>
                </div>
            </div>

            {/* COLONNE DROITE (La grande image) */}
            <div className={styles.rightColumn}>
                <img
                    src={loginpicture}
                    alt="Course à pied"
                    className={styles.coverImage}
                />
            </div>

        </div>
    );
}