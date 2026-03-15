import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // On importe la radio
import { USER_MOCK_DATA } from '../data/mock';
import DistanceChart from '../components/DistanceChart';
import HeartRateChart from '../components/HeartRateChart';
import WeeklyGoalChart from '../components/WeeklyGoalChart';


export default function Dashboard() {
    // On allume la radio pour entendre le bouton de déconnexion
    const { logout } = useContext(AuthContext);
    // On prend les données du premier utilisateur pour le test (Sophie)
    const userData = USER_MOCK_DATA[0];


    return (
        <div style={{ padding: '50px' }}>
            {/* On utilise les vraies données de Sophie pour lui dire bonjour */}
            <p>Vos statistiques </p>
            <h1>{userData.userInfos.firstName} !</h1>

            {/* --- GRAPHIQUE 163 BPM --- */}
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                {/* affichage graphique + envoie de la liste "runningData" de Sophie */}
                <DistanceChart data={userData.runningData} />
                <HeartRateChart data={userData.runningData} />
            </div>
            {/* --- SECTION DU BAS (Cette semaine) --- */}
            <div>
                <p style={{ fontSize: '18px', color: '#20253A', fontWeight: 'bold' }}>Cette semaine</p>
                <p style={{ color: '#9B9EAC', fontSize: '14px', marginBottom: '20px' }}>Du 23/06/2025 au 30/06/2025</p>
                
                {/* Notre nouveau graphique Donut ! */}
                <WeeklyGoalChart />
            </div>

            <br/>
            <br/>
            
            <button onClick={logout}>Se déconnecter</button>

        </div>
    );
}