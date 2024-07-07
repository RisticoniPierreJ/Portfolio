import { Link } from "react-router-dom";
import projectsData from "../../data/projectsData";

function ProjectCard() {
    return (
        <>
            {projectsData.map((project, index) => (
                <Link to={`/projet/${project.id}`} key={index}>
                    <article className="projectCard">
                        <img
                            src={project.cover}
                            alt="Photo présentation du projet"
                        />
                        <div className="projectCard__content">
                            <h3 className="projectCard__title">
                                {project.title}
                            </h3>
                        </div>
                        <div className="projectCard__plusBtn">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="11"
                                    stroke="#f5f1e5"
                                    strokeWidth="2"
                                />
                                <line
                                    x1="12"
                                    y1="6"
                                    x2="12"
                                    y2="18"
                                    stroke="#f5f1e5"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <line
                                    x1="6"
                                    y1="12"
                                    x2="18"
                                    y2="12"
                                    stroke="#f5f1e5"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </article>
                </Link>
            ))}
        </>
    );
}

export default ProjectCard;
