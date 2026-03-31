import OUTLINE from '../../assets/OUTLINE.png';
import styles from './UserCard.module.css';

export default function UserCard({ userInfos, runningData }) {

    // On additionne tous les kilomètres de l'user pour les afficher dans la boîte bleue
    const totalDistance = runningData.reduce((total, jour) => total + jour.distance, 0).toFixed(1);

    // On transforme la date "2025-01-01" en "1 janvier 2025"
    const dateInscription = new Date(userInfos.createdAt).toLocaleDateString('fr-FR', {
        day: 'numeric', month: 'long', year: 'numeric'
    });

    return (
        // LE GRAND CADRE BLANC 
        <div className={styles.cardContainer}>

            {/* --- PARTIE GAUCHE (Image + Nom) --- */}
            <div className={styles.leftPart}>
                <img
                    src={userInfos.profilePicture} // <-- MAGIE : On utilise le lien qui vient du backend !
                    alt="Avatar de l'utilisateur"
                    className={styles.profilePic}
                />

                <div className={styles.textContainer}>
                    <h2 className={styles.userName}>
                        {userInfos.firstName} {userInfos.lastName}
                    </h2>
                    <p className={styles.memberDate}>
                        Membre depuis le {dateInscription}
                    </p>
                </div>
            </div>

            {/* --- PARTIE DROITE (Texte + Boîte Bleue) --- */}
            <div className={styles.rightPart}>
                <span className={styles.distanceLabel}>Distance totale parcourue</span>

                {/* La boîte bleue */}
                <div className={styles.blueBox}>
                    {/* Le chiffre en blanc */}
                    <img src={OUTLINE} alt="logo réussite" className={styles.outlineIcon} />
                    <span className={styles.distanceValue}>
                        {totalDistance} km
                    </span>
                </div>
            </div>
        </div>
    );
}