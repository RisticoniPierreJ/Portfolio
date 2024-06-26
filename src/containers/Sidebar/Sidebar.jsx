import { useState } from "react";
import { motion } from "framer-motion";
import Links from "../../components/Links/Links";
import ToggleButton from "../../components/ToggleButton/ToggleButton";

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            // type: "spring",
            // stiffness: 60,

            // stiffness: 20,

            ease: "linear",
            duration: 0.5,
        },
    },
    closed: {
        clipPath: "circle(20px at 167.5px 22.5px)",
        transition: {
            // delay: 0.2,
            // type: "spring",
            // stiffness: 50,
            // stiffness: 400,
            // damping: 100,
            // damping: 40,

            ease: "linear",
            duration: 0.3,
            // x: { duration: 1 },
        },
    },
};

function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            className="sidebar"
            initial={open ? "open" : "closed"}
            animate={open ? "open" : "closed"}
        >
            <motion.div className="sidebar__background" variants={variants}>
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    );
}

export default Sidebar;
