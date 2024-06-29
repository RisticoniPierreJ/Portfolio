import imageTest from "../../assets/images/Character_Fry.png";

function ProjectCard() {
    return (
        <>
            <article className="projectCard">
                <img src={imageTest} alt="" />
                <div className="projectCard__content">
                    <div className="projectCard__contentTxt">
                        <h3>La note enchantée</h3>
                        <p>Charonne</p>
                    </div>
                </div>
            </article>
        </>
    );
}

export default ProjectCard;
