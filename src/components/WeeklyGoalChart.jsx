import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// --- LES DONNÉES ---
const data = [
    { name: 'réalisées', value: 4, color: '#0B23F4' }, 
    { name: 'restants', value: 2, color: '#B6BDFC' } 
];

export default function WeeklyGoalChart() {
    return (
        // LE GRAND ENCADRÉ
        <div style={{ backgroundColor: '#F8F9FA', padding: '30px', borderRadius: '15px', width: '450px', height: '342px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>

            {/* L'EN-TÊTE DU GRAPHIQUE */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '20px', color: '#9B9EAC' }}>
                    <span style={{ color: '#0B23F4', fontWeight: 'bold' }}>x4</span> sur objectif de 6
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#9B9EAC' }}>Courses hebdomadaires réalisées</p>
            </div>

            {/* LA BOÎTE (306 x 190) - avec position relative */}
            <div style={{ position: 'relative', width: '306px', height: '190px', margin: '0 auto' }}>

                {/* LE GRAPHIQUE AU CENTRE */}
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%" // Centré horizontalement
                            cy="50%" // Centré verticalement
                            innerRadius={40} // Taille du trou
                            outerRadius={76} // 162 / 2 (La taille exacte de Figma)
                            startAngle={0} // Ton réglage parfait
                            endAngle={-360} // Ton réglage parfait
                            dataKey="value"
                            stroke="none" // On enlève la bordure blanche entre les parts
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* --- NOS ÉTIQUETTES--- */}

                {/* Étiquette : 2 restants (En haut à droite de la boîte de 306x190) */}
                <div style={{ position: 'absolute', top: '0px', right: '0px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#B6BDFC' }}></div>
                    <span style={{ fontSize: '12px', color: '#9B9EAC' }}>2 restants</span>
                </div>

                {/* Étiquette : 4 réalisées (En bas à gauche de la boîte de 306x190) */}
                <div style={{ position: 'absolute', bottom: '0px', left: '0px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0B23F4' }}></div>
                    <span style={{ fontSize: '12px', color: '#9B9EAC' }}>4 réalisées</span>
                </div>

            </div>

        </div>
    );
}