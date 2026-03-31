import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styles from './WeeklyGoalChart.module.css';

export default function WeeklyGoalChart({ nombre }) {
    // On calcule les restants (objectif 6)
    const restants = 6 - nombre < 0 ? 0 : 6 - nombre;
    // --- LES DONNÉES ---
    const data = [
        { name: 'réalisées', value: nombre, color: '#0B23F4' },
        { name: 'restants', value: restants, color: '#B6BDFC' },
    ];
    
    return (

        // LE GRAND ENCADRÉ
        <div className={styles.chartContainer}>

            {/* L'EN-TÊTE DU GRAPHIQUE */}
            <div className={styles.headerContainer}>
                <h3 className={styles.headerTitle}>
                    <span className={styles.headerHighlight}>x{nombre}</span> sur objectif de 6
                </h3>
                <p className={styles.headerSubtitle}>Courses hebdomadaires réalisées</p>
            </div>

            {/* LA BOÎTE (306 x 190) - avec position relative */}
            <div className={styles.chartBox}>

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
                <div className={styles.labelTopRight}>
                    <div className={styles.dotRestants}></div>
                    <span className={styles.labelText}>{restants} restants</span>
                </div>

                {/* Étiquette : 4 réalisées (En bas à gauche de la boîte de 306x190) */}
                <div className={styles.labelBottomLeft}>
                    <div className={styles.dotRealisees}></div>
                    <span className={styles.labelText}>{nombre} réalisées</span>
                </div>

            </div>
        </div>
    );
}