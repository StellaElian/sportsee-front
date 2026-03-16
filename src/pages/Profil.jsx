import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profilinfo from '../components/Profilinfo';
import StatCard from '../components/StatCard';
// Images
import photo_profil from '../assets/photo_profil.png';

// On importe tes fausses données du backend !
import { USER_MOCK_DATA } from '../data/mock';

export default function Profil() {
    // On récupère toutes les données du premier utilisateur du mock 
    const userData = USER_MOCK_DATA[0];

    // --- LES CALCULS POUR LES CARTES STATISTIQUES ---
    // On calcule la durée totale en minutes
    const totalMinutes = userData.runningData.reduce((total, jour) => total + jour.duration, 0);
    const heures = Math.floor(totalMinutes / 60);
    const minutesRestantes = totalMinutes % 60;

    // On calcule les autres totaux
    const totalDistance = userData.runningData.reduce((total, jour) => total + jour.distance, 0).toFixed(0);
    const totalCalories = userData.runningData.reduce((total, jour) => total + jour.caloriesBurned, 0);
    const totalSessions = userData.runningData.length;
    // (Pour le nombre de jours de repos, on met un chiffre fictif en attendant, par ex: 9)
    const joursDeRepos = 9;


    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            <Header />

            <main style={{ backgroundColor: '#F2F3FF', flex: 1, padding: '50px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: '57px', width: '1140px' }}>

                    {/* --- COLONNE DE GAUCHE --- */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                        {/* --- LA NOUVELLE BOÎTE PHOTO --- */}
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '10px',
                            padding: '40px',
                            width: '508px',
                            boxSizing: 'border-box',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '24px'
                        }}>
                            <img
                                src={userData.userInfos.profilePicture} // <-- MAGIE : On utilise le lien qui vient du backend !
                                alt="Photo de profil"
                                style={{ width: '104px', height: '117px', borderRadius: '10px', objectFit: 'cover' }}
                            />

                            <div>
                                <h2 style={{ margin: 0, fontSize: '22px', fontWeight: '500', color: '#111111' }}>
                                    {userData.userInfos.firstName} {userData.userInfos.lastName}
                                </h2>
                                <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#707070', fontWeight: '400' }}>
                                    Membre depuis le 14 juin 2023
                                </p>
                            </div>
                        </div>

                        {/*On "passe" les vraies données de l'utilisateur (userInfos) au composant ProfilInfo grâce aux "props" */}
                        <Profilinfo userInfos={userData.userInfos} />
                    </div>

                    {/* --- COLONNE DE DROITE (5 cartes) --- */}
                    <div style={{ width: '575px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: '500', color: '#111111', marginBottom: '30px', marginTop: 0 }}>
                            Vos statistiques <span style={{ fontSize: '14px', color: '#707070', fontWeight: '400' }}>depuis le 14 juin 2023</span>
                        </h2>

                        {/* LA GRILLE DES 5 CARTES (flexWrap permet de les faire passer à la ligne) */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '19px' }}>
                            <StatCard titre="Temps total couru" valeur={`${heures}h`} unite={`${minutesRestantes}min`} />
                            <StatCard titre="Calories brûlées" valeur={totalCalories} unite="cal" />
                            <StatCard titre="Distance totale parcourue" valeur={totalDistance} unite="km" />
                            <StatCard titre="Nombre de jours de repos" valeur={joursDeRepos} unite="jours" />
                            <StatCard titre="Nombre de sessions" valeur={totalSessions} unite="sessions" />
                        </div>

                    </div>

                </div>
            </main>

            <Footer />

        </div>
    );
}