import React from 'react';

// On commence par créer notre brique Lego principale
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
    <div style={{ backgroundColor: '#F8F9FA', padding: '20px', borderRadius: '15px' }}>
      <h3>18km en moyenne</h3>
      <p>Total des kilomètres 4 dernières semaines</p>
      
      {/* On dessinera le graphique ici au prochain commit */}
    </div>
  );
}
