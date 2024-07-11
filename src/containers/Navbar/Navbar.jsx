import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
    const location = useLocation();

    return (
        <header>
            {location.pathname === "/" && (
                <nav className="navbar">
                    <ScrollLink
                        className="navbar__wrapper"
                        to="Acceuil"
                        smooth={true}
                        duration={500}
                    >
                        Ghost.Dev
                    </ScrollLink>
                    <Sidebar />

                    {/* <ul>
                    <li>Acceuil</li>
                    <li>Projets</li>
                    <li>Pour quoi </li>
                    <li>Compétences</li>
                    <li>Contact</li>
                </ul> */}
                </nav>
            )}
        </header>
    );
}

export default Navbar;
