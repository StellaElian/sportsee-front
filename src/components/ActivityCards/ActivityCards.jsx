import React from 'react';
import './ActivityCards.module.css';

export default function ActivityCards({distance, duree}) {
    return (
        // Le conteneur global :centrage vertical
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '16px', height: '342px' }}>
            
            {/* --- CARTE 1 : Durée d'activité --- */}
            <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                padding: '20px 30px', // 20px en haut/bas, 30px à gauche/droite
                width: '572px',      
                height: '103px',      
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '19px'           // espacement entre le titre et le chiffre
            }}>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '400', color: '#707070' }}>Durée d'activité</p>
                <p style={{ margin: 0}}>
                    <span style={{ fontSize: '22px', fontWeight: 'medium', color: '#0B23F4' }}>{duree}</span>
                    <span style={{ fontSize: '16px', color: '#B6BDFC', marginLeft: '4px' }}>minutes</span>
                </p>
            </div>

            {/* --- CARTE 2 : Distance --- */}
            <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                padding: '20px 30px',
                width: '572px',
                height: '103px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '19px'
            }}>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '400', color: '#707070' }}>Distance totale parcourue</p>
                <p style={{ margin: 0 }}>
                    <span style={{ fontSize: '22px', fontWeight: '500', color: '#F4320B' }}>{distance}</span>
                    <span style={{ fontSize: '16px', fontWeight: '500', color: '#FCC1B6', marginLeft: '4px' }}>kilomètres</span>
                </p>
            </div>

        </div>
    );
}
