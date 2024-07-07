import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="navbar__wrapper" to="/">
                <span>Ghost.Dev</span>
            </Link>
            <Sidebar />

            {/* <ul>
                    <li>Acceuil</li>
                    <li>Projets</li>
                    <li>Pour quoi </li>
                    <li>Compétences</li>
                    <li>Contact</li>
                </ul> */}
        </nav>
    );
}

export default Navbar;
