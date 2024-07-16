import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getImageUrl } from "../../utils/imageUtils";
import DropDownGallery from "../DropDownGallery/DropDownGallery";
import desktopImg from "../../assets/images/desktop_screen.png";
import mobileImg from "../../assets/images/mobile_screen.png";
import PropTypes from "prop-types";

function Gallery({ project }) {
    // Gestion de l'affichage des images
    const [selecteDesktopImg, setSelectedDesktopImg] = useState(0);
    const [selecteMobileImg, setSelectedMobileImg] = useState(0);

    const mutlipleDesktopImg = project.desktop.length > 1;
    const mutlipleMobileImg = project.mobile.length > 1;

    const handleDesktopNavigation = (direction) => {
        setSelectedDesktopImg((prevIndex) => {
            if (direction === "prev") {
                return prevIndex > 0
                    ? prevIndex - 1
                    : project.desktop.length - 1;
            } else if (direction === "next") {
                return prevIndex < project.desktop.length - 1
                    ? prevIndex + 1
                    : 0;
            }
        });
    };

    const handleMobileNavigation = (direction) => {
        setSelectedMobileImg((prevIndex) => {
            if (direction === "prev") {
                return prevIndex > 0
                    ? prevIndex - 1
                    : project.mobile.length - 1;
            } else if (direction === "next") {
                return prevIndex < project.mobile.length - 1
                    ? prevIndex + 1
                    : 0;
            }
        });
    };

    return (
        <div className="viewProjectGallery__allGaleriesContainer">
            {/* Desktop  */}
            <div className="galleryContainer">
                {mutlipleDesktopImg && (
                    <div className="galleryContainer__navigate">
                        <button onClick={() => handleDesktopNavigation("prev")}>
                            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
                        </button>
                        <DropDownGallery
                            pages={project.desktop}
                            onSelect={(index) => setSelectedDesktopImg(index)}
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
                                project.desktop[selecteDesktopImg].images[0]
                            )}
                            alt="aperçu du site web sur desktop"
                            className="desktopGallery__scrollContainer-image"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile  */}
            <div className="galleryContainer">
                {mutlipleMobileImg && (
                    <div className="galleryContainer__navigate">
                        <button onClick={() => handleMobileNavigation("prev")}>
                            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
                        </button>
                        <DropDownGallery
                            pages={project.mobile}
                            onSelect={(index) => setSelectedMobileImg(index)}
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
                                    project.mobile[selecteMobileImg].images[0]
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
    );
}

Gallery.propTypes = {
    project: PropTypes.shape({
        desktop: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                images: PropTypes.arrayOf(PropTypes.string),
            })
        ).isRequired,
        mobile: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                images: PropTypes.arrayOf(PropTypes.string),
            })
        ).isRequired,
    }).isRequired,
};

export default Gallery;
