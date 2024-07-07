import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


function ProjectLinks({repos, demo}) {
    return (
        // <article className="projectLinks">
        //     <Link to={repos} className="projectLinks__repo">
        //         <FontAwesomeIcon className="projectLinks__icon" icon="fa-brands fa-github" />
        //         <p className="projectLinks__title">Repo</p>
        //     </Link>
        //     <Link to={demo} className="projectLinks__demo">
        //         <FontAwesomeIcon className="projectLinks__icon" icon="fa-solid fa-globe" />
        //         <p className="projectLinks__title">Demo</p>
        //     </Link>
        // </article>

        <article className="projectLinks">
            {repos && (
                <Link to={repos} className="projectLinks__repo">
                    <FontAwesomeIcon className="projectLinks__icon" icon="fa-brands fa-github" />
                    <p className="projectLinks__title">Repo</p>
                </Link>
            )}
            {demo && (
                <Link to={demo} className="projectLinks__demo">
                    <FontAwesomeIcon className="projectLinks__icon" icon="fa-solid fa-globe" />
                    <p className="projectLinks__title">Demo</p>
                </Link>
            )}
        </article>
    );
}

ProjectLinks.propTypes = {
    repos: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
};

ProjectLinks.defaultProps = {
    repos: '',
    demo: '',
};

export default ProjectLinks;
