import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const linksVariants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: {
        x: 0,
        opacity: 1,
        scale: 1,
    },
    closed: {
        x: 150,
        opacity: 0,
        scale: 0,
    },
};

function Links() {
    const items = ["Acceuil", "Projets", "Services", "Compétences", "Contact"];

    return (
        <motion.div className="links" variants={linksVariants}>
            {items.map((item) => (
                // <motion.a href={`#${item}`} key={item} variants={itemVariants}>
                //     {item}
                // </motion.a>
                <motion.div key={item} variants={itemVariants}>
                    <ScrollLink
                        to={item}
                        smooth={true}
                        duration={500}
                        // Ajustez cette valeur pour compenser la hauteur de la navbar
                        // offset={-70}
                    >
                        {item}
                    </ScrollLink>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default Links;
