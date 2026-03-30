import React from 'react';
import line from '../assets/line.png';
import './ProfileInfo.module.css';

// On réceptionne les "userInfos" qui ont été envoyées par la page Profil
export default function ProfilInfo({ userInfos }) {

    // TRADUCTEUR: On gère l'anglais ET le français du backend !
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
        <div style={{
            width: '508px',
            backgroundColor: '#FFFFFF',
            borderRadius: '15px',
            padding: '40px',
            boxSizing: 'border-box',
        }}>
            <h3 style={{ margin: '0 0 30px 0', fontSize: '22px', fontWeight: '500', color: '#111111' }}>
                Votre profil
            </h3>
            <img
                src={line}
                alt="Ligne de séparation"
                style={{marginTop: '24px', marginBottom: '32px', width: '100%'}}
            />
            {/* EXPLICATION : On affiche maintenant les variables dynamiques ! */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '16px', color: '#111111' }}>
                <div><span style={{ color: '#707070' }}>Âge :</span> {userInfos.age}</div>
                <div><span style={{ color: '#707070' }}>Genre :</span> {genreFR}</div>
                <div><span style={{ color: '#707070' }}>Taille :</span> {tailleFormatee}</div>
                <div><span style={{ color: '#707070' }}>Poids :</span> {userInfos.weight}kg</div>
            </div>
        </div>
    );
}