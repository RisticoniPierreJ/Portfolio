import { useState } from "react";
import { motion } from "framer-motion";
import Links from "../../components/Links/Links";
import ToggleButton from "../../components/ToggleButton/ToggleButton";

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            ease: "linear",
            duration: 0.5,
        },
    },
    closed: {
        clipPath: "circle(20px at 167.5px 23.5px)",
        transition: {
            ease: "linear",
            duration: 0.3,
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
