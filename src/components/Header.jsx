import React from 'react';
import Logo from '../assets/Logo.svg';

export default function Header() {
    return (
        <header style={{
            width: '100%',
            backgroundColor: '#F2F3FF', 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 50px', 
            boxSizing: 'border-box',
            borderBottom: 'none' 
        }}>
            
            {/* LE LOGO (Partie Gauche) */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Logo} alt="Logo SportSee" /> 
            </div>

            {/* LA NAVIGATION (Partie Droite) */}
            <nav style={{ display: 'flex', gap: '40px', paddingLeft: '48px', alignItems: 'center', fontWeight: '400', fontSize: '14px' , color: '#111111', backgroundColor: '#FFFFFF', width: '461px', height: '49px', borderRadius: '40px'}}>
                <span style={{ cursor: 'pointer' }}>Dashboard</span>
                <span style={{ cursor: 'pointer' }}>Mon profil</span>
                <div style={{
                    width: '1.5px',            
                    height: '17px',           
                    backgroundColor: '#0B23F4', 
                    marginLeft: '20px',      
                    marginRight: '20px'     
                }}></div>
                <span style={{ cursor: 'pointer', color: '#0B23F4', fontWeight: '400', fontSize: '14px' }}>Se déconnecter</span>
            </nav>
            
        </header>
    );
}
