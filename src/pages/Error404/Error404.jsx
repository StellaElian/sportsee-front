import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error404.module.css';

export default function Error404() {
    return (
        <div className={styles.errorMessage}>
            <h1>Erreur 404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/login">Retourner à l'accueil</Link>
        </div>
    );
}