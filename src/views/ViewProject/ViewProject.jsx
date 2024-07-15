import { Navigate, useNavigate, useParams } from "react-router-dom";
import projectsData from "../../data/projectsData.json";
import Collapse from "../../components/Collapse/Collapse";
import mobileImg from "../../assets/images/mobile_screen.png";
import desktopImg from "../../assets/images/desktop_screen.png";
import ProjectTags from "../../components/ProjectTags/ProjectTags";
import ProjectLinks from "../../components/ProjectLinks/ProjectLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownGallery from "../../components/DropDownGallery/DropDownGaller";
import { useState } from "react";
import { getImageUrl } from "../../utils/imageUtils";

// Utilitaire pour diviser le texte par les points et générer des paragraphes
function splitTextToParagraphs(text) {
    return text.split(".").map((sentence, index) => {
        // Ne pas ajouter de <p> pour les phrases vides après un point final
        if (sentence.trim()) {
            return (
                <p key={index}>
                    <FontAwesomeIcon icon="fa-solid fa-caret-right" />{" "}
                    {sentence.trim()}.
                </p>
            );
        }
        return null;
    });
}

function ViewProject() {
    const navigate = useNavigate();

    // Gestion de la récupération des données du projet
    const { id } = useParams();
    const project = projectsData.find((project) => project.id === id);

    // Gestion de l affichage des images
    const [selecteDesktopImg, setSelectedDesktopImg] = useState(0);
    const [selecteMobileImg, setSelectedMobileImg] = useState(0);

    if (!project) {
        return <Navigate to="/404" replace />;
    }

    const mutlipleDesktopImg = project.desktop.length > 1;
    const mutlipleMobileImg = project.mobile.length > 1;

    // Gestion des clics pour les boutons de navigation
    // const handlePrevDesktop = () => {
    //     setSelectedDesktopImg((prevIndex) =>
    //         prevIndex > 0 ? prevIndex - 1 : project.desktop.length - 1
    //     );
    // };

    // const handleNextDesktop = () => {
    //     setSelectedDesktopImg((prevIndex) =>
    //         prevIndex < project.desktop.length - 1 ? prevIndex + 1 : 0
    //     );
    // };

    const handleDesktopNavigation = (direction) => {
        setSelectedDesktopImg((prevIndex) => {
            if (direction === "prev") {
                return prevIndex > 0 ? prevIndex - 1 : project.desktop.length - 1;
            } else if (direction === "next") {
                return prevIndex < project.desktop.length - 1 ? prevIndex + 1 : 0;
            }
        });
    };
    

    // const handlePrevMobile = () => {
    //     setSelectedMobileImg((prevIndex) =>
    //         prevIndex > 0 ? prevIndex - 1 : project.mobile.length - 1
    //     );
    // };

    // const handleNextMobile = () => {
    //     setSelectedMobileImg((prevIndex) =>
    //         prevIndex < project.mobile.length - 1 ? prevIndex + 1 : 0
    //     );
    // };

    const handleMobileNavigation = (direction) => {
        setSelectedMobileImg((prevIndex) => {
            if (direction === "prev") {
                return prevIndex > 0 ? prevIndex - 1 : project.mobile.length - 1;
            } else if (direction === "next") {
                return prevIndex < project.mobile.length - 1 ? prevIndex + 1 : 0;
            }
        });
    };
    

    const handleClose = () => {
        navigate("/");
    };

    return (
        <main className="viewProjecttMain" id="Acceuil">
            {/************/}
            {/* Bannière */}
            {/************/}
            <div className="viewProjectBanner">
                <img
                    className="viewProjectBanner__img"
                    src={getImageUrl("projectCover", project.cover.desktop)}
                    alt="Bannière du projet"
                    srcSet={`
                            ${getImageUrl(
                                "projectCover",
                                project.cover.mobile
                            )} 300w,
                            ${getImageUrl(
                                "projectCover",
                                project.cover.tablet
                            )} 800w,
                            ${getImageUrl(
                                "projectCover",
                                project.cover.desktop
                            )} 1240w
                    `}
                    sizes="100vw"
                />

                <div className="viewProjectBanner__logo">
                    <img
                        src={getImageUrl("projectLogo", project.logo)}
                        alt="logo du site web"
                    />
                </div>
                <FontAwesomeIcon
                    icon="fa-regular fa-circle-xmark"
                    className="viewProjectBanner__closeIcon"
                    onClick={handleClose}
                />
            </div>

            {/***********/}
            {/* Contenu */}
            {/***********/}
            <section className="viewProject">
                <div className="viewProject__description">
                    <h2 className="viewProject__description-title">
                        Description
                    </h2>
                    <div className="viewProject__description-contentAndTagsContainer">
                        <div className="viewProject__description-content">
                            {splitTextToParagraphs(project.description)}
                        </div>
                        <div className="viewProject__tags">
                            <ProjectTags tags={project.tags} />
                        </div>
                    </div>
                </div>

                <div className="viewProject__challenges">
                    <h2 className="viewProject__challenges-title">
                        Défis Rencontrés et Solutions
                    </h2>
                    <div className="viewProject__challenges-content">
                        {project.challenges.map(({ title, content }, index) => (
                            <Collapse
                                title={title}
                                key={index}
                                customClass="projectCollapse"
                            >
                                {splitTextToParagraphs(content)}
                            </Collapse>
                        ))}
                    </div>
                </div>
                {/* SEPARATEUR HAUT DE SECTION ISSU DU SITE */}
                <div className="custom-shape-divider-bottom-1719499125">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25"
                            className="shape-fill"
                        ></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5"
                            className="shape-fill"
                        ></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
            </section>

            {/***********/}
            {/* Galerie */}
            {/***********/}
            <section className="viewProjectGallery">
                <h2 className="viewProjectGallery__title">Liens & Galerie</h2>
                <ProjectLinks repos={project.repository} demo={project.demo} />

                {/*******************/}
                {/* Galerie Desktop */}
                {/*******************/}
                <div className="viewProjectGallery__allGaleriesContainer">
                    <div className="galleryContainer">
                        {mutlipleDesktopImg && (
                            <div className="galleryContainer__navigate">
                                <button onClick={() => handleDesktopNavigation("prev")}>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
                                </button>
                                <DropDownGallery
                                    pages={project.desktop}
                                    onSelect={(index) =>
                                        setSelectedDesktopImg(index)
                                    }
                                    selectedIndex={selecteDesktopImg}
                                />
                                <button onClick={() => handleDesktopNavigation("next")}>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                                </button>
                            </div>
                        )}

                        <div className="desktopGallery">
                            <img
                                src={desktopImg}
                                alt="écran de bureau du site web"
                                className="desktopGallery__frame"
                                loading="lazy"
                            />
                            <div className="desktopGallery__scrollContainer desktopGallery__scrollContainer-scrollInner">
                                <img
                                    src={getImageUrl(
                                        "projectFullpage",
                                        project.desktop[selecteDesktopImg]
                                            .images[0]
                                    )}
                                    alt="aperçu du site web sur desktop"
                                    className="desktopGallery__scrollContainer-image"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/******************/}
                    {/* Galerie Mobile */}
                    {/******************/}
                    <div className="galleryContainer">
                        {mutlipleMobileImg && (
                            <div className="galleryContainer__navigate">
                                <button onClick={() => handleMobileNavigation("prev")}>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
                                </button>
                                <DropDownGallery
                                    pages={project.mobile}
                                    onSelect={(index) =>
                                        setSelectedMobileImg(index)
                                    }
                                    selectedIndex={selecteMobileImg}
                                />
                                <button onClick={() => handleMobileNavigation("next")}>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                                </button>
                            </div>
                        )}

                        {project.mobile[0].title !== "" && (
                            <div className="mobileGallery">
                                <img
                                    src={mobileImg}
                                    alt="écran de mobile du site web"
                                    className="mobileGallery__frame"
                                    loading="lazy"
                                />
                                <div className="mobileGallery__scrollContainer mobileGallery__scrollContainer-scrollInner">
                                    <img
                                        src={getImageUrl(
                                            "projectFullpage",
                                            project.mobile[selecteMobileImg]
                                                .images[0]
                                        )}
                                        alt="aperçu du site web sur mobile"
                                        className="mobileGallery__scrollContainer-image"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section>
                {/* SEPARATEUR BAS DE SECTION ISSU DU SITE */}
                <div className="custom-shape-divider-top-1719498626">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25"
                            className="shape-fill"
                        ></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5"
                            className="shape-fill"
                        ></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
            </section>
        </main>
    );
}

export default ViewProject;
