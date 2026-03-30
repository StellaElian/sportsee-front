import React from 'react';
// On importe ComposedChart, et on n'oublie pas Line (pour la courbe) et Bar (pour les barres)
import { ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Line } from 'recharts';
import './HeartRateChart.module.css';

// --- NOTRE PETITE BULLE NOIRE (TOOLTIP) ---
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#717171', color: '#ffffff', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
        <p style={{ margin: '0 0 5px 0', fontSize: '12px', color: '#F2F3FF' }}>{payload[0].payload.jour}</p>
        <p style={{ margin: 0, fontSize: '14px', color: '#FCC1B6' }}>Min: {payload[0].payload.min} bpm</p>
        <p style={{ margin: 0, fontSize: '14px', color: '#F4320B' }}>Max: {payload[0].payload.max} bpm</p>
        <p style={{ margin: 0, fontSize: '14px', color: '#0B23F4' }}>Moy: {payload[0].payload.average} bpm</p>
      </div>
    );
  }
  return null;
};

export default function HeartRateChart({ data }) {

  // --- 1. LE ROBOT FORMATTEUR ---
  // On prend les 7 premiers jours et on extrait le min, max et average.
  const jours = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const formattedData = data.slice(0, 7).map((jour, index) => {
    return {
      jour: jours[index],
      min: jour.heartRate.min,
      max: jour.heartRate.max,
      average: jour.heartRate.average
    };
  });

  return (
    // AJOUT DE FLEXBOX ICI POUR GERER LA HAUTEUR DE 484px
    <div style={{ backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '15px', width: '583px', boxSizing: 'border-box', height: '484px', display: 'flex', flexDirection: 'column' }}>

      {/* --- 2. L'EN-TÊTE (Alignement strict comme le précédent) --- */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h3 style={{ color: '#F4320B', margin: 0, fontSize: '22px', fontWeight: '500', whiteSpace: 'nowrap', lineHeight: '25px' }}>163 BPM</h3>
          <p style={{ color: '#707070', fontSize: '12px', fontWeight: '400', margin: 0, whiteSpace: 'nowrap' }}>Fréquence cardiaque moyenne</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111111', fontSize: '12px', fontWeight: '400', flexShrink: 0, height: '25px' }}>
          <button style={{ border: '1px solid #E0E0E0', borderRadius: '50%', width: '25px', height: '25px', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, cursor: 'pointer' }}>{"<"}</button>
          <span style={{ whiteSpace: 'nowrap' }}>28 mai - 04 juin</span>
          <button style={{ border: '1px solid #E0E0E0', borderRadius: '50%', width: '25px', height: '25px', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, cursor: 'pointer' }}>{">"}</button>
        </div>
      </div>

      {/* --- 3. LE GRAPHIQUE COMPOSÉ --- */}
      {/* REMPLACEMENT DE HEIGHT 220px PAR FLEX 1 POUR QU'IL REMPLISSE L'ESPACE */}
      <div style={{ flex: 1, width: '100%', marginBottom: '20px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={formattedData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis dataKey="jour" tick={{ fill: '#707070' }} tickLine={false} axisLine={{ stroke: '#282D30' }} tickMargin={10} />

            {/* L'axe Y : On lui dit de s'adapter aux battements de coeur (ex: de 130 à 190) */}
            <YAxis tick={{ fill: '#707070' }} tickLine={false} axisLine={{ stroke: '#282D30' }} tickMargin={10} domain={['dataMin - 5', 'dataMax + 5']} />

            <Tooltip content={<CustomTooltip />} cursor={false} />

            {/* Les 2 barres (elles vont se mettre côte à côte toutes seules !) */}
            <Bar dataKey="min" fill="#FCC1B6" radius={[30, 30, 30, 30]} barSize={14} />
            <Bar dataKey="max" fill="#F4320B" radius={[30, 30, 30, 30]} barSize={14} />

            {/* La ligne bleue qui ondule (monotone) par dessus les barres */}
            <Line type="monotone" dataKey="average" stroke="#F2F3FF" strokeWidth={3} dot={{ r: 4, fill: '#0B23F4' }} />

          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* --- 4. LA LÉGENDE --- */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: 'auto', fontSize: '12px', color: '#707070', fontWeight: 'medium' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FCC1B6' }}></div> Min
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F4320B' }}></div> Max BPM
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0B23F4' }}></div> Moy BPM
        </div>
      </div>

    </div>
  );
}