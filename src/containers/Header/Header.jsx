import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Link as ScrollLink } from "react-scroll";

function Header() {
    const location = useLocation();

    return (
        <header>
            {location.pathname === "/" && (
                <nav className="header">
                    <ScrollLink
                        className="header__wrapper"
                        to="Acceuil"
                        smooth={true}
                        duration={500}
                    >
                        Ghost.Dev
                    </ScrollLink>

                    <Navbar />
                </nav>
            )}
        </header>
    );
}

export default Header;
