import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const cardVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            staggerChildren: 0.4,
        },
    },
};

function WhyMeContainer() {
    const [cardCount, setCardCount] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    // Gestion du défilement et affichage des chevrons
    useEffect(() => {
        const wrapper = document.querySelector(".whyMe__wrapper");
        const chevronLeft = document.querySelector(".whyMe__chevron-left");
        const chevronRight = document.querySelector(".whyMe__chevron-right");

        // Mise à jour du nombre de cartes
        const cards = document.querySelectorAll(".whyMe__card");
        setCardCount(cards.length);

        // Fonction pour vérifier la position de défilement
        const checkScrollPosition = () => {
            // Afficher ou masquer les chevrons selon la position de défilement
            if (wrapper.scrollLeft > 0) {
                chevronLeft.classList.add("whyMe__chevron-visible");
            } else {
                chevronLeft.classList.remove("whyMe__chevron-visible");
            }

            if (
                wrapper.scrollLeft + wrapper.clientWidth <
                wrapper.scrollWidth
            ) {
                chevronRight.classList.add("whyMe__chevron-visible");
            } else {
                chevronRight.classList.remove("whyMe__chevron-visible");
            }

            // Mettre à jour l'index actif
            const cardWidth = wrapper.scrollWidth / cards.length;
            setActiveIndex(Math.round(wrapper.scrollLeft / cardWidth));
        };

        wrapper.addEventListener("scroll", checkScrollPosition);

        // Vérification initiale de la position de défilement après un délai
        setTimeout(checkScrollPosition, 100);

        return () => {
            wrapper.removeEventListener("scroll", checkScrollPosition);
        };
    }, []);

    // Fonctions pour faire défiler les cartes
    const scrollLeft = () => {
        const wrapper = document.querySelector(".whyMe__wrapper");
        wrapper.scrollBy({ left: -330, behavior: "smooth" });
    };

    const scrollRight = () => {
        const wrapper = document.querySelector(".whyMe__wrapper");
        wrapper.scrollBy({ left: 330, behavior: "smooth" });
    };

    return (
        <div className="whyMe">
            <motion.div
                className="whyMe__title"
                variants={variants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <motion.p variants={variants}>
                    La <span>présence en ligne</span> est devenue{" "}
                    <span>essentielle</span> pour toutes les entreprises, quelle
                    que soit leur taille ou leur secteur.
                </motion.p>
                <motion.p variants={variants}>
                    Pour maximiser <span>l&apos;impact</span> de votre site web,
                    il est <span>crucial</span> de surveiller et de comprendre
                    les éléments suivants :
                </motion.p>
            </motion.div>

            <div className="whyMe__container">
                <FontAwesomeIcon
                    className="whyMe__chevron whyMe__chevron-left"
                    icon="fa-solid fa-chevron-left"
                    onClick={scrollLeft}
                />
                <motion.div
                    className="whyMe__wrapper"
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.article className="whyMe__card" variants={cardVariants}>
                        <FontAwesomeIcon
                            className="whyMe__card-icon"
                            icon="fa-solid fa-screwdriver-wrench"
                        />
                        <h3 className="whyMe__card-title">
                            Maintenance et Efficacité
                        </h3>
                        <p className="whyMe__card-text">
                            Des opérations de maintenance régulières pour
                            maintenir la performance et l&apos;efficacité de
                            votre site sont indispensables.
                        </p>
                    </motion.article>
                    <motion.article className="whyMe__card" variants={cardVariants}>
                        <FontAwesomeIcon
                            className="whyMe__card-icon"
                            icon="fa-solid fa-rotate"
                        />
                        <h3 className="whyMe__card-title">
                            Technologies à Jour
                        </h3>
                        <p className="whyMe__card-text">
                            Une refonte complète peut s&apos;avérer nécessaire
                            pour rester compétitif grâce à des technologies à
                            jour
                        </p>
                    </motion.article>
                    <motion.article className="whyMe__card" variants={cardVariants}>
                        <FontAwesomeIcon
                            className="whyMe__card-icon"
                            icon="fa-solid fa-magnifying-glass"
                        />
                        <h3 className="whyMe__card-title">
                            Référencement et Visibilité
                        </h3>
                        <p className="whyMe__card-text">
                            Un référencement optimisé et adapté aux évolutions
                            des algorithmes de recherche est crucial pour la
                            visibilité de votre site
                        </p>
                    </motion.article>
                    <motion.article className="whyMe__card" variants={cardVariants}>
                        <FontAwesomeIcon
                            className="whyMe__card-icon"
                            icon="fa-solid fa-shield"
                        />
                        <h3 className="whyMe__card-title">Sécurité</h3>
                        <p className="whyMe__card-text">
                            Des mises à jour régulières et des audits de
                            sécurité protègent vos données et celles de vos
                            utilisateurs
                        </p>
                    </motion.article>
                </motion.div>
                <FontAwesomeIcon
                    className="whyMe__chevron whyMe__chevron-right"
                    icon="fa-solid fa-chevron-right"
                    onClick={scrollRight}
                />
                <div className="bulletPoints">
                    {Array.from({ length: cardCount }).map((_, index) => (
                        <span
                            key={index}
                            className={`bulletPoints__singlePoint ${
                                index === activeIndex
                                    ? "bulletPoints__singlePoint-active"
                                    : ""
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhyMeContainer;
