import React from 'react';
import line from '../../assets/line.png';
import styles from './ProfileInfo.module.css';

// On réceptionne les "userInfos" qui ont été envoyées par la page Profil
export default function ProfilInfo({ userInfos }) {

    // TRADUCTEUR: On gère l'anglais ET le français du backend 
    let genreFR = "Non précisé";
    if (userInfos.gender === 'female' || userInfos.gender === 'femme' || userInfos.gender === 'Femme') {
        genreFR = "Femme";
    } else if (userInfos.gender === 'male' || userInfos.gender === 'homme' || userInfos.gender === 'Homme') {
        genreFR = "Homme";
    }

    // On transforme la taille 
    const tailleMetre = Math.floor(userInfos.height / 100); // Récupère le "1"
    const tailleCentimetres = userInfos.height % 100; // Récupère le "70"
    const tailleFormatee = `${tailleMetre}m${tailleCentimetres}`;

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                Votre profil
            </h3>
            <img
                src={line}
                alt="Ligne de séparation"
                className={styles.separatorLine}
            />
            {/* EXPLICATION : On affiche maintenant les variables dynamiques ! */}
            <div className={styles.infoContainer}>
                <div><span className={styles.infoLabel}>Âge :</span> {userInfos.age}</div>
                <div><span className={styles.infoLabel}>Genre :</span> {genreFR}</div>
                <div><span className={styles.infoLabel}>Taille :</span> {tailleFormatee}</div>
                <div><span className={styles.infoLabel}>Poids :</span> {userInfos.weight}kg</div>
            </div>
        </div>
    );
}