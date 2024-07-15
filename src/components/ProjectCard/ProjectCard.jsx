// import { useState } from "react";
// import { Link } from "react-router-dom";
// import projectsData from "../../data/projectsData";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { getProjectCoverUrl } from "../../utils/imageUtils";

// function ProjectCard() {
//     const [loadedImages, setLoadedImages] = useState(
//         new Array(projectsData.length).fill(false)
//     );

//     const handleImageLoad = (index) => {
//         const newLoadedImages = [...loadedImages];
//         newLoadedImages[index] = true;
//         setLoadedImages(newLoadedImages);
//     };

//     return (
//         <>
//             {projectsData.map((project, index) => (
//                 <Link to={`/projet/${project.id}`} key={index}>
//                     <article className="projectCard">
//                         <div
//                             className="projectCard__blurLoad"
//                             style={{
//                                 backgroundImage: `url(${getProjectCoverUrl(
//                                     project.cover.small
//                                 )})`,
//                             }}
//                             // style={{
//                             //     backgroundImage: `url(${project.coverSmall})`,
//                             // }}
//                         >
//                             <img
//                                 src={getProjectCoverUrl(project.cover.desktop)}
//                                 alt="Photo présentation du projet"
//                                 srcSet={`
//                                     ${getProjectCoverUrl(
//                                         project.cover.mobile
//                                     )} 300w,
//                                     ${getProjectCoverUrl(
//                                         project.cover.tablet
//                                     )} 800w,
//                                     ${getProjectCoverUrl(
//                                         project.cover.desktop
//                                     )} 1240w
//                                 `}
//                                 sizes="
//                                     (max-width: 767px) 300px,
//                                     (min-width: 768px) and (max-width: 1024px) 800px,
//                                     (min-width: 1025px) 1240px
//                                 "
//                                 loading="lazy"
//                                 onLoad={() => handleImageLoad(index)}
//                                 className={`projectCard__image ${
//                                     loadedImages[index] ? "loaded" : ""
//                                 }`}
//                             />
//                         </div>
//                         <div className="projectCard__content">
//                             <h3 className="projectCard__title">
//                                 {project.title}
//                             </h3>
//                         </div>
//                         <FontAwesomeIcon
//                             icon="fa-solid fa-circle-plus"
//                             className="projectCard__plusBtn"
//                         />
//                     </article>
//                 </Link>
//             ))}
//         </>
//     );
// }

// export default ProjectCard;

import { Link } from "react-router-dom";
import projectsData from "../../data/projectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getImageUrl } from "../../utils/imageUtils";

function ProjectCard() {
    return (
        <>
            {projectsData.map((project, index) => (
                <Link to={`/projet/${project.id}`} key={index}>
                    <article className="projectCard">
                        <img
                            src={getImageUrl(
                                "projectCover",
                                project.cover.desktop
                            )}
                            alt="Photo présentation du projet"
                            srcSet={`
                                    ${getImageUrl(
                                        "projectCover",
                                        project.cover.mobile
                                    )} 300w,
                                    ${getImageUrl(
                                        "projectCover",
                                        project.cover.tablet
                                    )} 800w,
                                    ${getImageUrl(
                                        "projectCover",
                                        project.cover.desktop
                                    )} 1240w
                                `}
                            sizes="
                                    (min-width: 1380px) 517px, (min-width: 780px) calc(35.69vw + 32px), 341px
                            "
                            loading="lazy"
                            className="projectCard__image"
                        />
                        <div className="projectCard__content">
                            <h3 className="projectCard__title">
                                {project.title}
                            </h3>
                        </div>
                        <FontAwesomeIcon
                            icon="fa-solid fa-circle-plus"
                            className="projectCard__plusBtn"
                        />
                    </article>
                </Link>
            ))}
        </>
    );
}

export default ProjectCard;
