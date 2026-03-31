import React from 'react';
import styles from './ActivityCards.module.css';

export default function ActivityCards({distance, duree}) {
    return (
        // Le conteneur global :centrage vertical
        <div className={styles.container}>
            {/* --- CARTE 1 : Durée d'activité --- */}
            <div className={styles.card}>
                <p className={styles.cardTitle}>Durée d'activité</p>
                <p className={styles.valueContainer}>
                    <span className={styles.durationValue}>{duree}</span>
                    <span className={styles.durationUnit}>minutes</span>
                </p>
            </div>

            {/* --- CARTE 2 : Distance --- */}
           <div className={styles.card}>
                <p className={styles.cardTitle}>Distance totale parcourue</p>
                <p className={styles.valueContainer}>
                    <span className={styles.distanceValue}>{distance}</span>
                    <span className={styles.distanceUnit}>kilomètres</span>
                </p>
            </div>
        </div>
    );
}