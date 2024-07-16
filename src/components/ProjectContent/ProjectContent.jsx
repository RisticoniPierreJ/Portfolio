// src/components/ProjectContent/ProjectContent.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Collapse from "../../components/Collapse/Collapse";
import ProjectTags from "../../components/ProjectTags/ProjectTags";
import ProjectLinks from "../ProjectLinks/ProjectLinks";

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

function ProjectContent({ project }) {
    return (
        <>
            <div className="viewProject__description">
                <h2 className="viewProject__description-title">Description</h2>
                <div className="viewProject__description-contentAndTagsContainer">
                    <div className="viewProject__description-content">
                        {splitTextToParagraphs(project.description)}
                        <ProjectLinks
                            repos={project.repository}
                            demo={project.demo}
                        />
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
        </>
    );
}

ProjectContent.propTypes = {
    project: PropTypes.shape({
        description: PropTypes.string.isRequired,
        repository: PropTypes.string.isRequired,
        demo: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
        challenges: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default ProjectContent;
