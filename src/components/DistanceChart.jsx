import React from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';


// On commence par créer notre brique principale
export default function DistanceChart({ data }) {
  
  //POINT DE VIGILANCE 1 : FORMATAGE DES DONNÉES
  //petit tableau de 4 cases (S1, S2, S3, S4)
  
  const formattedData = [
    // On va chercher le "jour 1" (data[0]), et on prend sa distance.
    { nomDeLaBarre: 'S1', distanceEnKm: data[0].distance },
    { nomDeLaBarre: 'S2', distanceEnKm: data[1].distance },
    { nomDeLaBarre: 'S3', distanceEnKm: data[2].distance },
    { nomDeLaBarre: 'S4', distanceEnKm: data[3].distance }
  ];

  return (
    // on affiche juste pour le moment: la boîte blanche et le titre
   <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '15px', width: '400px' }}>
      <h3 style={{ color: '#0B23F4' }}>18km en moyenne</h3>
      <p style={{ color: '##707070', fontSize: '12px' }}>Total des kilomètres 4 dernières semaines</p>
      
      {/* --- POINT DE VIGILANCE 2 : ADAPTATION AUX ÉCRANS --- */}
      {/* hauteur fixe au dessin, et la boîte magique s'occupe de la largeur */}
      <div style={{ height: '200px', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          
          {/* On pose la plaque de base et on lui donne les données prêtes */}
          <BarChart data={formattedData}>
            {/*lignes pointillées au fond */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            
            {/* L'axe du bas (on lui dit d'afficher "nomDeLaBarre" : S1, S2...) */}
            <XAxis dataKey="nomDeLaBarre" tick={{ fill: '#707070' }} tickLine={false} axisLine={false} />
            
            {/* L'axe de gauche pour les chiffres */}
            <YAxis tick={{ fill: '##707070' }} tickLine={false} axisLine={false} />
            
            {/* L'étiquette flottante de la souris */}
            <Tooltip />
            
            {/* Les barres violettes : grandir en fonction de la donnée "distanceEnKm" */}
            <Bar dataKey="distanceEnKm" fill="#B6BDFC" radius={[30, 30, 0, 0]} barSize={20} />
          </BarChart>

        </ResponsiveContainer>
      </div>

    </div>
  );
}
