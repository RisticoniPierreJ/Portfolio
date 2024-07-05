import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PropTypes from 'prop-types';

function Collapse({children, title}) {
    const [isContentShown, setIsContentShown] = useState(false);

    const showContent = () => {
        setIsContentShown(!isContentShown);
    };

    return (
        <article className="collapse">
            <div className="collapse__title" onClick={showContent}>
                <h1>{title}</h1>
                <FontAwesomeIcon
                    icon="fa-solid fa-chevron-up"
                    className={isContentShown ? "rotate" : "chevronUp"}
                />
            </div>
            <div className={`collapse__txt ${isContentShown ? "show" : ""}`}>
                <div className="collapse__txt-inner">
                    {children}
                </div>
            </div>
        </article>
    );
}

Collapse.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default Collapse;
