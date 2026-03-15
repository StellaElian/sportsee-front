import React from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';

// --- LA BULLE NOIRE (TOOLTIP) ---
const CustomTooltip = ({ active, payload }) => {
  // "payload" est la valise qui contient les données de la barre qu'on survole
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#000000', color: '#E7E7E7', padding: '10px 15px', borderRadius: '10px', textAlign: 'center' }}>
        {/* On affiche la date */}
        <p style={{ margin: '13px 23px 13px 2px', fontSize: '12px', color: '#E7E7E7' }}>{payload[0].payload.date}</p>
        {/* On affiche les kilomètres */}
        <p style={{ margin: 0, fontSize: '16px', fontWeight: '500' }}>{`${payload[0].value} km`}</p>
      </div>
    );
  }
  return null;
};

// On commence par créer notre brique principale
export default function DistanceChart({ data }) {
  //petit tableau de 4 cases (S1, S2, S3, S4)

  const formattedData = [
    {
      nomDeLaBarre: 'S1',
      distanceEnKm: data.slice(0, 7).reduce((total, jour) => total + jour.distance, 0),
      date: '28 mai - 04 juin'
    },
    {
      nomDeLaBarre: 'S2',
      distanceEnKm: data.slice(7, 14).reduce((total, jour) => total + jour.distance, 0),
      date: '05 juin - 11 juin'
    },
    {
      nomDeLaBarre: 'S3',
      distanceEnKm: data.slice(14, 21).reduce((total, jour) => total + jour.distance, 0),
      date: '12 juin - 18 juin'
    },
    {
      nomDeLaBarre: 'S4',
      distanceEnKm: data.slice(21, 28).reduce((total, jour) => total + jour.distance, 0),
      date: '19 juin - 25 juin'
    }
  ];

  return (
    // On met la largeur à 445px, la hauteur à 484px et on utilise display flex !
    <div style={{ backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '10px', width: '445px', height: '484px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

      {/* --- L'EN-TÊTE AVEC LE BOUTON DES DATES --- */}
      <div style={{ display: 'flex', gap: '5px', alignItems: 'flex-start', marginBottom: '30px', width: '100%' }}>

        {/* Partie gauche */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* lineHeight force le texte à avoir une hauteur exacte pour s'aligner avec les boutons de droite */}
          <h3 style={{ color: '#0B23F4', margin: 0, fontSize: '22px', fontWeight: '500', whiteSpace: 'nowrap', lineHeight: '25px' }}>18km en moyenne</h3>
          <p style={{ color: '##707070', fontSize: '12px', fontWeight: '400', margin: 0, whiteSpace: 'nowrap' }}>Total des kilomètres 4 dernières semaines</p>
        </div>

        {/* Partie droite (Date et flèches) */}
        {/* flexShrink: 0 est la commande magique qui INTERDIT au navigateur d'écraser ce bloc ! */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#111111', fontSize: '14px', fontWeight: '400', flexShrink: 0, height: '25px' }}>
          <button style={{ border: '1px solid #E0E0E0', borderRadius: '50%', width: '25px', height: '25px', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, cursor: 'pointer' }}>{"<"}</button>
          <span style={{ whiteSpace: 'nowrap' }}>28 mai - 25 juin</span>
          <button style={{ border: '1px solid #E0E0E0', borderRadius: '50%', width: '25px', height: '25px', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, cursor: 'pointer' }}>{">"}</button>
        </div>

      </div>

      {/* --- LE GRAPHIQUE --- */}
      {/* J'utilise flex: 1 pour que le graphique s'étire bien dans la hauteur */}
      <div style={{ flex: 1, width: '100%', marginBottom: '20px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={formattedData} margin={{ top: 0, right: 45, left: -20, bottom: 0}}>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            {/* On a remis axisLine avec une couleur noire pour afficher les traits des axes ! */}
            <XAxis dataKey="nomDeLaBarre" tick={{ fill: '#707070' }} tickLine={false} axisLine={{ stroke: '#282D30' }} tickMargin={10} />
            {/* tickCount={4} pour ne faire que 4 paliers + tickMargin={10} recule les chiffres pour créer de l'espace */}
            <YAxis
              tick={{ fill: '#707070' }}
              tickLine={false}
              axisLine={{ stroke: '#707070' }}
              tickMargin={10}
              tickCount={4}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />

            {/* Les barres bleues (couleur de ta maquette) et en forme de pilules */}
            <Bar dataKey="distanceEnKm" fill="#B6BDFC" radius={[30, 30, 30, 30]} barSize={15} />

          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* --- LA PETITE LÉGENDE "Km" EN BAS --- */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: 'auto' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#7987FF' }}></div>
        <span style={{ color: '#707070', fontSize: '14px', fontWeight: '400' }}>Km</span>
      </div>

    </div>
  );
}