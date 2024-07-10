import { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "../../data/projectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectCard() {
    const [loadedImages, setLoadedImages] = useState(
        new Array(projectsData.length).fill(false)
    );

    const handleImageLoad = (index) => {
        const newLoadedImages = [...loadedImages];
        newLoadedImages[index] = true;
        setLoadedImages(newLoadedImages);
    };

    return (
        <>
            {projectsData.map((project, index) => (
                <Link to={`/projet/${project.id}`} key={index}>
                    <article className="projectCard">
                        <div
                            className="projectCard__blurLoad"
                            style={{
                                backgroundImage: `url(${project.coverSmall})`,
                            }}
                        >
                            <img
                                src={project.cover}
                                alt="Photo présentation du projet"
                                loading="lazy"
                                onLoad={() => handleImageLoad(index)}
                                className={`projectCard__image ${
                                    loadedImages[index] ? "loaded" : ""
                                }`}
                            />
                        </div>
                        <div className="projectCard__content">
                            <h3 className="projectCard__title">
                                {project.title}
                            </h3>
                        </div>
                        <FontAwesomeIcon
                            icon="fa-solid fa-circle-plus"
                            className="projectCard__plusBtn"
                        />
                    </article>
                </Link>
            ))}
        </>
    );
}

export default ProjectCard;
