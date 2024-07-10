import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


function ProjectLinks({ repos = '', demo = '' }) {
    return (

        <article className="projectLinks">
            <Link
                to={repos}
                className={`projectLinks__repo ${!repos ? 'projectLinks__disabled' : ''}`}
                aria-disabled={!repos}
            >
                <FontAwesomeIcon className="projectLinks__icon" icon="fa-brands fa-github" />
                <p className="projectLinks__title">Repo</p>
            </Link>
            <Link
                to={demo}
                className={`projectLinks__demo ${!demo ? 'projectLinks__disabled' : ''}`}
                aria-disabled={!demo}
            >
                <FontAwesomeIcon className="projectLinks__icon" icon="fa-solid fa-globe" />
                <p className="projectLinks__title">Demo</p>
            </Link>
        </article>
    );
}

ProjectLinks.propTypes = {
    repos: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
};

export default ProjectLinks;
