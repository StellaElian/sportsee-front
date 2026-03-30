import React from 'react';
import './StatCard.module.css';

export default function StatCard({ titre, valeur, unite }) {
    return (
        <div style={{
            backgroundColor: '#0B23F4',
            width: '278px',
            height: '103px',
            borderRadius: '10px',
            padding: '20px 25px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '12px'
        }}>
            <span style={{ fontSize: '14px', color: '#FFFFFF', opacity: 0.9 }}>{titre}</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px', color: '#FFFFFF' }}>
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{valeur}</span>
                <span style={{ fontSize: '16px', fontWeight: '500' }}>{unite}</span>
            </div>
        </div>
    );
}