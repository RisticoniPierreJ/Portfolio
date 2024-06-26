import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__wrapper">
                <span>Ghost.Dev</span>
            </div>
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
