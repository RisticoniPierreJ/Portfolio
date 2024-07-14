import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

function ScrollToTopIcon() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`scrollToTopIcon ${showScrollToTop ? "show" : ""}`}>
            <ScrollLink to="Acceuil" smooth={true} duration={500}>
                <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
            </ScrollLink>
        </div>
    );
}

export default ScrollToTopIcon;
