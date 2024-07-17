import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collapse from "../../components/Collapse/Collapse";
import { motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            staggerChildren: 0.2,
        },
    },
};

function ServicesContainer() {
    return (
        <motion.div
            className="servicesContainer"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <motion.div variants={variants}>
                <Collapse title="Création" customClass="collapse">
                    <div className="servicesCards">
                        <p className="servicesCards__text">
                            Création de sites Internet adaptés à vos besoins
                            professionnels
                        </p>
                        <ul className="servicesCards__list">
                            <div className="servicesCards__list-item">
                                <FontAwesomeIcon
                                    className="servicesCards__list-icon"
                                    icon="fa-solid fa-caret-right"
                                />
                                <li>
                                    Sites one-page et vitrine pour une
                                    présentation efficace
                                </li>
                            </div>
                            <div className="servicesCards__list-item">
                                <FontAwesomeIcon
                                    className="servicesCards__list-icon"
                                    icon="fa-solid fa-caret-right"
                                />
                                <li>
                                    Blogs et sites de contenu pour les créateurs
                                </li>
                            </div>
                            <div className="servicesCards__list-item">
                                <FontAwesomeIcon
                                    className="servicesCards__list-icon"
                                    icon="fa-solid fa-caret-right"
                                />
                                <li>Boutiques en ligne et marketplaces</li>
                            </div>
                            <div className="servicesCards__list-item">
                                <FontAwesomeIcon
                                    className="servicesCards__list-icon"
                                    icon="fa-solid fa-caret-right"
                                />
                                <li>
                                    Applications web interactives et de
                                    dashboards
                                </li>
                            </div>
                        </ul>
                        <p className="servicesCards__text">
                            Design adaptatif et fully responsive, priorisant
                            mobile-first ou desktop-first selon vos besoins
                        </p>
                    </div>
                </Collapse>
            </motion.div >
            <motion.div variants={variants}>
                <Collapse title="Optimisation" customClass="collapse">
                    <div className="servicesCards">
                        <p className="servicesCards__text">
                            Optimisez chaque aspect de votre site pour des
                            performances maximales
                        </p>
                        <ul className="servicesCards__list">
                            <div className="servicesCards__list-item">
                                <FontAwesomeIcon
                                    className="servicesCards__list-icon"
                                    icon="fa-solid fa-caret-right"
                                />
                                <li>Amélioration référencement et SEO</li>
                            </div>
                            <div className="servicesCards__list-item">
                                <FontAwesomeIcon
                                    className="servicesCards__list-icon"
                                    icon="fa-solid fa-caret-right"
                                />
                                <li>
                                    Optimisation des performances techniques
                                </li>
                            </div>
                            <div className="servicesCards__list-item">
                                <FontAwesomeIcon
                                    className="servicesCards__list-icon"
                                    icon="fa-solid fa-caret-right"
                                />
                                <li>Renforcement de l&apos;Accessibilité </li>
                            </div>
                            <div className="servicesCards__list-item">
                                <FontAwesomeIcon
                                    className="servicesCards__list-icon"
                                    icon="fa-solid fa-caret-right"
                                />
                                <li>Green Code et pratiques durables</li>
                            </div>
                        </ul>
                        <p className="servicesCards__text">
                            Audit technique offert
                        </p>
                    </div>
                </Collapse>
            </motion.div >
            <motion.div variants={variants}>
                <Collapse title="Maintenance" customClass="collapse">
                    <div className="servicesCards">
                        <p className="servicesCards__text">
                            Gardez votre site à jour et performant
                        </p>
                        <ul className="servicesCards__list">
                            <div className="servicesCards__list-item">
                                <FontAwesomeIcon
                                    className="servicesCards__list-icon"
                                    icon="fa-solid fa-caret-right"
                                />
                                <li>Correction des problèmes techniques</li>
                            </div>
                            <div className="servicesCards__list-item">
                                <FontAwesomeIcon
                                    className="servicesCards__list-icon"
                                    icon="fa-solid fa-caret-right"
                                />
                                <li>
                                    Intégration de nouvelles fonctionnalités
                                </li>
                            </div>
                            <div className="servicesCards__list-item">
                                <FontAwesomeIcon
                                    className="servicesCards__list-icon"
                                    icon="fa-solid fa-caret-right"
                                />
                                <li>Mises à jour régulières</li>
                            </div>
                            <div className="servicesCards__list-item">
                                <FontAwesomeIcon
                                    className="servicesCards__list-icon"
                                    icon="fa-solid fa-caret-right"
                                />
                                <li>Sauvegardes automatiques</li>
                            </div>
                        </ul>
                    </div>
                </Collapse>
            </motion.div >
        </motion.div>
    );
}

export default ServicesContainer;
