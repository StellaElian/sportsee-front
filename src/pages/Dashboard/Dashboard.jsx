import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'; 
import { useFetch } from '../../utils/hooks';
import DistanceChart from '../../components/DistanceChart/DistanceChart';
import HeartRateChart from '../../components/HeartRateChart/HeartRateChart';
import WeeklyGoalChart from '../../components/WeeklyGoalChart/WeeklyGoalChart';
import ActivityCards from '../../components/ActivityCards/ActivityCards';
import UserCard from '../../components/UserCard/UserCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Dashboard.module.css';


export default function Dashboard() {
    const { token } = useContext(AuthContext);

    // infos du profil (nom, photo...)
    const { data: infoData, isLoading: infoLoading, error: infoError } = useFetch('http://localhost:8000/api/user-info', token);

    // les graphiques
    const { data: activityData, isLoading: activityLoading, error: activityError } = useFetch('http://localhost:8000/api/user-activity?startWeek=2025-05-28&endWeek=2025-06-30', token);

    if (infoLoading || activityLoading) {
        return <div className={styles.loadingMessage}>Patience, on pêche les données... 🎣</div>;
    }

    if (infoError || activityError || !infoData || !activityData) {
        return <div className={styles.errorMessage}>Oups, impossible de récupérer vos données serveur !  🚨</div>;
    }

    const userData = {
        userInfos: infoData.profile,
        runningData: activityData 
    };

    // Si activityData existe, on compte le nombre de courses, sinon on met 0
    const nombreDeCourses = activityData ? activityData.length : 0; 
    const totalDistance = activityData ? activityData.reduce((total, jour) => total + jour.distance, 0).toFixed(1) : 0;
    const totalDuree = activityData ? activityData.reduce((total, jour) => total + jour.duration, 0) : 0;


    return (
        <div className={styles.dashboardWrapper}>
            <Header />
            <div className={styles.mainContent}>
                <UserCard userInfos={userData.userInfos} runningData={userData.runningData} />

                <div className={styles.spacer}></div>

                <div className={styles.dashboardGrid}>

                    <p className={styles.sectionTitle}>Vos dernières performances</p>

                    {/* --- GRAPHIQUE 163 BPM ET DISTANCE --- */}
                    <div className={styles.chartsRowOne}>
                        <DistanceChart data={userData.runningData} />
                        <HeartRateChart data={userData.runningData} />
                    </div>

                    {/* --- graph Cette semaine --- */}
                    <div>
                        <p className={styles.weekTitle}>Cette semaine</p>
                        <p className={styles.weekSubtitle}>Du 23/06/2025 au 30/06/2025</p>
                        <div className={styles.chartsRowTwo}>
                            <WeeklyGoalChart nombre={nombreDeCourses} />
                            <ActivityCards distance={totalDistance} duree={totalDuree} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
