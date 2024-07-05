import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WhyMe() {
    return (
        <div className="WhyMe">
            <h2 className="WhyMe__title">
                La présence en ligne est devenue essentielle pour toutes les
                entreprises, quelle que soit leur taille ou leur secteur.
            </h2>
            <div className="theme">
                <div className="theme__titleContainer">
                    <FontAwesomeIcon
                        className="theme__title"
                        icon="fa-solid fa-screwdriver-wrench"
                    />
                    <h3 className="theme__title">Maintenance et Efficacité</h3>
                </div>
                <p className="theme__text">
                    Des opérations de maintenance régulières pour maintenir la
                    performance et l&apos;efficacité de votre site sont
                    indispensables.
                </p>
            </div>

            <div className="theme">
                <div className="theme__titleContainer">
                    <FontAwesomeIcon
                        className="theme__title"
                        icon="fa-solid fa-rotate"
                    />
                    <h3 className="theme__title">Technologies à Jour</h3>
                </div>
                <p className="theme__text">
                    Une refonte complète peut s&apos;avérer nécessaire pour
                    rester compétitif grâce à des technologies à jour
                </p>
            </div>

            <div className="theme">
                <div className="theme__titleContainer">
                    <FontAwesomeIcon
                        className="theme__title"
                        icon="fa-solid fa-magnifying-glass"
                    />
                    <h3 className="theme__title">
                        Référencement et Visibilité
                    </h3>
                </div>
                <p className="theme__text">
                    Un référencement optimisé et adapté aux évolutions des
                    algorithmes de recherche est crucial pour la visibilité de
                    votre site
                </p>
            </div>

            <div className="theme">
                <div className="theme__titleContainer">
                    <FontAwesomeIcon
                        className="theme__title"
                        icon="fa-solid fa-shield"
                    />
                    <h3 className="theme__title">Sécurité</h3>
                </div>
                <p className="theme__text">
                    Des mises à jour régulières et des audits de sécurité
                    protègent vos données et celles de vos utilisateurs
                </p>
            </div>
        </div>
    );
}

export default WhyMe;
