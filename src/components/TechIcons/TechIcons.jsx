import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import techIconsData from "../../data/techIconsData";
import { getImageUrl } from "../../utils/imageUtils";

function TechIcons() {
    return (
        <div className="techIconGrid">
            {techIconsData.map((icon, index) => (
                <article className="techIcon" key={index}>
                    <img
                        className="techIcon__image"
                        src={getImageUrl("techIcons", icon.fileName)}
                        alt={`Icone de technologie ${icon.title}`}
                        loading="lazy"
                    />
                    <h3 className="techIcon__title">{icon.title}</h3>
                </article>
            ))}

            {/* Icône points de suspension toujours présent en dernier */}
            <article className="techIcon">
                <FontAwesomeIcon
                    icon="fa-solid fa-ellipsis"
                    className="techIcon__image"
                />
            </article>
        </div>
    );
}

export default TechIcons;
