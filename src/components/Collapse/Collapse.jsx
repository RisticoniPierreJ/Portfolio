import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PropTypes from 'prop-types';

function Collapse({children, title, customClass = ""}) {
    const [isContentShown, setIsContentShown] = useState(false);

    const showContent = () => {
        setIsContentShown(!isContentShown);
    };

    return (
        <article className={`${customClass}`}>
            <div className={`${customClass}__title`} onClick={showContent}>
                <h1>{title}</h1>
                <FontAwesomeIcon
                    icon="fa-solid fa-chevron-up"
                    className={isContentShown ? "rotate" : "chevronUp"}
                />
            </div>
            <div className={`${customClass}__txt ${isContentShown ? "show" : ""}`}>
                <div className={`${customClass}__txt-inner`}>
                    {children}
                </div>
            </div>
        </article>
    );
}

Collapse.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    customClass: PropTypes.string,
};

export default Collapse;
