import techIconsData from "../../data/techIconsData";
import { getImageUrl } from "../../utils/imageUtils";

function Skills() {
    return (
        <>
            {techIconsData.map((icon, index) => (
                <article className="techIcon" key={index}>
                    <img className="techIcon__image"
                        src={getImageUrl(icon.fileName)}
                        alt={`Icone de technologie ${icon.title}`}
                    />
                    <h3 className="techIcon__title">{icon.title}</h3>
                </article>
            ))}
        </>
    );
}

export default Skills;
