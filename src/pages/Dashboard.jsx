import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // On importe la radio
import { useFetch } from '../utils/hooks';
import DistanceChart from '../components/DistanceChart';
import HeartRateChart from '../components/HeartRateChart';
import WeeklyGoalChart from '../components/WeeklyGoalChart';
import ActivityCards from '../components/ActivityCards';
import UserCard from '../components/UserCard';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Dashboard() {
    // On allume la radio pour entendre le bouton de déconnexion
    const { logout } = useContext(AuthContext);
    // (On lance la canne à pêche vers le vrai serveur (par exemple sophie id: 123))
    const { data, isLoading, error } = useFetch('http://localhost:8000/user/123');

    //etats
    if (isLoading) {
        return <div style={{ textAlign: 'center', marginTop: '100px', fontSize: '24px' }}>Patience, on pêche les données... 🎣</div>;
    }

    if (error) {
        return <div style={{ textAlign: 'center', marginTop: '100px', color: 'red', fontSize: '24px' }}>Oups, impossible de récupérer vos données serveur !  🚨</div>;
    }

    const userData = data;


    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

            {/* 1. LE HEADER TOUT EN HAUT */}
            <Header />
            <div style={{ backgroundColor: '#F2F3FF', flex: 1, padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* 2. ON AFFICHE LA NOUVELLE CARTE EN HAUT */}
                <UserCard userInfos={userData.userInfos} runningData={userData.runningData} />

                <div style={{ height: '40px' }}></div>

                {/* 3. ON ENGLOBE les GRAPHIQUES DANS UNE BOÎTE DE 1052px POUR ALIGNER AVEC LA CARTE */}
                <div style={{ width: '1052px' }}>

                    <p style={{ fontSize: '22px', color: '#111111', fontWeight: 'medium', marginBottom: '20px' }}>Vos dernières performances</p>

                    {/* --- GRAPHIQUE 163 BPM ET DISTANCE --- */}
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '40px' }}>
                        <DistanceChart data={userData.runningData} />
                        <HeartRateChart data={userData.runningData} />
                    </div>

                    {/* --- SECTION DU BAS (graph Cette semaine) --- */}
                    <div>
                        <p style={{ fontSize: '22px', color: '#111111', fontWeight: '500', margin: '0 0 5px 0' }}>Cette semaine</p>
                        <p style={{ color: '#707070', fontSize: '16px', marginBottom: '20px', fontWeight: '500' }}>Du 23/06/2025 au 30/06/2025</p>

                        <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
                            <WeeklyGoalChart />
                            <ActivityCards />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}
