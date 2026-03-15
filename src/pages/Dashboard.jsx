import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // On importe la radio
import { USER_MOCK_DATA } from '../data/mock';
import DistanceChart from '../components/DistanceChart';
import HeartRateChart from '../components/HeartRateChart';


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

            <button onClick={logout}>Se déconnecter</button>

        </div>
    );
}