import PropTypes from 'prop-types';

function ProjectTags({ tags }) {
    return (
        <article className="tags">

            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>

        </article>
    );
}

ProjectTags.propTypes = {
    tags: PropTypes.array.isRequired,
};

export default ProjectTags;