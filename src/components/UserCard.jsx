import photo_profil from '../assets/photo_profil.png';

export default function UserCard({ userInfos, runningData }) {

    // On additionne tous les kilomètres de l'user pour les afficher dans la boîte bleue
    const totalDistance = runningData.reduce((total, jour) => total + jour.distance, 0).toFixed(1);

    // On transforme la date "2025-01-01" en "1 janvier 2025"
    const dateInscription = new Date(userInfos.createdAt).toLocaleDateString('fr-FR', {
        day: 'numeric', month: 'long', year: 'numeric'
    });

    return (
        // LE GRAND CADRE BLANC 
        <div style={{
            background: 'linear-gradient(0deg, #F2F3FF 0%, #FFFFFF 100%)',
            width: '1052px',
            height: '181px',
            borderRadius: '20px',
            padding: '32px 52px',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>

            {/* --- PARTIE GAUCHE (Image + Nom) --- */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                <img
                    src={photo_profil}
                    alt={`Profil de ${userInfos.firstName}`}
                    style={{ width: '104px', height: '117px', borderRadius: '10px', objectFit: 'cover' }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <h2 style={{ margin: 0, fontSize: '22px', fontWeight: '500', color: '#111111' }}>
                        {userInfos.firstName} {userInfos.lastName}
                    </h2>
                    <p style={{ margin: 0, fontSize: '14px', fontWeight: '400', color: '#707070' }}>
                        Membre depuis le {dateInscription}
                    </p>
                </div>
            </div>

            {/* --- PARTIE DROITE (Texte + Boîte Bleue) --- */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '19px' }}>
                <span style={{ fontSize: '14px', fontWeight: '400', color: '#707070' }}>Distance totale parcourue</span>

                {/* La boîte bleue corrigée ! */}
                <div style={{
                    backgroundColor: '#0B23F4',
                    borderRadius: '10px',
                    width: '183px',
                    height: '90px',
                    display: 'flex',
                    justifyContent: 'center', // Centre horizontalement
                    alignItems: 'center',     // Centre verticalement
                    gap: '5px'                // Petit espace entre le chiffre et 'km'
                }}>
                    {/* Le chiffre en blanc */}
                    <span style={{ color: '#FFFFFF', fontSize: '24px', fontWeight: '500' }}>
                        {totalDistance}
                    </span>
                    {/* Le 'km' en bleu clair (aligné sur la ligne de base du chiffre avec alignItems) */}
                    <span style={{ color: '#B6BDFC', fontSize: '16px', fontWeight: '500', marginTop: '5px' }}>
                        km
                    </span>
                </div>
            </div>

        </div>
    );
}