import { Link } from "react-router-dom";
import projectsData from "../../data/projectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getImageUrl } from "../../utils/imageUtils";

function ProjectCard() {
    return (
        <>
            {projectsData.map((project, index) => (
                <Link to={`/projet/${project.id}`} key={index}>
                    <article className="projectCard">
                        <img
                            src={getImageUrl(
                                "projectCover",
                                project.cover.desktop
                            )}
                            alt="Photo présentation du projet"
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
                            sizes="
                                    (min-width: 1380px) 517px, (min-width: 780px) calc(35.69vw + 32px), 341px
                            "
                            loading="lazy"
                            className="projectCard__image"
                        />
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
