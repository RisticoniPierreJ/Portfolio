import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__social">
                <Link to="https://www.linkedin.com/in/pierre-jean-risticoni-54b4472aa/">
                    <FontAwesomeIcon
                        icon="fa-brands fa-linkedin"
                        className="footer__social-icon"
                    />
                </Link>

                <Link to="https://github.com/RisticoniPierreJ">
                    <FontAwesomeIcon
                        icon="fa-brands fa-github"
                        className="footer__social-icon"
                    />
                </Link>
            </div>
            <p className="footer__text">© Risticoni Pierre-Jean</p>
        </footer>
    );
}

export default Footer;
