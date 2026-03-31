import React, { useContext } from 'react'; // <-- Ajout de useContext
import { AuthContext } from '../../context/AuthContext'; // <-- On importe la poche au bracelet VIP
import { useFetch } from '../../utils/hooks';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Profilinfo from '../../components/ProfileInfo/ProfileInfo';
import StatCard from '../../components/StatCard/StatCard';
import styles from './Profile.module.css';

export default function Profil() {
    // 1.récupèration du bracelet VIP
    const { token } = useContext(AuthContext);

    // lancement cap vers les infos de l'utilisateur
    const { data, isLoading, error } = useFetch('http://localhost:8000/api/user-info', token);

    // pancartes d'attente
    if (isLoading) return <div className={styles.loading}>Chargement du profil... ⏳</div>;
    if (error || !data) return <div className={styles.error}>Erreur serveur 🚨</div>;

    // On extrait les données du vrai serveur
    const userInfos = data.profile;
    const stats = data.statistics; // Le backend nous donne ces calculs 

    // --- LES CALCULS POUR LES CARTES STATISTIQUES ---
    const heures = Math.floor(stats.totalDuration / 60);
    const minutesRestantes = stats.totalDuration % 60;

    const totalDistance = stats.totalDistance; // Déjà calculé par le backend
    const totalSessions = stats.totalSessions; // Déjà calculé par le backend


    const totalCalories = stats.totalCalories;
    const joursDeRepos = 9; // on garde le chiffre fictif---------------A MODIFIER APRES

    return (
        <div className={styles.pageWrapper}>

            <Header />

            <main className={styles.mainContent}>
                <div className={styles.contentLayout}>

                    {/* --- COLONNE DE GAUCHE --- */}
                    <div className={styles.leftColumn}>

                        {/* --- BOÎTE PHOTO --- */}
                        <div className={styles.photoBox}>
                            <img
                                src={userInfos.profilePicture} // <-- On utilise le lien qui vient du backend 
                                alt="Profil de l'utilisateur"
                                className={styles.profileImage}
                            />

                            <div>
                                <h2 className={styles.userName}>
                                    {userInfos.firstName} {userInfos.lastName}
                                </h2>
                                <p className={styles.memberSince}>
                                    Membre depuis le 14 juin 2023
                                </p>
                            </div>
                        </div>

                        {/*On "passe" les vraies données de l'utilisateur (userInfos) au composant ProfilInfo grâce aux "props" */}
                        <Profilinfo userInfos={userInfos} />
                    </div>

                    {/* --- COLONNE DE DROITE (5 cartes) --- */}
                    <div className={styles.rightColumn}>
                        <h2 className={styles.statsTitle}>
                            Vos statistiques <span className={styles.statsSubtitle}>depuis le 14 juin 2023</span>
                        </h2>

                        {/* LA GRILLE DES 5 CARTES (flexWrap permet de les faire passer à la ligne) */}
                        <div className={styles.statsGrid}>
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