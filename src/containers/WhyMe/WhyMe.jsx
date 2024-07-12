import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WhyMe() {
    useEffect(() => {
        const wrapper = document.querySelector(".whyMe__wrapper");
        const chevronLeft = document.querySelector(".whyMe__chevron-left");
        const chevronRight = document.querySelector(".whyMe__chevron-right");

        const checkScrollPosition = () => {
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
        };

        wrapper.addEventListener("scroll", checkScrollPosition);

        // Initial check
        checkScrollPosition();

        return () => {
            wrapper.removeEventListener("scroll", checkScrollPosition);
        };
    }, []);

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
            <p className="whyMe__title">
                La <span>présence en ligne</span> est devenue <span>essentielle</span> pour toutes les
                entreprises, quelle que soit leur taille ou leur secteur.
            </p>
            <div className="whyMe__container">
                <FontAwesomeIcon
                    className="whyMe__chevron whyMe__chevron-left"
                    icon="fa-solid fa-chevron-left"
                    onClick={scrollLeft}
                />
                <div className="whyMe__wrapper">
                    <article className="whyMe__card">
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
                    </article>
                    <article className="whyMe__card">
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
                    </article>
                    <article className="whyMe__card">
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
                    </article>
                    <article className="whyMe__card">
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
                    </article>
                </div>
                <FontAwesomeIcon
                    className="whyMe__chevron whyMe__chevron-right"
                    icon="fa-solid fa-chevron-right"
                    onClick={scrollRight}
                />
            </div>
        </div>
    );
}

export default WhyMe;
