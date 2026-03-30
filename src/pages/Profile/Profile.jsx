import React, { useContext } from 'react'; // <-- Ajout de useContext
import { AuthContext } from '../../context/AuthContext'; // <-- On importe la poche au bracelet VIP
import { useFetch } from '../../utils/hooks'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Profilinfo from '../../components/ProfileInfo/ProfileInfo';
import StatCard from '../../components/StatCard/StatCard';
import './Profile.module.css';

export default function Profil() {
    // 1.récupèration du bracelet VIP
    const { token } = useContext(AuthContext);

    // lancement cap vers les infos de l'utilisateur
    const { data, isLoading, error } = useFetch('http://localhost:8000/api/user-info', token);

    // pancartes d'attente
    if (isLoading) return <div style={{ textAlign: 'center', marginTop: '100px', fontSize: '24px' }}>Chargement du profil... ⏳</div>;
    if (error || !data) return <div style={{ textAlign: 'center', marginTop: '100px', color: 'red', fontSize: '24px' }}>Erreur serveur 🚨</div>;

    // On extrait les données du vrai serveur
    const userInfos = data.profile;
    const stats = data.statistics; // Le backend nous donne gentiment ces calculs 

    // --- LES CALCULS POUR LES CARTES STATISTIQUES ---
    const heures = Math.floor(stats.totalDuration / 60);
    const minutesRestantes = stats.totalDuration % 60;
    
    const totalDistance = stats.totalDistance; // Déjà calculé par le backend
    const totalSessions = stats.totalSessions; // Déjà calculé par le backend


    const totalCalories = stats.totalCalories; 
    const joursDeRepos = 9; // on garde le chiffre fictif---------------A MODIFIER APRES



    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            <Header />

            <main style={{ backgroundColor: '#F2F3FF', flex: 1, padding: '50px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: '57px', width: '1140px' }}>

                    {/* --- COLONNE DE GAUCHE --- */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                        {/* --- BOÎTE PHOTO --- */}
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
                                src={userInfos.profilePicture} // <-- On utilise le lien qui vient du backend 
                                alt="Photo de profil"
                                style={{ width: '104px', height: '117px', borderRadius: '10px', objectFit: 'cover' }}
                            />

                            <div>
                                <h2 style={{ margin: 0, fontSize: '22px', fontWeight: '500', color: '#111111' }}>
                                    {userInfos.firstName} {userInfos.lastName}
                                </h2>
                                <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#707070', fontWeight: '400' }}>
                                    Membre depuis le 14 juin 2023
                                </p>
                            </div>
                        </div>

                        {/*On "passe" les vraies données de l'utilisateur (userInfos) au composant ProfilInfo grâce aux "props" */}
                        <Profilinfo userInfos={userInfos} />
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