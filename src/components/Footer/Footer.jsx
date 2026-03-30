import React from 'react';
import Logo2 from '../assets/Logo2.svg';
import './Footer.module.css';

export default function Footer() {
    return (
        <footer style={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            justifyContent: 'space-between', // Sépare le texte de gauche et le menu de droite
            alignItems: 'center',
            padding: '20px 100px',
            boxSizing: 'border-box',
            fontSize: '14px',
            fontWeight: '400',
            fontFamily: 'Inter',
            color: '#111111',
            marginTop: 'auto' // Permet de bien le coller en bas de la page
        }}>

            {/* --- PARTIE GAUCHE --- */}
            <div>©Sportsee Tous droits réservés</div>

            {/* --- PARTIE DROITE --- */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <span style={{ cursor: 'pointer' }}>Conditions générales</span>
                <span style={{ cursor: 'pointer' }}>Contact</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Logo2} alt="Logo de SportSee" />
                </div>
            </div>

        </footer>
    );
}
